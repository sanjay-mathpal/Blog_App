"use client";

import { useThemeContext } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useThemeContext();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <div className={theme}>{children}</div>
    )
  }
}
