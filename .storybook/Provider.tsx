import { useState } from 'react';
import React from 'react';
import { HcThemeProvider, Theme } from '../src';

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      {
        // TODO: Add a button to toggle the theme}
      }
      <HcThemeProvider theme={theme}>{children}</HcThemeProvider>
    </div>
  );
};

export default Provider;
