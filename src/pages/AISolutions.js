import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  Psychology, // AI Brain
  CheckCircle,
  Cancel,
  Storage, // Data
  Build, // Maintenance
  ShoppingCart, // Stock
  Tune, // Calibration
  DesignServices, // Design
  Timeline,
  Warning,
  Lightbulb,
  AutoGraph,
  SmartToy,
  Security
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
} from 'recharts';

function AISolutions() {
  const { t } = useTranslation();

  // --- 1. HAZIRBULUNUŞLUK VERİLERİ ---
  const readinessScore = 5.8;
  const strengths = [
    t('ai.strength.dataAsset'),
    t('ai.strength.rdCulture'),
    t('ai.strength.lockIn'),
    t('ai.strength.cloud'),
  ];
  const weaknesses = [
    t('ai.weakness.silos'),
    t('ai.weakness.talent'),
    t('ai.weakness.legacyIT'),
    t('ai.weakness.dataQuality'),
  ];

  // --- 2. ÖNCELİKLİ ALANLAR (ROI) ---
  const priorities = [
    {
      id: 1,
      title: t('ai.p1.title'), // Kestirimci Bakım
      problem: t('ai.p1.problem'),
      solution: t('ai.p1.solution'),
      impact: '+8.9 M€ Profit',
      roi: '~220%',
      icon: <Build fontSize="large" color="primary" />,
      chartData: [
        { name: 'OEE', current: 70, target: 78, unit: '%' },
        { name: 'Downtime', current: 12, target: 8, unit: '%' },
      ],
    },
    {
      id: 2,
      title: t('ai.p2.title'), // Stok Optimizasyonu
      problem: t('ai.p2.problem'),
      solution: t('ai.p2.solution'),
      impact: '+10 M€ Cash/Year',
      roi: '~300%+',
      icon: <ShoppingCart fontSize="large" color="success" />,
      chartData: [
        { name: 'Turnover', current: 1.8, target: 2.5, unit: 'x' },
        { name: 'Holding Cost', current: 31, target: 21, unit: 'M€' },
      ],
    },
    {
      id: 3,
      title: t('ai.p3.title'), // Otonom Kalibrasyon
      problem: t('ai.p3.problem'),
      solution: t('ai.p3.solution'),
      impact: 'Efficiency +25%',
      roi: '~180%',
      icon: <Tune fontSize="large" color="warning" />,
    },
    {
      id: 4,
      title: t('ai.p4.title'), // Dijital İkiz
      problem: t('ai.p4.problem'),
      solution: t('ai.p4.solution'),
      impact: 'Time-to-Market -30%',
      roi: 'High',
      icon: <DesignServices fontSize="large" color="info" />,
    },
  ];

  // --- 3. YENİ HİZMETLER ---
  const services = [
    { title: 'Process Guard', desc: t('ai.service.processGuard'), model: '500€/mo/sensor', icon: <Security /> },
    { title: 'Sensor Health Monitor', desc: t('ai.service.healthMonitor'), model: 'Warranty Opt.', icon: <SmartToy /> },
    { title: 'AI Configurator', desc: t('ai.service.configurator'), model: 'Self-Service', icon: <AutoGraph /> },
  ];

  // --- 4. YOL HARİTASI ---
  const roadmap = [
    { phase: t('ai.phase1.title'), time: '6-12 Months', budget: '1.5 M€', focus: t('ai.phase1.focus') },
    { phase: t('ai.phase2.title'), time: '12-24 Months', budget: '3.0 M€', focus: t('ai.phase2.focus') },
    { phase: t('ai.phase3.title'), time: '24-36 Months', budget: '2.0 M€', focus: t('ai.phase3.focus') },
  ];

  // --- 5. RİSKLER ---
  const risks = [
    { risk: t('ai.risk.data'), prob: t('ai.high'), impact: t('ai.high'), mitigation: t('ai.mitigation.data') },
    { risk: t('ai.risk.culture'), prob: t('ai.medium'), impact: t('ai.high'), mitigation: t('ai.mitigation.culture') },
    { risk: t('ai.risk.cyber'), prob: t('ai.high'), impact: t('ai.critical'), mitigation: t('ai.mitigation.cyber') },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.aiSolutions.title')}
      </Typography>

      {/* 1. HAZIRBULUNUŞLUK & SKOR */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1 }} /> {t('ai.readinessTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Score Gauge */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2, bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'grey.50', borderRadius: 2 }}>
                <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mb: 2, height: 120 }}>
                    <Typography variant="h2" fontWeight="bold" color={readinessScore > 5 ? 'warning.main' : 'error.main'}>
                        {readinessScore}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ alignSelf: 'flex-end', mb: 1, ml: 0.5 }}>/10</Typography>
                </Box>
                <LinearProgress 
                    variant="determinate" 
                    value={readinessScore * 10} 
                    color={readinessScore > 7 ? "success" : "warning"}
                    sx={{ width: '80%', height: 12, borderRadius: 6, mb: 1 }} 
                />
                <Typography variant="subtitle2" fontWeight="bold" color="text.secondary">{t('ai.readinessStatus')}</Typography>
            </Box>

            {/* Strengths & Weaknesses */}
            <Box sx={{ flex: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold" color="success.main" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle sx={{ mr: 1, fontSize: 20 }} /> {t('ai.strengths')}
                    </Typography>
                    <List dense disablePadding>
                        {strengths.map((s, i) => (
                            <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                                <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold" color="error.main" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                        <Cancel sx={{ mr: 1, fontSize: 20 }} /> {t('ai.weaknesses')}
                    </Typography>
                    <List dense disablePadding>
                        {weaknesses.map((w, i) => (
                            <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                                <ListItemText primary={w} primaryTypographyProps={{ variant: 'body2' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
      </Paper>

      {/* 2. ÖNCELİKLİ UYGULAMA ALANLARI */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <AutoGraph sx={{ mr: 1 }} /> {t('ai.prioritiesTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
            {priorities.map((p) => (
                <Paper key={p.id} elevation={0} variant="outlined" sx={{ p: 2.5, borderColor: 'grey.300', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                            <Box sx={{ p: 1, borderRadius: '50%', bgcolor: 'action.hover' }}>{p.icon}</Box>
                            <Typography variant="subtitle1" fontWeight="bold">{p.title}</Typography>
                        </Box>
                        <Chip label={`ROI: ${p.roi}`} color="success" size="small" sx={{ fontWeight: 'bold' }} />
                    </Box>
                    
                    <Box sx={{ mb: 2, flex: 1 }}>
                        <Typography variant="body2" paragraph sx={{ mb: 1 }}>
                            <strong>{t('ai.problem')}:</strong> {p.problem}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>{t('ai.solution')}:</strong> {p.solution}
                        </Typography>
                    </Box>
                    
                    <Box sx={{ bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(83,53,255,0.12)' : 'primary.50', p: 1.5, borderRadius: 1, textAlign: 'center', mb: 2 }}>
                        <Typography variant="subtitle2" color="primary.dark" fontWeight="bold">{t('ai.impact')}: {p.impact}</Typography>
                    </Box>

                    {/* Mini Chart for Priority 1 & 2 */}
                    {p.chartData && (
                        <Box sx={{ height: 120, mt: 'auto' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={p.chartData} layout="vertical" margin={{ left: 0, right: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={70} tick={{fontSize: 11}} />
                                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{fontSize: '12px'}} />
                                    <Bar dataKey="current" name={t('ai.current')} fill="#bdbdbd" barSize={12} radius={[0, 4, 4, 0]} />
                                    <Bar dataKey="target" name={t('ai.target')} fill={p.id === 1 ? "#1976d2" : "#2e7d32"} barSize={12} radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>
                    )}
                </Paper>
            ))}
        </Box>
      </Paper>

      {/* 3. YENİ HİZMET MODELLERİ */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <SmartToy sx={{ mr: 1 }} /> {t('ai.servicesTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
            {services.map((s, i) => (
                <Box key={i} sx={{ p: 3, bgcolor: 'primary.main', color: 'white', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: 2, transition: 'transform 0.2s', '&:hover': {transform: 'translateY(-4px)'} }}>
                    <Box sx={{ mb: 2, p: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '50%' }}>
                        {s.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">{s.title}</Typography>
                    <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, flex: 1 }}>{s.desc}</Typography>
                    <Chip label={s.model} sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 'bold' }} />
                </Box>
            ))}
        </Box>
      </Paper>

      {/* 4. YOL HARİTASI */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Timeline sx={{ mr: 1 }} /> {t('ai.roadmapTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            {roadmap.map((step, i) => (
                <Paper key={i} elevation={1} sx={{ flex: 1, position: 'relative', p: 2.5, borderTop: `4px solid`, borderColor: i === 0 ? 'error.main' : i === 1 ? 'warning.main' : 'success.main', bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'grey.50' }}>
                    <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 0.5 }}>{step.time}</Typography>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{step.phase}</Typography>
                    <Typography variant="body2" paragraph color="text.primary">{step.focus}</Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Typography variant="caption" fontWeight="bold" color="primary.main">{t('ai.investment')}: {step.budget}</Typography>
                </Paper>
            ))}
        </Box>
        <Alert severity="info" sx={{ mt: 3 }}>
            <Typography variant="body2">
                <strong>{t('ai.totalInvestment')}:</strong> ~6.5 M€ ({t('ai.investmentNote')})
            </Typography>
        </Alert>
      </Paper>

      {/* 5. RİSKLER */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Warning sx={{ mr: 1 }} /> {t('ai.risksTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ bgcolor: 'grey.100' }}>
                        <TableCell><strong>{t('ai.risk.title')}</strong></TableCell>
                        <TableCell><strong>{t('ai.prob')}</strong></TableCell>
                        <TableCell><strong>{t('ai.impactTitle')}</strong></TableCell>
                        <TableCell><strong>{t('ai.mitigationTitle')}</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {risks.map((row, i) => (
                        <TableRow key={i} hover>
                            <TableCell sx={{ fontWeight: 500 }}>{row.risk}</TableCell>
                            <TableCell>
                                <Chip label={row.prob} size="small" color={row.prob === t('ai.high') ? "error" : "warning"} variant="outlined" />
                            </TableCell>
                            <TableCell>
                                <Chip label={row.impact} size="small" color={row.impact === t('ai.critical') ? "error" : "warning"} />
                            </TableCell>
                            <TableCell sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>{row.mitigation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Paper>

      {/* 6. SONUÇ */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#212121', color: 'white', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Lightbulb sx={{ color: '#ffeb3b', fontSize: 40 }} />
            <Typography variant="h6" color="#ffeb3b" fontWeight="bold">{t('ai.conclusion.title')}</Typography>
        </Box>
        <Typography variant="body1" paragraph sx={{ opacity: 0.9, lineHeight: 1.7 }}>
            {t('ai.conclusion.text')}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#ffeb3b', mt: 1 }}>
            {t('ai.conclusion.recommendation')}
        </Typography>
      </Paper>

    </Box>
  );
}

export default AISolutions;