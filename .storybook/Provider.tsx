import { useState } from 'react';
import React from 'react';
import { HcThemeProvider, Theme } from '../src';
import { darkThemeButton, innerProviderStyle, lightThemeButton, providerStyle } from './styles';

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  return (
    <div style={providerStyle}>
      <div className="bg-slate-400">
        {theme === Theme.DARK ? (
          <button onClick={() => setTheme(Theme.LIGHT)} style={lightThemeButton}>
            Light
          </button>
        ) : (
          <button onClick={() => setTheme(Theme.DARK)} style={darkThemeButton}>
            Dark
          </button>
        )}
      </div>
      <div
        style={{
          backgroundColor: theme === Theme.LIGHT ? 'white' : 'black',
          ...innerProviderStyle,
        }}
      >
        <HcThemeProvider theme={theme}>{children}</HcThemeProvider>
      </div>
    </div>
  );
};

export default Provider;
