import React, { useEffect, useRef } from 'react';

export const BackgroundBeams: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const beams = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 250 + 100,
      speed: Math.random() * 0.4 + 0.15,
      angle: (Math.PI / 4) + (Math.random() * 0.1 - 0.05),
      width: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      beams.forEach((beam) => {
        beam.x += Math.cos(beam.angle) * beam.speed;
        beam.y += Math.sin(beam.angle) * beam.speed;

        if (beam.x > width + 100 || beam.y > height + 100) {
          beam.x = Math.random() * width * 0.5 - 100;
          beam.y = -50;
        }

        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        );

        gradient.addColorStop(0, 'rgba(56, 136, 255, 0)');
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${beam.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(56, 136, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none opacity-40 dark:opacity-30 ${className}`}
    />
  );
};
