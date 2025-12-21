import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from '@mui/material';
import {
  MonetizationOn,
  Security,
  Speed,
  Lightbulb,
  Warning,
  TrendingUp,
  Timer,
  Factory,
  Public,
  CheckCircle,
  ArrowForward,
  Summarize,
  Balance,
  Timeline
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

function StrategicSynthesis() {
  const { t } = useTranslation();

  // --- BÖLÜM 1: GÜÇLÜ YÖNLER VERİSİ ---
  const strengthsData = [
    {
      title: t('synthesis.strength.financial'),
      indicator: '81.7 M€ Cash, Z-Score 2.9',
      implication: t('synthesis.strength.financialImp'),
      icon: <MonetizationOn fontSize="large" color="success" />,
    },
    {
      title: t('synthesis.strength.customer'),
      indicator: 'Churn <3%, LTV 15+ Years',
      implication: t('synthesis.strength.customerImp'),
      icon: <Security fontSize="large" color="primary" />,
    },
    {
      title: t('synthesis.strength.operational'),
      indicator: '90% Vertical Integration',
      implication: t('synthesis.strength.operationalImp'),
      icon: <Speed fontSize="large" color="warning" />,
    },
    {
      title: t('synthesis.strength.tech'),
      indicator: '650+ Patents, 7% R&D',
      implication: t('synthesis.strength.techImp'),
      icon: <Lightbulb fontSize="large" color="info" />,
    },
  ];

  // --- BÖLÜM 2: PARADOKSLAR VERİSİ ---
  const paradoxes = [
    {
      title: t('synthesis.paradox1.title'),
      desc: t('synthesis.paradox1.desc'),
      points: [
        `${t('synthesis.margin')}: 1.61% (Low)`,
        `${t('synthesis.inventory')}: 123.5 M€ / 1.8x Turnover`,
        `${t('synthesis.humanCap')}: ELTV -519k€`,
      ],
    },
    {
      title: t('synthesis.paradox2.title'),
      desc: t('synthesis.paradox2.desc'),
      points: [
        `${t('synthesis.verticalCost')}: +7.8 M€/year`,
        `${t('synthesis.oee')}: 70% (Loss: 17.75 M€)`,
      ],
    },
    {
      title: t('synthesis.paradox3.title'),
      desc: t('synthesis.paradox3.desc'),
      points: [
        `Patent Impact: 0.857 (Low Quality)`,
        `R&D IRR: 84.5% (Target >120%)`,
        `Tech Risk: 43.5%`,
      ],
    },
  ];

  // --- BÖLÜM 3: EYLEM PLANI (ACİL) VERİSİ ---
  const urgentActions = [
    { action: t('synthesis.action.stock'), target: '123.5M€ → 61.8M€', impact: '+15.5 M€ Cash', investment: '2-3 M€' },
    { action: t('synthesis.action.oee'), target: '70% → 80%', impact: '+8.9 M€ Profit', investment: '5 M€' },
    { action: t('synthesis.action.price'), target: '+5-8% Price', impact: '+5-8 M€ Profit', investment: 'Low' },
  ];

  // --- BÖLÜM 4: DÖNÜŞÜM SENARYOSU VERİSİ ---
  const transformationData = [
    { name: t('synthesis.metric.margin'), current: 1.61, target: 7.0, unit: '%' },
    { name: t('synthesis.metric.roe'), current: 2.64, target: 10.0, unit: '%' },
    { name: t('synthesis.metric.turnover'), current: 1.8, target: 3.0, unit: 'x' },
  ];

  const transformationTable = [
    { metric: t('synthesis.metric.margin'), current: '%1.61', target: '%7.0', change: '++%335', impact: t('synthesis.impact.sustainability') },
    { metric: t('synthesis.metric.roe'), current: '%2.64', target: '%10.0', change: '++%279', impact: t('synthesis.impact.shareholder') },
    { metric: t('synthesis.metric.turnover'), current: '1.8x', target: '3.0x', change: '+1.2x', impact: '61.7 M€ Cash Release' },
    { metric: t('synthesis.metric.revenuePerEmp'), current: '123k€', target: '140k€', change: '+14%', impact: t('synthesis.impact.efficiency') },
    { metric: t('synthesis.metric.fcf'), current: '5.85 M€', target: '>30 M€', change: '>5x', impact: t('synthesis.impact.growth') },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.strategicSynthesis.title')}
      </Typography>

      {/* 1. ÖZET BULGULAR (GÜÇLÜ YÖNLER) */}
      <Paper elevation={3} sx={{ p: 3, mb: 5, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Summarize sx={{ mr: 1 }} /> {t('synthesis.strengthsTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 3,mb:5 }}>
          {strengthsData.map((item, index) => (
            <Paper key={index} elevation={1} sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', bgcolor: 'grey.50', borderRadius: 2, transition: 'transform 0.2s', '&:hover': {transform: 'translateY(-3px)'} }}>
              <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.paper', borderRadius: '50%', boxShadow: 1 }}>{item.icon}</Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.indicator}</Typography>
              <Divider sx={{ width: '100%', my: 1 }} />
              <Typography variant="caption" fontWeight="bold" color="success.main">{item.implication}</Typography>
            </Paper>
          ))}
        </Box>
      </Paper>

      {/* 2. TEŞHİS: PARADOKSLAR */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="error" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Balance sx={{ mr: 1 }} /> {t('synthesis.diagnosisTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
          {paradoxes.map((p, index) => (
            <Alert key={index} severity="warning" icon={<Warning fontSize="inherit" />} sx={{ height: '100%', alignItems: 'flex-start', borderRadius: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ textDecoration: 'underline' }}>
                {p.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {p.desc}
              </Typography>
              <List dense disablePadding>
                {p.points.map((pt, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}><ArrowForward fontSize="inherit" color="action" /></ListItemIcon>
                    <ListItemText primary={<Typography variant="caption" display="block" sx={{ lineHeight: 1.3 }}>{pt}</Typography>} />
                  </ListItem>
                ))}
              </List>
            </Alert>
          ))}
        </Box>
      </Paper>

      {/* 3. STRATEJİK EYLEM PLANI */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Timeline sx={{ mr: 1 }} /> {t('synthesis.actionPlanTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        {/* Acil (0-12 Ay) */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Chip label="1" color="error" sx={{ mr: 2, fontWeight: 'bold', width: 32, height: 32, borderRadius: '50%' }} />
              <Typography variant="h6">{t('synthesis.phase1.title')}</Typography>
          </Box>
          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: 'error.50' }}>
                  <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>{t('synthesis.table.action')}</TableCell>
                  <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>{t('synthesis.table.target')}</TableCell>
                  <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>{t('synthesis.table.financialImpact')}</TableCell>
                  <TableCell sx={{ color: 'error.main', fontWeight: 'bold' }}>{t('synthesis.table.investment')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {urgentActions.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell fontWeight="bold">{row.action}</TableCell>
                    <TableCell>{row.target}</TableCell>
                    <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.impact}</TableCell>
                    <TableCell>{row.investment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, p: 2, bgcolor: 'success.50', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle color="success" />
            <Typography variant="subtitle2">
              {t('synthesis.totalImpact')}: <strong>+27.5 - 33.4 M€ {t('synthesis.annualProfit')}</strong>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Orta Vadeli */}
          <Box sx={{ flex: 1, p: 2, borderLeft: '4px solid #1976d2', bgcolor: 'grey.50', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip label="2" color="primary" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                <Typography variant="subtitle1" fontWeight="bold">{t('synthesis.phase2.title')}</Typography>
              </Box>
              <Typography variant="body2" paragraph color="text.secondary">{t('synthesis.phase2.desc')}</Typography>
              <List dense disablePadding>
                <ListItem sx={{ py: 0.5 }}><ListItemIcon sx={{ minWidth: 28 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon><ListItemText primary={t('synthesis.phase2.p1')} /></ListItem>
                <ListItem sx={{ py: 0.5 }}><ListItemIcon sx={{ minWidth: 28 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon><ListItemText primary={t('synthesis.phase2.p2')} /></ListItem>
                <ListItem sx={{ py: 0.5 }}><ListItemIcon sx={{ minWidth: 28 }}><ArrowForward fontSize="small" color="primary" /></ListItemIcon><ListItemText primary={t('synthesis.phase2.p3')} /></ListItem>
              </List>
          </Box>
          
          {/* Uzun Vadeli */}
          <Box sx={{ flex: 1, p: 2, borderLeft: '4px solid #2e7d32', bgcolor: 'grey.50', borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Chip label="3" color="success" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                <Typography variant="subtitle1" fontWeight="bold">{t('synthesis.phase3.title')}</Typography>
              </Box>
              <Typography variant="body2" paragraph color="text.secondary">{t('synthesis.phase3.desc')}</Typography>
                <List dense disablePadding>
                <ListItem sx={{ py: 0.5 }}><ListItemIcon sx={{ minWidth: 28 }}><Public fontSize="small" color="success" /></ListItemIcon><ListItemText primary={t('synthesis.phase3.p1')} /></ListItem>
                <ListItem sx={{ py: 0.5 }}><ListItemIcon sx={{ minWidth: 28 }}><Factory fontSize="small" color="success" /></ListItemIcon><ListItemText primary={t('synthesis.phase3.p2')} /></ListItem>
              </List>
          </Box>
        </Box>
      </Paper>

      {/* 4. DÖNÜŞÜM SENARYOSU */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <TrendingUp sx={{ mr: 1 }} /> {t('synthesis.transformationTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" align="center" gutterBottom fontWeight="bold">{t('synthesis.chartTitle')}</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transformationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" name={t('synthesis.current')} fill="#ff9800" />
                <Bar dataKey="target" name={t('synthesis.target')} fill="#4caf50" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                   <TableRow sx={{ bgcolor: 'grey.100' }}>
                     <TableCell><strong>{t('synthesis.table.indicator')}</strong></TableCell>
                     <TableCell align="center"><strong>{t('synthesis.current')}</strong></TableCell>
                     <TableCell align="center"><strong>{t('synthesis.target')}</strong></TableCell>
                     <TableCell><strong>{t('synthesis.table.strategicImpact')}</strong></TableCell>
                   </TableRow>
                </TableHead>
                <TableBody>
                  {transformationTable.map((row, index) => (
                    <TableRow key={index} sx={index % 2 === 0 ? { bgcolor: 'grey.50' } : {}}>
                      <TableCell component="th" scope="row">{row.metric}</TableCell>
                      <TableCell align="center">{row.current}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold', color: 'success.main' }}>{row.target}</TableCell>
                      <TableCell><Typography variant="caption">{row.impact}</Typography></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Paper>

      {/* 5. SONUÇ */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#0d47a1', color: 'white', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Lightbulb fontSize="large" sx={{ color: '#ffca28', mt: 0.5 }} />
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#ffca28', fontWeight: 'bold' }}>
              {t('synthesis.conclusion.title')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              {t('synthesis.conclusion.text1')}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontStyle: 'italic', bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 2, borderLeft: '4px solid #ffca28' }}>
              "{t('synthesis.conclusion.callToAction')}"
            </Typography>
          </Box>
        </Box>
      </Paper>

    </Box>
  );
}

export default StrategicSynthesis;