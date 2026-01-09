import { useState, useEffect } from 'react';
import preloaderVideo from '../assets/ilu_4.mp4';

const Preloader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Minimum display time for the preloader (let video play a bit)
        const minDisplayTime = 2500; // 2.5 seconds minimum
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

            setTimeout(() => {
                setIsFadingOut(true);
                // Wait for fade animation to complete
                setTimeout(() => {
                    setIsVisible(false);
                    if (onComplete) onComplete();
                }, 500);
            }, remainingTime);
        };

        // Listen for window load event
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`preloader ${isFadingOut ? 'fade-out' : ''}`}
            style={{
                position: 'fixed',
                inset: 0,
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: isFadingOut ? 0 : 1,
                transition: 'opacity 0.5s ease-out',
                overflow: 'hidden',
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    maxWidth: '700px',
                    maxHeight: '700px',
                    width: '95%',
                    height: 'auto',
                    objectFit: 'contain',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                }}
            >
                <source src={preloaderVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Preloader;
