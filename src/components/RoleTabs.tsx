import React, { useState, useEffect, useRef } from 'react';
import { RoleVideo } from './ui/role-video';
import { GlowButton } from '@/components/ui/glow-button';

const AGENCY_OWNER_VIDEO_SRC =
  "https://www.dropbox.com/scl/fi/0t7iwsxpmx3uwbm1d5x9k/closio-navbar-vertical.mp4?rlkey=9w69pohfb6s87rx7k0xvpmtg4&raw=1";

function AgencyOwnerVideo({ isActive }: { isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    if (!isActive || !videoRef.current) return;

    const video = videoRef.current;
    video.currentTime = 0;

    const play = async () => {
      if (isPlayingRef.current) return;
      try {
        isPlayingRef.current = true;
        await video.play();
      } catch {
        isPlayingRef.current = false;
      }
    };

    play();

    return () => {
      isPlayingRef.current = false;
    };
  }, [isActive]);

  const handleEnded = () => {
    isPlayingRef.current = false;
  };

  const handlePause = () => {
    isPlayingRef.current = false;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[420px] h-[420px] rounded-2xl backdrop-blur-[20px] bg-white/[0.03] border border-white/5 flex items-center justify-center">
        <video
          ref={videoRef}
          src={AGENCY_OWNER_VIDEO_SRC}
          className="w-[95%] h-[95%] max-w-[380px] max-h-[640px] object-contain rounded-xl"
          muted
          playsInline
          onEnded={handleEnded}
          onPause={handlePause}
        />
      </div>
    </div>
  );
}

const RoleTabs: React.FC = () => {
  const [activeRole, setActiveRole] = useState('owner');

  const roles = [
    {
      id: 'owner',
      title: 'Agency Owner',
      screenshot: 'Agency Dashboard Overview',
      benefits: [
        'Complete visibility across all agents and pipelines',
        'Commission split management and reporting',
        'Performance analytics and team productivity metrics'
      ]
    },
    {
      id: 'leader',
      title: 'Sales Leader',
      screenshot: 'Team Performance Dashboard',
      benefits: [
        'Agent coaching tools and performance tracking',
        'Pipeline forecasting and conversion analytics',
        'Team goal setting and progress monitoring'
      ]
    },
    {
      id: 'agent',
      title: 'Agent',
      screenshot: 'Individual Agent Workspace',
      benefits: [
        'Personal pipeline and activity management',
        'Commission tracking and earning projections',
        'Client communication and follow-up automation'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Tailored to Your Role
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A8B3C7] max-w-3xl mx-auto leading-relaxed px-4">
            Every user gets exactly what they need to be successful in their role
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 overflow-x-auto px-4">
          <div className="bg-white/6 backdrop-blur-xl border border-white/12 rounded-2xl p-1.5 sm:p-2 inline-flex">
            <div className="flex space-x-1 sm:space-x-2">
              {roles.map((role) => (
                activeRole === role.id ? (
                  <GlowButton
                    key={role.id}
                    onClick={() => setActiveRole(role.id)}
                    label={role.title}
                    className="whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl text-sm sm:text-base"
                  />
                ) : (
                  <button
                    key={role.id}
                    onClick={() => setActiveRole(role.id)}
                    className="flex items-center whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl transition-all text-sm sm:text-base text-[#A8B3C7] hover:text-white hover:bg-white/10"
                  >
                    <span className="font-semibold">{role.title}</span>
                  </button>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Screenshot Mock / Video */}
          <div className="order-2 lg:order-1">
            <div className="info-card info-card--outline info-card--hover info-card--roomy glow-hover">
              {activeRole === 'owner' ? (
                <AgencyOwnerVideo isActive={activeRole === 'owner'} />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-[#2C66FF]/20 to-[#2B4FB3]/20 rounded-lg flex items-center justify-center px-4">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {roles.find(r => r.id === activeRole)?.screenshot}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Benefits */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Built for {roles.find(r => r.id === activeRole)?.title}s
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {roles.find(r => r.id === activeRole)?.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#2C66FF] to-[#2B4FB3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-[#A8B3C7] text-sm sm:text-base leading-relaxed text-left">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleTabs;