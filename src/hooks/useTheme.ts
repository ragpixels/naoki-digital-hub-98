
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Always set to dark mode for admin panel
    setIsDark(true);
    localStorage.setItem('admin-theme', 'dark');
    document.documentElement.classList.add('dark');
  }, []);

  // Remove toggle functionality - always dark
  const toggleTheme = () => {
    // Do nothing - always stay dark
  };

  return { isDark, toggleTheme };
};
