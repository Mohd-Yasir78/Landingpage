import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingPage = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background animation
    tl.to(containerRef.current, {
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
      duration: 2,
      ease: 'power2.inOut'
    })

    // Title animation
    .from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'back.out(1.7)'
    })

    // Icon animation
    .from(iconRef.current, {
      scale: 0,
      rotation: -180,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)'
    })

    // Text animation
    .from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Continuous icon animation
    gsap.to(iconRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 8,
      ease: 'none'
    });

    // Pulsating effect on the icon
    gsap.to(iconRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden">
      <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-white mb-12 tracking-wider">
        ExpenseTracker
      </h1>
      
      <svg
        ref={iconRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-40 h-40 text-white filter drop-shadow-lg"
      >
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
        />
      </svg>

      <p ref={textRef} className="mt-12 text-white text-xl font-semibold tracking-wide">
        Loading your financial future...
      </p>
    </div>
  );
};

export default LoadingPage;