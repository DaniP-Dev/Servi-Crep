// src/hooks/useAnimations.ts
"use client";
import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    // Inicializar WOW.js cuando esté disponible
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).WOW) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
      }).init();
    }
  }, []);
};