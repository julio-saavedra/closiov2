import React, { useState } from 'react';

const AutomationFlow: React.FC = () => {
  const [activeTab, setActiveTab] = useState('email');

  const automationTabs = [
    { id: 'email', label: 'Email' },
    { id: 'sms', label: 'SMS' },
    { id: 'tasks', label: 'Tasks' }
  ];

  const flowSteps = {
    email: [
      { title: 'New Lead Added', description: 'Lead enters the system' },
      { title: 'Welcome Email', description: 'Automated intro sequence' },
      { title: 'Follow-up Cadence', description: '5-touch nurture series' },
      { title: 'Task Created', description: 'Schedule personal outreach' },
      { title: 'CRM Update', description: 'Log all interactions' }
    ],
    sms: [
      { title: 'Lead Qualification', description: 'SMS intake form sent' },
      { title: 'Instant Response', description: 'Automated acknowledgment' },
      { title: 'Appointment Booking', description: 'Calendar link delivered' },
      { title: 'Reminder Sequence', description: '24hr & 2hr reminders' },
      { title: 'Post-Meeting', description: 'Thank you & next steps' }
    ],
    tasks: [
      { title: 'Lead Review', description: 'Qualify and score lead' },
      { title: 'Initial Contact', description: 'Make first connection' },
      { title: 'Needs Analysis', description: 'Complete discovery call' },
      { title: 'Proposal Prep', description: 'Generate custom quote' },
      { title: 'Follow-up', description: 'Schedule next touchpoint' }
    ]
  };

  return (
    <section id="automations" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Native Automations, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">
              No Plug-ins
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#A8B3C7] max-w-3xl mx-auto leading-relaxed px-4">
            Built-in automation workflows that actually understand life insurance sales processes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0">
              {automationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 lg:w-full p-4 sm:p-6 rounded-xl text-left transition-all min-w-[140px] sm:min-w-0 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3] text-white shadow-lg shadow-[#2C66FF]/20'
                      : 'info-card info-card--outline info-card--hover'
                  }`}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{tab.label}</h3>
                    <p className={`text-xs sm:text-sm ${
                      activeTab === tab.id ? 'text-white/80' : 'text-[#A8B3C7]'
                    }`}>
                      Built-in to Closio
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Flow Diagram */}
          <div className="lg:col-span-3">
            <div className="info-card info-card--outline info-card--roomy glow-hover">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
                {automationTabs.find(tab => tab.id === activeTab)?.label} Automation Flow
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {flowSteps[activeTab as keyof typeof flowSteps].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#2C66FF] to-[#2B4FB3] rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      {index < flowSteps[activeTab as keyof typeof flowSteps].length - 1 && (
                        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#2C66FF] to-transparent mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{step.title}</h4>
                      <p className="text-[#A8B3C7] text-xs sm:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;