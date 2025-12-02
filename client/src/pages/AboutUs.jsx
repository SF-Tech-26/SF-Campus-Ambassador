import React, { useEffect, useState } from 'react';
import './AboutUs.css'; 

import aboutUsBackground from '../assets/about-us-copy.png'; 

// --- Helper Functions (Refactored from your old script) ---

// Formats the final number for display after the animation is complete
const formatFinalNumber = (numId, value) => {
  const num = parseInt(value, 10);
  if (numId === 'stat-hits') {
    return `${(num / 100000).toFixed(0)} lakh+`;
  } else if (numId === 'stat-colleges' || numId === 'stat-footfalls') {
    return `${num.toLocaleString('en-IN')}+`;
  }
  return num.toLocaleString('en-IN');
};

// --- The Main Component ---
function AboutUs() {
    // State to manage the text content of the stats, starting at '0'
    const [statHits, setStatHits] = useState('0');
    const [statColleges, setStatColleges] = useState('0');
    const [statFootfalls, setStatFootfalls] = useState('0');

    // Mappings to easily select the correct state setter during animation
    const statSetters = {
        'stat-hits': setStatHits,
        'stat-colleges': setStatColleges,
        'stat-footfalls': setStatFootfalls
    };

    // Animation logic and Intersection Observer setup
    useEffect(() => {
        const animateCount = (targetId, targetValue, setter) => {
            const targetNum = parseInt(targetValue, 10);
            const duration = 2000;
            const startTime = performance.now();

            function step(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(progress * targetNum);

                let displayValue;
                if (targetId === 'stat-hits') {
                    displayValue = `${Math.floor(current / 100000)} lakh`;
                } else {
                    displayValue = current.toLocaleString('en-IN');
                }
                
                setter(displayValue); // Update React State

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    // Set the final formatted value with '+'
                    setter(formatFinalNumber(targetId, targetNum.toString()));
                }
            }
            requestAnimationFrame(step);
        };

        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const target = entry.target.getAttribute('data-target');
                    const setter = statSetters[id];
                    
                    if (setter) {
                        animateCount(id, target, setter);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe the elements after the component has rendered
        document.querySelectorAll('.animated-number').forEach(stat => observer.observe(stat));

        // Cleanup function for the observer when the component is unmounted
        return () => observer.disconnect();
    }, []); 

    // --- The Render/JSX Part (Your HTML body) ---
    return (
        // Apply the background image using the imported path and inline style
        <section 
            className="hero flex items-center justify-center"
            style={{backgroundImage: `url(${aboutUsBackground})`}}
        >
            <div className="relative z-10 max-w-[1280px] w-full flex flex-col md:flex-row content-wrapper justify-between px-4 pt-32 pb-16 overlay-content">
                
                <div className="max-w-3xl md:pl-12">
                    <h1 className="heading-font black-text-red-stroke text-[80px] md:text-[120px] leading-none drop-shadow-lg">
                        Spring Fest
                    </h1>

                    <p className="body-font text-xl md:text-2xl leading-relaxed mt-8">
                        , IIT Kharagpur is one of the largest Social and Cultural Fests in India.
                        Embodying the true spirit of youth, Spring Fest provides a platform
                        for young talent from all over India to showcase their varied talents.
                        As we enter into the <strong>66th edition</strong>, all we are looking forward to is to
                        leave behind a legacy of exquisite experiences. Now, you too have a
                        chance to become a part of this cultural extravaganza. With Campus
                        Ambassador Program you get a chance to be an extended part of the
                        Organizing team of Spring Fest 2026.
                    </p>
                </div>

                {/* Stats: vertical stack - Content is dynamically driven by state variables */}
                <div className="mt-2 flex flex-col gap-6 md:absolute md:right-20 md:top-1/6">
                    <div className="stat-box md:w-56">
                        {/* Display the value from React state */}
                        <p className="number-font text-4xl md:text-5xl font-bold animated-number" id="stat-hits" data-target="3000000">
                            {statHits}
                        </p>
                        <p className="stat-text text-yellow-300 uppercase tracking-widest mt-1">WEBSITE HITS</p>
                    </div>

                    <div className="stat-box md:w-56">
                        <p className="number-font text-4xl md:text-5xl font-bold animated-number" id="stat-colleges" data-target="1300">
                            {statColleges}
                        </p>
                        <p className="stat-text text-blue-300 uppercase tracking-widest mt-1">COLLEGES</p>
                    </div>

                    <div className="stat-box md:w-56">
                        <p className="number-font text-4xl md:text-5xl font-bold animated-number" id="stat-footfalls" data-target="80000">
                            {statFootfalls}
                        </p>
                        <p className="stat-text text-red-300 uppercase tracking-widest mt-1">FOOTFALLS</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;