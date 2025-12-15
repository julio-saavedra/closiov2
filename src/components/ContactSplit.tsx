import React, { useState } from 'react';
import { subscribeToNewsletter } from '@/lib/supabase';
import { GlowButton } from '@/components/ui/glow-button';

const ContactSplit = React.memo(() => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.5)] glow-hover">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,102,255,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(43,79,179,0.15),transparent_55%)] opacity-60" />

          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Stay in the Loop with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">
                Closio
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#A8B3C7] max-w-2xl mx-auto mb-10 leading-relaxed">
              Be the first to hear about updates, early access offers, and exclusive insights.
            </p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <span className="text-green-400 text-3xl">✓</span>
                </div>
                <p className="text-xl font-semibold text-green-400">You're in!</p>
                <p className="text-[#A8B3C7] mt-2">We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') {
                          setStatus('idle');
                          setErrorMessage('');
                        }
                      }}
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#2C66FF] focus:ring-2 focus:ring-[#2C66FF]/20 outline-none transition-all text-white placeholder:text-[#A8B3C7]"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <GlowButton
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 rounded-xl whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Joining...</span>
                      </span>
                    ) : (
                      'Join the Closio Newsletter'
                    )}
                  </GlowButton>
                </div>

                {status === 'error' && errorMessage && (
                  <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
                )}
              </form>
            )}
          </div>

          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(44, 102, 255, 0.1)' }} />
        </div>
      </div>
    </section>
  );
});

ContactSplit.displayName = 'ContactSplit';

export default ContactSplit;
