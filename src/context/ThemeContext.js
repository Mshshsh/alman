import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext({ mode: 'dark', toggleMode: () => {} });

export function useThemeContext() {
  return useContext(ThemeContext);
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5335ff' },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.75)',
    },
    background: {
      default: '#0a0a14',
      paper: 'transparent',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(5, 5, 20, 0.22)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(5, 5, 20, 0.22)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(5, 5, 20, 0.65)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: [
            '0 8px 32px rgba(0, 0, 0, 0.5)',
            '0 2px 8px rgba(0, 0, 0, 0.3)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            '0 0 0 1px rgba(83, 53, 255, 0.18)',
            '0 0 0 2px rgba(53, 0, 255, 0.1)',
          ].join(', '),
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '8px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '2px 0',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(83, 53, 255, 0.12)',
            boxShadow: [
              '0 2px 8px rgba(83, 53, 255, 0.2)',
              'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            ].join(', '),
          },
          '&.Mui-selected': {
            background: 'rgba(83, 53, 255, 0.2)',
            boxShadow: [
              '0 2px 12px rgba(83, 53, 255, 0.3)',
              'inset 0 1px 0 rgba(255, 255, 255, 0.12)',
            ].join(', '),
          },
          '&.Mui-selected:hover': {
            background: 'rgba(83, 53, 255, 0.28)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textShadow: '0 1px 4px rgba(0, 0, 0, 0.7)',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5a7db8' },
    text: {
      primary: '#0d0d1a',
      secondary: 'rgba(13, 13, 26, 0.72)',
    },
    background: {
      default: 'transparent',
      paper: 'transparent',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(240, 248, 255, 0.22)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: 'none',
          boxShadow: 'none',
          color: '#0d0d1a',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(240, 248, 255, 0.22)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(235, 245, 255, 0.72)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: [
            '0 8px 32px rgba(90, 125, 184, 0.15)',
            '0 2px 8px rgba(90, 125, 184, 0.1)',
            'inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            '0 0 0 1px rgba(255, 50, 0, 0.06)',
            '0 0 0 2px rgba(0, 40, 255, 0.05)',
          ].join(', '),
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '8px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          margin: '2px 0',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(90, 125, 184, 0.12)',
            boxShadow: [
              '0 2px 8px rgba(90, 125, 184, 0.2)',
              'inset 0 1px 0 rgba(255, 255, 255, 0.7)',
            ].join(', '),
          },
          '&.Mui-selected': {
            background: 'rgba(90, 125, 184, 0.2)',
            boxShadow: [
              '0 2px 12px rgba(90, 125, 184, 0.3)',
              'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            ].join(', '),
          },
          '&.Mui-selected:hover': {
            background: 'rgba(90, 125, 184, 0.28)',
          },
        },
      },
    },
  },
});

export function ThemeContextProvider({ children }) {
  const stored = localStorage.getItem('themeMode');
  const [mode, setMode] = useState(stored === 'light' ? 'light' : 'dark');

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('themeMode', next);
      return next;
    });
  };

  const contextValue = useMemo(() => ({ mode, toggleMode }), [mode]);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
