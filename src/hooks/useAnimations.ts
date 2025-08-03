// src/hooks/useAnimations.ts
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).WOW) {
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