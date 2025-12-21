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
  Language as LanguageIcon
} from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SideDrawer, { drawerWidth } from './SideDrawer';

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();

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

      {/* --- SORUNUN ÇÖZÜLDÜĞÜ YER BURASI --- */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // AŞAĞIDAKİ İKİ SATIR EKLENDİ:
          height: '95vh',    // Sayfa yüksekliğini ekran boyutuna sabitler
          overflow: 'auto',   // İçerik taşarsa kaydırma çubuğunu aktif eder
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;