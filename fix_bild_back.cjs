const fs = require('fs');

let bildData = fs.readFileSync('src/components/BildWortschatzView.tsx', 'utf8');

// Insert the back button right after the style tag
bildData = bildData.replace(
  `      </style>`,
  `      </style>
      
      {onClose && (
        <div className="absolute top-4 left-4 z-[100] flex pointer-events-none">
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/30 shadow-xl active:scale-95 transition-transform pointer-events-auto"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
      )}`
);

fs.writeFileSync('src/components/BildWortschatzView.tsx', bildData);

