import React, { useState, useEffect } from 'react';

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Closio transformed our agency operations. We went from scattered spreadsheets to a unified system that actually understands life insurance. Our close rate improved 40% in the first quarter.",
      author: "Sarah Mitchell",
      title: "Agency Owner",
      company: "Premier Life Solutions"
    },
    {
      quote: "The commission tracking alone has saved us hours every week. Finally, a CRM that speaks our language and doesn't require a dozen integrations to do what we need.",
      author: "Michael Rodriguez",
      title: "Sales Director",
      company: "Guardian Benefits Group"
    },
    {
      quote: "Our agents love the mobile app and automated follow-ups. It's like having a personal assistant that never forgets to follow up with prospects. Game-changing for our productivity.",
      author: "Jennifer Chen",
      title: "Team Lead",
      company: "Secure Future Insurance"
    },
    {
      quote: "Implementation was seamless. The team understood our workflow immediately and had us up and running in days, not months. The ROI has been incredible.",
      author: "David Thompson",
      title: "Managing Partner",
      company: "Elite Insurance Partners"
    },
    {
      quote: "The analytics dashboard gives me visibility I never had before. I can see exactly where leads are getting stuck and coach my agents accordingly. It's like having x-ray vision into our sales process.",
      author: "Lisa Park",
      title: "Sales Manager",
      company: "Liberty Life Agency"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-[calc(100vw-12rem)] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proof in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C66FF] to-[#2B4FB3]">Production</span>
          </h2>
          <p className="text-xl text-[#A8B3C7] max-w-2xl mx-auto leading-relaxed">
            Don't take our word for it. See what life insurance professionals are saying about Closio.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="info-card info-card--outline info-card--roomy relative overflow-hidden glow-hover">

            <div className="relative z-10">
              <p className="text-lg lg:text-xl leading-relaxed mb-8 text-center">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2C66FF] to-[#2B4FB3] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-1">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-[#A8B3C7] mb-1">
                  {testimonials[activeIndex].title}
                </p>
                <p className="text-[#2C66FF] font-medium">
                  {testimonials[activeIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={goToPrev}
                className="glass-btn-lite glass-btn-lite--default rounded-full p-3 text-xl"
              >
                ‹
              </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={goToNext}
                className="glass-btn-lite glass-btn-lite--default rounded-full p-3 text-xl"
              >
                ›
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-[#2C66FF] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Side Testimonials Preview */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-12">
          {testimonials
            .filter((_, index) => index !== activeIndex)
            .slice(0, 2)
            .map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-preview-glass rounded-xl p-6 transition-all cursor-pointer glow-hover"
                onClick={() => setActiveIndex(testimonials.findIndex(t => t === testimonial))}
              >
                <p className="text-sm mb-4 line-clamp-3">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2C66FF] to-[#2B4FB3] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">{testimonial.author}</h5>
                    <p className="text-[#A8B3C7] text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;