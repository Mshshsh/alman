import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Timeline,
  CheckCircle,
  Storage, // Data sources
  Analytics, // Methodology
  ArrowForward,
  Flag,
  Assignment,
  Insights,
  FactCheck,
} from '@mui/icons-material';

function General() {
  const { t } = useTranslation();

  // --- 1. PROJE KAPSAMI VE HEDEFİ ---
  const projectScope = {
    title: t('general.scope.title') || 'JUMO 2030 Strategy Analysis',
    description: t('general.scope.desc') || 'Comprehensive operational, financial, and strategic assessment to prepare JUMO for the next decade of industrial automation.',
    status: 100, // % Tamamlanma
  };

  // --- 2. ANALİZ METODOLOJİSİ ADIMLARI ---
  const methodologySteps = [
    {
      title: 'Data Collection',
      desc: 'ERP extraction, Market Reports, Competitor Benchmarking',
      icon: <Storage />,
      status: 'completed',
    },
    {
      title: 'Diagnostic Analysis',
      desc: 'Financial Health (Z-Score), Operational Efficiency (OEE), HR Metrics',
      icon: <Analytics />,
      status: 'completed',
    },
    {
      title: 'Strategic Synthesis',
      desc: 'SWOT, PESTEL, Porter\'s 5 Forces, Gap Analysis',
      icon: <FactCheck />,
      status: 'completed',
    },
    {
      title: 'Recommendation',
      desc: 'AI Solutions, Roadmap, Investment Planning',
      icon: <Lightbulb />, // Lightbulb ikonunu import etmeyi unutmayın veya aşağıda tanımlayın
      status: 'completed',
    },
  ];

  // --- 3. KULLANILAN VERİ KAYNAKLARI ---
  const dataSources = [
    { name: 'Internal Financials', type: 'SAP / ERP', valid: '2019-2023' },
    { name: 'Market Data', type: 'Eurostat / Gartner', valid: 'Q4 2024' },
    { name: 'HR Records', type: 'Workday', valid: 'Current' },
    { name: 'Operational Logs', type: 'IoT / SCADA', valid: 'Real-time' },
  ];

  // --- 4. SON DURUM VE İLERLEME ---
  const progressStatus = [
    { module: t('menu.financialPerformance'), progress: 100, color: 'success' },
    { module: t('menu.operationalEfficiency'), progress: 100, color: 'success' },
    { module: t('menu.marketingSales'), progress: 100, color: 'success' },
    { module: t('menu.rdInnovation'), progress: 100, color: 'success' },
    { module: t('menu.aiSolutions'), progress: 100, color: 'info' }, // Yeni eklenenler
  ];

  return (
    <Box sx={{ p: 2 }}>
      {/* HEADER */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary.main">
          {t('general.title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" fontWeight="normal">
          {t('general.welcome')}
        </Typography>
      </Box>

      {/* 1. PROJECT OVERVIEW CARD */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2, background: (theme) => theme.palette.mode === 'dark' ? undefined : 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: 1, minWidth: '300px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Flag color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5" fontWeight="bold">{projectScope.title}</Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              {projectScope.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip icon={<CheckCircle />} label="Analysis Complete" color="success" />
              <Chip icon={<Timeline />} label="Phase: Execution Ready" color="primary" variant="outlined" />
            </Box>
          </Box>
          
          <Box sx={{ width: '100%', maxWidth: 300, bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'white', p: 2, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="subtitle2" gutterBottom fontWeight="bold">Overall Progress</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={projectScope.status} color="success" sx={{ height: 10, borderRadius: 5 }} />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${projectScope.status}%`}</Typography>
              </Box>
            </Box>
            <Typography variant="caption" color="text.secondary">All modules data processed successfully.</Typography>
          </Box>
        </Box>
      </Paper>

      

      {/* 2. METHODOLOGY & DATA SOURCES (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Methodology Flow */}
        <Paper elevation={3} sx={{ flex: 1.5, p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Insights sx={{ mr: 1 }} /> {t('general.methodologyTitle') || 'Analysis Methodology'}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'stretch' }}>
            {methodologySteps.map((step, index) => (
              <Box key={index} sx={{ flex: 1, p: 2, bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'grey.50', borderRadius: 2, position: 'relative', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.main', mb: 1 }}>{step.icon}</Box>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>{step.title}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.3, display: 'block' }}>{step.desc}</Typography>
                {index !== methodologySteps.length - 1 && (
                  <ArrowForward sx={{ position: 'absolute', right: -12, top: '40%', color: 'grey.400', display: { xs: 'none', sm: 'block' }, zIndex: 1, bgcolor: 'white', borderRadius: '50%' }} fontSize="small" />
                )}
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Data Sources */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Storage sx={{ mr: 1 }} /> {t('general.dataSourcesTitle') || 'Data Foundation'}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 2 }}>
            {dataSources.map((source, index) => (
              <Box key={index} sx={{ p: 1.5, border: '1px solid #eee', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight="bold" color="text.primary">{source.name}</Typography>
                <Typography variant="caption" display="block" color="primary.main" sx={{ mb: 0.5 }}>{source.type}</Typography>
                <Chip label={source.valid} size="small" sx={{ height: 20, fontSize: '0.65rem' }} />
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* 3. MODULE READINESS CHECKLIST */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Assignment sx={{ mr: 1 }} /> {t('general.modulesStatus') || 'Module Readiness'}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 3 }}>
            {progressStatus.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: `${item.color}.light`, color: `${item.color}.main`, width: 32, height: 32 }}>
                        <CheckCircle fontSize="small" />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2" fontWeight="500">{item.module}</Typography>
                            <Typography variant="caption" fontWeight="bold">{item.progress}%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={item.progress} color={item.color} sx={{ height: 6, borderRadius: 3 }} />
                    </Box>
                </Box>
            ))}
        </Box>
      </Paper>

      {/* 4. FOOTER / NEXT STEPS */}
      <Alert severity="info" icon={<ArrowForward />} sx={{ bgcolor: 'info.main', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}>
        <Typography variant="subtitle2" fontWeight="bold">
            {t('general.nextStep') || 'Recommended Next Action:'}
        </Typography>
        <Typography variant="body2">
            Proceed to <strong>Company Info</strong> for corporate structure overview or jump directly to <strong>Financial Performance</strong> for KPI analysis.
        </Typography>
      </Alert>
    </Box>
  );
}

// İkon eksikliği olmaması için gerekli import
import { Lightbulb } from '@mui/icons-material';

export default General;