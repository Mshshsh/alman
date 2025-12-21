import {
  Box,
  Drawer,
  List,
  Divider,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Info as InfoIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  Speed as SpeedIcon,
  TrendingUp as TrendingUpIcon,
  Science as ScienceIcon,
  LocalShipping as ShippingIcon,
  Public as PublicIcon,
  AccountTree as AccountTreeIcon,
  Psychology as PsychologyIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Logo dosyasını import ediyoruz. 
// Dosya yolunu proje yapınıza göre (örn: '../../assets/logo.svg') gerekirse güncelleyin.
import logo from '../assets/logo.svg'; 

const drawerWidth = 240;

function SideDrawer({ mobileOpen, handleDrawerToggle }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { text: t('menu.companyInfo'), icon: <InfoIcon />, path: '/company-info' },
    { text: t('menu.financialPerformance'), icon: <MoneyIcon />, path: '/financial-performance' },
    { text: t('menu.hrOrganization'), icon: <PeopleIcon />, path: '/hr-organization' },
    { text: t('menu.operationalEfficiency'), icon: <SpeedIcon />, path: '/operational-efficiency' },
    { text: t('menu.marketingSales'), icon: <TrendingUpIcon />, path: '/marketing-sales' },
    { text: t('menu.rdInnovation'), icon: <ScienceIcon />, path: '/rd-innovation' },
    { text: t('menu.supplyChain'), icon: <ShippingIcon />, path: '/supply-chain' },
    { text: t('menu.macroEnvironment'), icon: <PublicIcon />, path: '/macro-environment' },
    { text: t('menu.strategicSynthesis'), icon: <AccountTreeIcon />, path: '/strategic-synthesis' },
    { text: t('menu.aiSolutions'), icon: <PsychologyIcon />, path: '/ai-solutions' },
    { text: t('menu.recommendations'), icon: <LightbulbIcon />, path: '/recommendations' },
  ];

  const drawer = (
    <Box>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* App Title yerine Logo */}
        <Box
          component="img"
          src={logo}
          alt="JUMO Logo"
          sx={{
            height: 40, // Toolbar içine sığacak uygun yükseklik
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                handleDrawerToggle();
              }}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default SideDrawer;
export { drawerWidth };