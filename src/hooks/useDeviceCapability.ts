import { useState, useEffect } from 'react';

interface DeviceCapability {
  supportsWebGL: boolean;
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  isTouchDevice: boolean;
}

const SSR_DEFAULTS: DeviceCapability = {
  supportsWebGL: false,
  isLowEndDevice: true,
  prefersReducedMotion: false,
  isTouchDevice: false,
};

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>(SSR_DEFAULTS);

  useEffect(() => {
    const checkWebGL = (): boolean => {
      try {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext('webgl') || canvas.getContext('webgl2'));
      } catch {
        return false;
      }
    };

    setCapability({
      supportsWebGL: checkWebGL(),
      isLowEndDevice: (navigator.hardwareConcurrency ?? 2) < 4,
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      isTouchDevice: window.matchMedia('(pointer: coarse)').matches,
    });
  }, []);

  return capability;
}
