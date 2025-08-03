// src/components/common/AnimatedWrapper.tsx
"use client";
import React, { ReactNode } from 'react';

interface AnimatedWrapperProps {
  children: ReactNode;
  animation?: string;
  delay?: string;
  duration?: string;
  className?: string;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animation = 'fadeIn',
  delay = '0.1s',
  duration = '1s',
  className = ''
}) => {
  return (
    <div 
      className={`wow ${animation} ${className}`}
      data-wow-delay={delay}
      data-wow-duration={duration}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;