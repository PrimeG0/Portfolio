"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  image?: string; 
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  className?: string;
}

const DEFAULT_GLOW_COLOR = '132, 0, 255';

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 10;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  image?: string;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
}> = ({
  children,
  image,
  className = '',
  disableAnimations = false,
  style,
  particleCount = 12,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const isHoveredRef = useRef(false);

  const clearAllParticles = useCallback(() => {
    particlesRef.current.forEach(p => p.remove());
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    
    for (let i = 0; i < particleCount; i++) {
      const p = createParticleElement(Math.random() * width, Math.random() * height, glowColor);
      cardRef.current.appendChild(p);
      particlesRef.current.push(p);

      gsap.fromTo(p, { scale: 0, opacity: 0 }, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        x: (Math.random() - 0.5) * 50,
        y: (Math.random() - 0.5) * 50,
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut" 
      });
    }
  }, [particleCount, glowColor]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    animateParticles();
    if (imgRef.current) gsap.to(imgRef.current, { scale: 1.1, duration: 0.6, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    clearAllParticles();
    if (imgRef.current) gsap.to(imgRef.current, { scale: 1, duration: 0.6 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}
      style={{ ...style, position: 'relative' }}
    >
      {/* IMAGE LAYER */}
      {image && (
        <>
          <img
            ref={imgRef}
            src={image}
            alt="card-bg"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-50 group-hover:opacity-90"
            style={{ zIndex: 1 }}
          />
          
          <div className="absolute inset-0 " style={{ zIndex: 2 }} />
        </>
      )}

    
      <div className="relative h-full w-full p-6" style={{ zIndex: 20 }}>
        {children}
      </div>
    </div>
  );
};

export default function BentoGrid() {
  const cardData: BentoCardProps[] = [
    { title: 'Durga Online', description: 'Project', label: 'Durga Online', image: '/Durga.png', className: 'md:col-span-2' },
    { title: 'Minecraft', description: 'Project', label: 'Clone', image: '/minecraft.png' },
    { title: 'Shoe Website', description: 'Project', label: 'shoe store', image: '/Shoe.png' },
    { title: 'Noisis', description: 'Project', label: 'Education', image: '/Noisis.png', className: 'md:col-span-2' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-5xl  mx-auto bg-white">
      {cardData.map((card, i) => (
        <ParticleCard 
            key={i} 
            image={card.image} 
            className={card.className} 
            style={{ backgroundColor: card.color || '#020010', minHeight: '20rem' }}
        >
          <div className="flex flex-col h-full justify-end">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">{card.label}</span>
            <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </div>
        </ParticleCard>
      ))}
    </div>
  );
}
