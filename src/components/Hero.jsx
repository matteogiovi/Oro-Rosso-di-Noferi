import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating golden particles
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedY: -(Math.random() * 0.3 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += 0.02;
        const currentOpacity = p.opacity * (0.6 + Math.sin(p.pulse) * 0.4);

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 162, 84, ${currentOpacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-overlay"></div>
      <canvas ref={particlesRef} className="hero-particles" />

      <div className="hero-content">
        <div className="hero-logo-container">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-oro-rosso.jpg`}
            alt="Logo Oro Rosso di Noferi"
            className="hero-logo"
            id="hero-logo"
          />
        </div>

        <p className="hero-subtitle">
          Dalla passione per la terra nasce l'oro rosso della nostra tradizione.
        </p>

        <div className="hero-divider">
          <svg viewBox="0 0 200 20" className="divider-svg">
            <path
              d="M0,10 Q50,0 100,10 Q150,20 200,10"
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <a href="#chi-siamo" className="hero-cta" id="hero-cta">
          Scopri la nostra storia
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
