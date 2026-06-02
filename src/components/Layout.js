import { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button
} from '@mui/material';
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SideDrawer, { drawerWidth } from './SideDrawer';
import { useThemeContext } from '../context/ThemeContext';
import Plasma from './Plasma';
import Iridescence from './Iridescence';

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();
  const { mode, toggleMode } = useThemeContext();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleLanguageMenuClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>

      {/* Animated full-viewport background */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }}>
        {mode === 'dark' ? (
          <Plasma color="#5335ff" speed={0.6} direction="forward" scale={1.1} opacity={0.8} mouseInteractive={true} />
        ) : (
          <Iridescence color={[0.5, 0.6, 0.8]} mouseReact={false} amplitude={0.1} speed={1} />
        )}
      </Box>

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t('projectManagement')}
          </Typography>

          <IconButton
            color="inherit"
            onClick={toggleMode}
            sx={{ mr: 1 }}
            aria-label="toggle color mode"
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Button
            color="inherit"
            startIcon={<LanguageIcon />}
            onClick={handleLanguageMenuOpen}
          >
            {i18n.language.toUpperCase()}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange('en')}>
              {t('language.english')}
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('de')}>
              {t('language.german')}
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange('tr')}>
              {t('language.turkish')}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <SideDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '95vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
