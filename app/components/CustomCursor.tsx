'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function RotatingCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotate = useMotionValue(0);

  // Smooth springs for natural movement
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });
  const springRotate = useSpring(rotate, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleUpdate = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // 1. Find the nearest button (or any interactive element)
      const target = e.target as HTMLElement;
      const button = target.closest('button');

      if (button) {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 2. Calculate the angle in radians, then convert to degrees
        const angleRad = Math.atan2(centerY - e.clientY, centerX - e.clientX);
        const angleDeg = angleRad * (180 / Math.PI);
        
        // Adjust the '45' based on your image's initial orientation
        rotate.set(angleDeg + 45); 
      } else {
        rotate.set(0); // Reset rotation when not near a button
      }
    };

    window.addEventListener('mousemove', handleUpdate);
    return () => window.removeEventListener('mousemove', handleUpdate);
  }, [mouseX, mouseY, rotate]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        zIndex: 9999,
        x: springX,
        y: springY,
        rotate: springRotate,
        translateX: '-50%', // Centers the cursor image on the mouse point
        translateY: '-50%',
      }}
    >
      <img src="/custom-cursor.png" alt="cursor" className="w-8 h-8" />
    </motion.div>
  );
}
