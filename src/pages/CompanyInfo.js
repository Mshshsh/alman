import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Business as BusinessIcon,
  CalendarToday as CalendarIcon,
  Category as CategoryIcon,
  People as PeopleIcon,
  Link as LinkIcon,
  AccountCircle as PersonIcon,
  CompareArrows as CompetitorIcon,
  Public as PublicIcon,
} from '@mui/icons-material';

function CompanyInfo() {
  const { t } = useTranslation();

  const basicInfo = [
    { icon: <BusinessIcon />, label: t('companyInfo.operatingCompany'), value: 'JUMO GmbH & Co. KG' },
    { icon: <BusinessIcon />, label: t('companyInfo.parentCompany'), value: 'B. Juchheim Beteiligungs GmbH' },
    { icon: <BusinessIcon />, label: t('companyInfo.registrationNo'), value: 'HRA 302 (Fulda)' },
    { icon: <BusinessIcon />, label: t('companyInfo.structure'), value: 'GmbH & Co. KG' },
    { icon: <CalendarIcon />, label: t('companyInfo.founded'), value: '1949 (75+ ' + t('companyInfo.years') + ')' },
    { icon: <CategoryIcon />, label: t('companyInfo.sector'), value: t('companyInfo.sectorValue') },
    { icon: <PeopleIcon />, label: t('companyInfo.employees'), value: '~2,500+' },
    { icon: <PublicIcon />, label: t('companyInfo.globalPresence'), value: t('companyInfo.globalPresenceValue') },
    { icon: <LinkIcon />, label: t('companyInfo.website'), value: 'jumo.group' },
  ];

  const products = [
    t('companyInfo.products.temperature'),
    t('companyInfo.products.processControl'),
    t('companyInfo.products.automation'),
    t('companyInfo.products.recording'),
  ];

  const management = [
    { name: 'Dimitrios Charisiadis', role: 'CEO', areas: t('companyInfo.management.charisiadis') },
    { name: 'Steffen Hoßfeld', role: 'CEO', areas: '' },
    { name: 'Bernhard Juchheim', role: t('companyInfo.management.shareholder'), areas: t('companyInfo.management.hr') },
    { name: 'Michael Juchheim', role: t('companyInfo.management.shareholder'), areas: t('companyInfo.management.itFinance') },
  ];

  const competitors = ['Endress+Hauser', 'Siemens', 'WIKA', 'Vega'];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.companyInfo.title')}
      </Typography>

      {/* Ana Düzen: Flexbox (Sol ve Sağ Kolon) */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3,
        alignItems: 'flex-start' // İçerik uzunluğuna göre doğal yükseklik
      }}>
        
        {/* SOL KOLON: Temel Bilgiler */}
        <Box sx={{ flex: 1, width: '100%', minWidth: 0 }}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
              {t('companyInfo.basicInfoTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List disablePadding>
              {basicInfo.map((item, index) => (
                <ListItem key={index} sx={{ py: 1.5, px: 0, borderBottom: index !== basicInfo.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                  <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    secondary={item.value}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', mb: 0.5 }}
                    secondaryTypographyProps={{ variant: 'body1', fontWeight: 500, color: 'text.primary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* SAĞ KOLON: Ürünler -> Rakipler -> Yönetim */}
        <Box sx={{ 
          flex: 1, 
          width: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          gap: 3,
          minWidth: 0
        }}>
          
          {/* 1. Ürünler */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
              {t('companyInfo.productsTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {products.map((product, index) => (
                <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
                  {product}
                </Typography>
              ))}
            </Box>
          </Paper>

          {/* 2. Rakipler */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
              {t('companyInfo.competitorsTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {competitors.map((competitor, index) => (
                <Chip
                  key={index}
                  label={competitor}
                  icon={<CompetitorIcon />}
                  color="secondary"
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Box>
          </Paper>

          {/* 3. Yönetim Ekibi (Buraya taşındı) */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
              {t('companyInfo.managementTitle')}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {/* Yönetim Kartları Listesi */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {management.map((person, index) => (
                <Paper 
                  key={index} 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    backgroundColor: 'grey.50',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s',
                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'background.paper', boxShadow: 1 }
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <PersonIcon color="primary" sx={{ mr: 1.5 }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {person.name}
                      </Typography>
                    </Box>
                    <Chip 
                      label={person.role} 
                      size="small" 
                      color="primary" 
                      variant="filled"
                      sx={{ borderRadius: 1, height: 24 }} 
                    />
                  </Box>
                  
                  {person.areas && (
                    <Box sx={{ mt: 1.5, pl: 4.5 }}>
                       <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontWeight: 'bold', mb: 0.5 }}>
                         Sorumluluk Alanları:
                       </Typography>
                       <Typography variant="body2" color="text.primary">
                        {person.areas}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              ))}
            </Box>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
}

export default CompanyInfo;