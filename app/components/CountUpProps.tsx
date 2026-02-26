"use client";
import { useEffect, useState } from "react";

export default function CountUp({ to, duration, onComplete }: { to: number, duration: number, onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Calculate interval to reach 'to' within 'duration' seconds
    const intervalTime = (duration * 1000) / to; 
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) {
        clearInterval(timer);
        setTimeout(onComplete, 200); // Small buffer before showing site
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [to, duration, onComplete]);

  return <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{count}%</span>;
}
