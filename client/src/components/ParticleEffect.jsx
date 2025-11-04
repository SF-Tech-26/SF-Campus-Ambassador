import React from 'react';

class Particle {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsla(${hue}, 100%, 70%, 0.8)`;
    this.life = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
    this.life -= 1;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleEffect() {
  const canvasRef = React.useRef(null);
  const particlesRef = React.useRef([]);
  const mousePositionRef = React.useRef({ x: null, y: null });
  const hueRef = React.useRef(0);
  const animationFrameId = React.useRef(null);

  const handlePointerMove = React.useCallback((event) => {
    let clientX, clientY;
    if (event.touches) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    mousePositionRef.current.x = clientX;
    mousePositionRef.current.y = clientY;
    
    for (let i = 0; i < 5; i++) {
      if (mousePositionRef.current.x && mousePositionRef.current.y) {
        particlesRef.current.push(
          new Particle(mousePositionRef.current.x, mousePositionRef.current.y, hueRef.current)
        );
      }
    }
    hueRef.current = (hueRef.current + 3) % 360;
  }, []);

  const animate = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = particlesRef.current.length - 1; i >= 0; i--) {
      const particle = particlesRef.current[i];
      if (particle.life <= 0) {
        particlesRef.current.splice(i, 1);
      } else {
        particle.update();
        particle.draw(ctx);
      }
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    animationFrameId.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, handlePointerMove]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none" style={{ zIndex: 9999 }}>
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      />
    </div>
  );
}