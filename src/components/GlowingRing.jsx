import { useEffect, useRef } from 'react';
import './GlowingRing.css';

export default function GlowingRing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 64;
    canvas.width = size;
    canvas.height = size;

    let rotation = 0;
    let animationId;

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2.5;

      // Save context state
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.translate(-centerX, -centerY);

      const color = '#6495ed';  // Single blue color
      const glow = '#4a90e2';   // Glow color

      // Create gradient that moves around the circle
      const gradient = ctx.createLinearGradient(
        centerX - radius,
        centerY,
        centerX + radius,
        centerY
      );
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.15, color);
      gradient.addColorStop(0.35, 'rgba(100, 149, 237, 0.8)');
      gradient.addColorStop(0.65, 'rgba(100, 149, 237, 0.8)');
      gradient.addColorStop(0.85, color);
      gradient.addColorStop(1, 'transparent');

      // Draw main glowing circular ring
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;
      ctx.shadowBlur = 20;
      ctx.shadowColor = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw extra glow layer for more intensity
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw inner subtle glow
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 15;
      ctx.strokeStyle = 'rgba(100, 149, 237, 0.5)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 2, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Update rotation for smooth animation (60fps)
      rotation += 0.02;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="glowing-ring"
      aria-hidden="true"
    />
  );
}
