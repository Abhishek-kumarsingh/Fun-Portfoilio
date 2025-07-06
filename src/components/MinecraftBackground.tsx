import React from 'react';

// Create a simpler background component that doesn't rely on Three.js
const MinecraftBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-green-200 opacity-80"></div>
      <div className="absolute inset-0 retro-grid"></div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-amber-800 rounded-sm animate-pixelate"></div>
      <div className="absolute top-40 right-40 w-12 h-12 bg-green-700 rounded-sm animate-pixelate" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-14 h-14 bg-blue-600 rounded-sm animate-pixelate" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-10 h-10 bg-stone-700 rounded-sm animate-pixelate" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-green-600 rounded-sm animate-pixelate" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default MinecraftBackground;