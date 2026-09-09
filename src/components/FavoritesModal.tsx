import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  X, 
  Trash2, 
  MessageSquare, 
  PenTool, 
  BookOpen, 
  Image as ImageIcon, 
  Sparkles, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';
import { useFavorites, FavoriteSection, Favorite } from '../contexts/FavoritesContext';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: FavoriteSection, itemId: string) => void;
}

const SECTION_META: Record<
  FavoriteSection, 
  { 
    label: string; 
    icon: React.ReactNode; 
    color: string; 
    activeTab: string; 
    badge: string; 
    activeBadge: string;
    bg: string;
  }
> = {
  sprechen: {
    label: 'Sprechen',
    icon: <MessageSquare size={16} />,
    color: 'text-violet-600',
    activeTab: 'bg-violet-600 text-white shadow-sm shadow-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    activeBadge: 'bg-white/25 text-white',
    bg: 'bg-violet-50',
  },
  schreiben: {
    label: 'Schreiben',
    icon: <PenTool size={16} />,
    color: 'text-emerald-600',
    activeTab: 'bg-emerald-600 text-white shadow-sm shadow-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    activeBadge: 'bg-white/25 text-white',
    bg: 'bg-emerald-50',
  },
  lesen: {
    label: 'Lesen',
    icon: <BookOpen size={16} />,
    color: 'text-blue-600',
    activeTab: 'bg-blue-600 text-white shadow-sm shadow-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    activeBadge: 'bg-white/25 text-white',
    bg: 'bg-blue-50',
  },
  bilder: {
    label: 'Wortschatz',
    icon: <ImageIcon size={16} />,
    color: 'text-amber-600',
    activeTab: 'bg-amber-600 text-white shadow-sm shadow-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    activeBadge: 'bg-white/25 text-white',
    bg: 'bg-amber-50',
  },
  konjugation: {
    label: 'Verben',
    icon: <Sparkles size={16} />,
    color: 'text-rose-600',
    activeTab: 'bg-rose-600 text-white shadow-sm shadow-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    activeBadge: 'bg-white/25 text-white',
    bg: 'bg-rose-50',
  },
};

const SECTION_ORDER: FavoriteSection[] = ['sprechen', 'schreiben', 'lesen', 'bilder', 'konjugation'];

