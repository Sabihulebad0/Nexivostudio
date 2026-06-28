'use client';

import { useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

export function useReCaptcha() {
  const execute = useCallback(async (action: string): Promise<string> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
    if (!siteKey || typeof window === 'undefined' || !window.grecaptcha?.enterprise) return '';
    return new Promise((resolve) => {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(siteKey, { action });
          resolve(token);
        } catch {
          resolve('');
        }
      });
    });
  }, []);

  return { execute };
}
