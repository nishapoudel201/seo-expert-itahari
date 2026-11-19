import React from 'react';

export const AmbientDust: React.FC = () => {
  // Baby Pink and soft rose gold shimmer motes
  const particles = [
    { top: '12%', left: '8%', size: 2.5, color: 'rgba(244, 114, 182, 0.65)', delay: '0s', dur: '6.2s' },
    { top: '22%', left: '82%', size: 2.0, color: 'rgba(251, 182, 206, 0.7)', delay: '0.6s', dur: '7.4s' },
    { top: '38%', left: '16%', size: 3.0, color: 'rgba(244, 114, 182, 0.5)', delay: '1.2s', dur: '5.8s' },
    { top: '56%', left: '90%', size: 1.8, color: 'rgba(236, 72, 153, 0.5)', delay: '1.8s', dur: '8.1s' },
    { top: '70%', left: '26%', size: 2.4, color: 'rgba(251, 182, 206, 0.6)', delay: '2.4s', dur: '6.9s' },
    { top: '18%', left: '62%', size: 2.2, color: 'rgba(244, 114, 182, 0.55)', delay: '3.0s', dur: '5.5s' },
    { top: '82%', left: '48%', size: 2.8, color: 'rgba(244, 114, 182, 0.6)', delay: '0.8s', dur: '7.2s' },
    { top: '32%', left: '42%', size: 1.8, color: 'rgba(251, 182, 206, 0.5)', delay: '2.1s', dur: '6.5s' },
    { top: '64%', left: '74%', size: 2.4, color: 'rgba(236, 72, 153, 0.45)', delay: '1.5s', dur: '7.8s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[6]" aria-hidden="true">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="dust-particle absolute rounded-full shadow-[0_0_8px_currentColor]"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            color: p.color,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  );
};