export function FavoritesModal({ isOpen, onClose, onNavigate }: FavoritesModalProps) {
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();
  const [selectedSection, setSelectedSection] = useState<FavoriteSection>('sprechen');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Group favorites by section
  const grouped = SECTION_ORDER.reduce<Record<FavoriteSection, Favorite[]>>(
    (acc, section) => {
      acc[section] = favorites.filter((f) => f.section === section);
      return acc;
    },
    { sprechen: [], schreiben: [], lesen: [], bilder: [], konjugation: [] }
  );

  // When modal opens, select first section that has items (or default to sprechen)
  useEffect(() => {
    if (isOpen) {
      const firstWithItems = SECTION_ORDER.find((s) => grouped[s].length > 0);
      setSelectedSection(firstWithItems || 'sprechen');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const hasAny = favorites.length > 0;
  const currentItems = grouped[selectedSection] || [];
  const currentMeta = SECTION_META[selectedSection];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div 
          className="relative w-full sm:max-w-lg sm:mx-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] sm:max-h-[85vh] z-10"
          style={{ animation: 'slideUpModal 0.28s cubic-bezier(0.16,1,0.3,1) forwards' }}
        >
          <style>{`
            @keyframes slideUpModal {
              from { transform: translateY(100%); opacity: 0; }
              to   { transform: translateY(0);    opacity: 1; }
            }
            @media (min-width: 640px) {
              @keyframes slideUpModal {
                from { transform: translateY(24px) scale(0.97); opacity: 0; }
                to   { transform: translateY(0)     scale(1);    opacity: 1; }
              }
            }
            @keyframes popScale {
              from { transform: scale(0.9); opacity: 0; }
              to   { transform: scale(1);   opacity: 1; }
            }
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          {/* Drag handle for mobile */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
          </div>

          {/* Top Header */}
          <div className="flex items-center justify-between px-5 pt-3 sm:pt-5 pb-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center shadow-xs">
                <Heart size={20} className="text-red-500" fill="currentColor" />
              </div>
              <div>
                <h2 className="font-fredoka text-xl font-bold text-gray-900 leading-tight">
                  Meine Favoriten
                </h2>
                <p className="text-xs text-gray-400 font-medium">
                  {favorites.length === 0 ? 'Noch keine Favoriten gespeichert' : `${favorites.length} Einträge gespeichert`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Delete All Button (Triggers Popup) */}
              {hasAny && (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  title="Alle Favoriten löschen"
                  className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
                >
                  <Trash2 size={17} />
                </button>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* HORIZONTAL Section Selector Bar (Sprechen, Schreiben, Lesen, Wortschatz, Verben) */}
          <div className="px-4 sm:px-5 py-2.5 border-b border-gray-100 shrink-0 bg-gray-50/50">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -my-1">
              {SECTION_ORDER.map((section) => {
                const meta = SECTION_META[section];
                const count = grouped[section].length;
                const isSelected = selectedSection === section;

                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => setSelectedSection(section)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
                      isSelected
                        ? meta.activeTab
                        : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200/80 shadow-2xs'
                    }`}
                  >
                    <span className={isSelected ? 'text-white' : meta.color}>
                      {meta.icon}
                    </span>
                    <span>{meta.label}</span>
                    {count > 0 && (
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isSelected ? meta.activeBadge : meta.badge
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content: Selected Section's Favorites List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5">
            {!hasAny ? (
              /* Global Empty State */
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center shadow-xs">
                  <Heart size={36} className="text-red-300" />
                </div>
                <div>
                  <p className="font-fredoka text-lg text-gray-800 font-medium">Noch keine Favoriten</p>
                  <p className="text-sm text-gray-400 mt-1 max-w-xs leading-relaxed">
                    Tippe auf das ❤️ bei einem Thema, einer Lektion oder einem Test um ihn hier zu speichern.
                  </p>
                </div>
              </div>
            ) : currentItems.length === 0 ? (
              /* Empty state for the active section */
              <div className="flex flex-col items-center justify-center py-16 gap-3 text-center px-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${currentMeta.bg} ${currentMeta.color} shadow-xs`}>
                  {currentMeta.icon}
                </div>
                <div>
                  <p className="font-fredoka text-base font-bold text-gray-800">
                    Keine Favoriten in {currentMeta.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 max-w-xs leading-relaxed">
                    Speichere {currentMeta.label}-Themen, indem du auf das Herz-Symbol auf den Karten klickst.
                  </p>
                </div>
              </div>
            ) : (
              currentItems.map((fav) => (
                <div
                  key={`${fav.section}-${fav.id}`}
                  className="flex items-center gap-3 p-3 bg-gray-50/90 hover:bg-gray-100/90 rounded-2xl transition-all group border border-gray-100 hover:border-gray-200 shadow-2xs"
                >
                  {/* Icon or emoji */}
                  {fav.icon ? (
                    <span className="text-2xl w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow-xs shrink-0">
                      {fav.icon}
                    </span>
                  ) : (
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${currentMeta.bg} ${currentMeta.color} shadow-xs`}>
                      {currentMeta.icon}
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <div className="flex-1 min-w-0">
                    <p className="font-fredoka text-base font-medium text-gray-900 truncate leading-tight">
                      {fav.title}
                    </p>
                    {fav.subtitle && (
                      <p className="text-xs text-gray-400 truncate mt-0.5">
                        {fav.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate(fav.section, fav.id);
                        onClose();
                      }}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-600 hover:text-primary hover:border-primary/40 transition-colors cursor-pointer active:scale-90 shadow-2xs"
                      title="Öffnen"
                    >
                      <span>Öffnen</span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(fav)}
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer active:scale-90"
                      title="Aus Favoriten entfernen"
                    >
                      <Heart size={16} fill="currentColor" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Popup Modal for Deleting All Favorites */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setShowDeleteConfirm(false)}
          />

          {/* Dialog Container */}
          <div 
            className="relative bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full z-10 border border-gray-100"
            style={{ animation: 'popScale 0.22s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            {/* Warning Icon */}
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
              <Trash2 size={26} />
            </div>

            {/* Title & Description */}
            <h3 className="font-fredoka text-xl font-bold text-center text-gray-900 mb-2">
              Alle Favoriten löschen?
            </h3>
            <p className="text-sm text-center text-gray-500 mb-6 leading-relaxed">
              Möchtest du wirklich alle <span className="font-bold text-gray-700">{favorites.length}</span> gespeicherten Favoriten entfernen? Diese Aktion kann nicht rückgängig gemacht werden.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors cursor-pointer active:scale-95"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={() => {
                  clearFavorites();
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm shadow-md shadow-red-200 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Trash2 size={16} />
                <span>Ja, löschen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
