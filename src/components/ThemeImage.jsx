import React from 'react';
import { useTheme } from './ThemeProvider.jsx';

const ThemeImage = ({ lightSrc, darkSrc, alt, className = '', ...props }) => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? darkSrc : lightSrc;

  return <img src={src} alt={alt} className={className} {...props} />;
};

export default ThemeImage;
