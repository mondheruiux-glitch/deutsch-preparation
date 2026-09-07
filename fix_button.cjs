const fs = require('fs');

let appData = fs.readFileSync('src/App.tsx', 'utf8');

// Add a container for the FAB inside App.tsx instead of SprechenView to ensure it stays in the device frame
appData = appData.replace(
  `          {activeTab === 'sprechen' && (
            <SprechenView 
              selectedTopic={selectedTopic} 
              onSelectTopic={setSelectedTopic} 
            />
          )}`,
  `          {activeTab === 'sprechen' && (
            <SprechenView 
              selectedTopic={selectedTopic} 
              onSelectTopic={setSelectedTopic} 
            />
          )}`
);

// We'll fix SprechenView directly by using a sticky footer approach
let sprechenData = fs.readFileSync('src/components/SprechenView.tsx', 'utf8');
sprechenData = sprechenData.replace(
  `      {/* Floating Action Button for Bilder */}
      <button
        onClick={() => setShowBilder(true)}
        className="fixed bottom-20 right-6 w-14 h-14 bg-primary text-white rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.2)] flex items-center justify-center active:scale-95 transition-transform z-40 border-2 border-white/20"
      >
        <ImageIcon size={28} />
      </button>
      <div className="flex flex-col gap-1">`,
  `      <div className="flex flex-col gap-1">`
);

// Add the button back, but inside the main container with a sticky wrapper at the very bottom
// Wait, a better way is to just use a sticky div in SprechenView
sprechenData = sprechenData.replace(
  `    <div className="p-4 pt-10 pb-24">`,
  `    <div className="p-4 pt-10 pb-24 relative min-h-full flex flex-col">`
);

// Insert sticky button at the end of the flex-col
sprechenData = sprechenData.replace(
  `    </div>
  );
}`,
  `      {/* Floating Action Button for Bilder */}
      <div className="sticky bottom-6 mt-auto self-end pointer-events-none w-full flex justify-end z-40">
        <button
          onClick={() => setShowBilder(true)}
          className="w-14 h-14 bg-primary text-white rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.2)] flex items-center justify-center active:scale-95 transition-transform pointer-events-auto border-2 border-white/20"
        >
          <ImageIcon size={28} />
        </button>
      </div>
    </div>
  );
}`
);

fs.writeFileSync('src/components/SprechenView.tsx', sprechenData);

// Now let's fix the Back button in BildWortschatzView
let bildData = fs.readFileSync('src/components/BildWortschatzView.tsx', 'utf8');

// Make the back button clearly visible on top of everything with extra margins
bildData = bildData.replace(
  `<div className="absolute top-0 left-0 w-full p-4 pt-safe z-50 flex justify-between items-center pointer-events-none">`,
  `<div className="absolute top-4 left-4 z-[100] flex pointer-events-none">`
);

// Change button style to be more prominent and fix alignment
bildData = bildData.replace(
  `className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-lg active:scale-95 transition-transform pointer-events-auto"`,
  `className="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/30 shadow-xl active:scale-95 transition-transform pointer-events-auto"`
);

// Let's remove w-full p-4 pt-safe from the wrapper so it just sits top-left
fs.writeFileSync('src/components/BildWortschatzView.tsx', bildData);

