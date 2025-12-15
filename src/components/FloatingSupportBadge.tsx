import React from 'react';

const FloatingSupportBadge = React.memo(() => {
  const openChat = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={openChat}
      className="glass-btn-lite glass-btn-lite--primary fixed bottom-6 right-6 z-40 p-4 rounded-full group text-2xl"
      aria-label="Open support chat"
    >
      <span className="group-hover:rotate-12 transition-transform inline-block">💬</span>

      <div className="absolute inset-0 bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] rounded-full animate-ping opacity-20"></div>

      <div className="support-tooltip absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Need help? Chat with us!
      </div>
    </button>
  );
});

FloatingSupportBadge.displayName = 'FloatingSupportBadge';

export default FloatingSupportBadge;
