"use client";
import { useState, useEffect } from "react";
import CountUp from "./CountUpProps";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

 
  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CountUp to={100} duration={3} onComplete={() => setIsLoading(false)} />
      </div>
    );
  }


  return <>{children}</>;
}
