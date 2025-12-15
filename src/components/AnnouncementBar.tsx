import React, { useState } from 'react';

const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] text-white text-sm py-2 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <span>🚀 Early Access Now Available - </span>
        <a href="#pricing" className="underline hover:no-underline font-medium">
          Book Your Demo Today
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white/20 rounded p-1 text-xs"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBar;