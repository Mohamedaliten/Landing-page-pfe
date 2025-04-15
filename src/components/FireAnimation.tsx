
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

const FireAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colors for fire particles
    const colors = [
      '#FF3D00', // Bright red
      '#FF9800', // Orange
      '#FFC107', // Amber
      '#FFEB3B', // Yellow
      '#FFECB3'  // Light yellow
    ];

    const createParticle = (x: number, y: number): Particle => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 4 - 2,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.5,
        decay: Math.random() * 0.01 + 0.005
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create new particles occasionally
      if (Math.random() < 0.3) {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        particlesRef.current.push(createParticle(x, y));
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= particle.decay;

        if (particle.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          return;
        }

        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
};

export default FireAnimation;
