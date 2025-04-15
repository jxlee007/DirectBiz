
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import splashAnimation from '../data/splash-animation.json';

interface SplashScreenProps {
  onFinish: () => void;
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onFinish, 
  duration = 2500 
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 500); // Allow time for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  if (!show) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${!show ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="w-64 h-64 flex flex-col items-center">
        <Lottie 
          animationData={splashAnimation} 
          loop={true}
          className="w-full h-full"
        />
        <h1 className="text-3xl font-bold mt-4 text-primary">DirectBiz</h1>
        <p className="text-muted-foreground mt-2">Find local businesses easily</p>
      </div>
    </div>
  );
};
