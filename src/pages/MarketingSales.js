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
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  Warning,
  CheckCircle,
  Error,
  Psychology,
  Campaign,
  Group,
  PieChart as PieIcon,
  MonetizationOn,
  ShowChart,
  Repeat,
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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

function MarketingSales() {
  const { t } = useTranslation();

  // Overall Marketing Performance Score
  const overallScore = 74;

  // Customer Economics - LTV/CAC
  const customerEconomics = {
    ltv: 1710,
    cac: 2,
    ratio: 0.0012,
    customerLifetime: 15,
    churnRate: 3,
  };

  // ABC Customer Segmentation
  const customerSegments = [
    {
      segment: 'A',
      customers: 1000,
      revenue: 249.1,
      margin: 45,
      profit: 112.1,
      focus: 60,
    },
    {
      segment: 'B',
      customers: 1500,
      revenue: 49.8,
      margin: 35,
      profit: 17.4,
      focus: 30,
    },
    {
      segment: 'C',
      customers: 2500,
      revenue: 12.5,
      margin: 20,
      profit: 2.5,
      focus: 10,
    },
  ];

  // Market Concentration (HHI)
  const marketShare = [
    { name: 'Siemens', value: 18 },
    { name: 'Endress+Hauser', value: 12 },
    { name: 'WIKA', value: 8 },
    { name: 'JUMO', value: 3 },
    { name: t('marketing.others'), value: 59 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  const hhi = 4022;

  // Digital Channel Effectiveness (TOPSIS)
  const digitalChannels = [
    {
      channel: t('marketing.channels.seo'),
      cost: 8,
      leadQuality: 9,
      scalability: 9,
      topsis: 0.872,
      budget: 40,
    },
    {
      channel: 'LinkedIn',
      cost: 7,
      leadQuality: 8,
      scalability: 8,
      topsis: 0.715,
      budget: 30,
    },
    {
      channel: t('marketing.channels.webinars'),
      cost: 5,
      leadQuality: 9,
      scalability: 6,
      topsis: 0.642,
      budget: 20,
    },
    {
      channel: t('marketing.channels.tradeFairs'),
      cost: 3,
      leadQuality: 9,
      scalability: 4,
      topsis: 0.458,
      budget: 10,
    },
  ];

  // JUMO Campus ROI
  const campusROI = {
    costs: 2.3,
    directRevenue: 1.0,
    indirectRevenue: 2.5,
    totalRevenue: 3.5,
    roi: 52.2,
  };

  // Sales Efficiency
  const salesEfficiency = {
    salesTeam: 380,
    revenue: 311.4,
    revenuePerEmployee: 819,
    benchmark: 1200,
    gap: -31.7,
  };

  // Pricing Optimization
  const pricingAnalysis = {
    currentPrice: 90,
    optimalPrice: 107.5,
    increase: 19.4,
    potentialProfit: 24.2,
  };

  // Churn Prevention
  const churnPrevention = {
    annualChurn: 150,
    ltvLoss: 256.5,
    preventionCost: 2,
    preventionRate: 30,
    savings: 76.95,
    roi: 3747,
  };

  // Marketing Effectiveness Index (MEI)
  const mei = {
    marketShareGrowth: 5,
    brandAwareness: 65,
    customerSatisfaction: 80,
    budgetGrowth: 8,
    score: 0.325,
  };

  // Performance Scorecard
  const performanceMetrics = [
    {
      metric: 'CAC/LTV',
      current: '0.0012',
      benchmark: '0.20',
      status: t('marketing.status.excellent'),
      color: 'success',
    },
    {
      metric: t('marketing.metrics.customerLifetime'),
      current: '15+ ' + t('operational.years'),
      benchmark: '8 ' + t('operational.years'),
      status: t('marketing.status.excellent'),
      color: 'success',
    },
    {
      metric: t('marketing.metrics.churnRate'),
      current: '<3%',
      benchmark: '10%',
      status: t('marketing.status.excellent'),
      color: 'success',
    },
    {
      metric: t('marketing.metrics.salesEfficiency'),
      current: '819k€',
      benchmark: '1.2M€',
      status: t('marketing.status.weak'),
      color: 'error',
    },
    {
      metric: t('marketing.metrics.digitalROI'),
      current: '52.2%',
      benchmark: '30%',
      status: t('marketing.status.good'),
      color: 'success',
    },
    {
      metric: t('marketing.metrics.marketShare'),
      current: '3%',
      benchmark: '-',
      status: t('marketing.status.low'),
      color: 'warning',
    },
    {
      metric: 'MEI',
      current: '0.325',
      benchmark: '0.80',
      status: t('marketing.status.weak'),
      color: 'error',
    },
  ];

  // Strategic Priorities
  const strategicPriorities = [
    {
      priority: t('marketing.priorities.pricing'),
      impact: '+24.2 M€',
      timeline: '6 ' + t('marketing.months'),
      investment: t('marketing.investment.low'),
      level: t('marketing.priority.critical'),
      color: 'error',
    },
    {
      priority: t('marketing.priorities.churnPrevention'),
      impact: '+76.95 M€',
      timeline: '12 ' + t('marketing.months'),
      investment: t('marketing.investment.low'),
      level: t('marketing.priority.critical'),
      color: 'error',
    },
    {
      priority: t('marketing.priorities.customerFocus'),
      impact: '+11.2 M€',
      timeline: '12 ' + t('marketing.months'),
      investment: t('marketing.investment.medium'),
      level: t('marketing.priority.high'),
      color: 'warning',
    },
    {
      priority: t('marketing.priorities.asiaExpansion'),
      impact: '+100 M€ NPV',
      timeline: '24 ' + t('marketing.months'),
      investment: t('marketing.investment.high'),
      level: t('marketing.priority.high'),
      color: 'warning',
    },
    {
      priority: t('marketing.priorities.digitalOptimization'),
      impact: '+30%',
      timeline: '9 ' + t('marketing.months'),
      investment: t('marketing.investment.low'),
      level: t('marketing.priority.medium'),
      color: 'info',
    },
  ];

  // Radar chart data for MEI breakdown
  const meiBreakdown = [
    {
      metric: t('marketing.mei.marketShare'),
      value: 5,
      fullMark: 10,
    },
    {
      metric: t('marketing.mei.brandAwareness'),
      value: 65,
      fullMark: 100,
    },
    {
      metric: t('marketing.mei.satisfaction'),
      value: 80,
      fullMark: 100,
    },
    {
      metric: t('marketing.mei.budgetEfficiency'),
      value: 40,
      fullMark: 100,
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.marketingSales.title')}
      </Typography>

      {/* 1. Disclaimer & Overall Score */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={0} sx={{ flex: 1, border: '1px solid', borderColor: 'info.main', borderRadius: 2, overflow: 'hidden' }}>
            <Alert severity="info" icon={<Psychology fontSize="inherit" />} sx={{ height: '100%', borderRadius: 0 }}>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                {t('operational.dataDisclaimerTitle')}
                </Typography>
                <Typography variant="body2">{t('marketing.dataDisclaimer')}</Typography>
            </Alert>
        </Paper>

        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" color="primary" fontWeight={600}>
                {t('marketing.overallScore')}
                </Typography>
                <Chip label={`${overallScore}/100`} color="warning" size="medium" icon={<Campaign />} sx={{ fontWeight: 'bold' }} />
            </Box>
            <LinearProgress
                variant="determinate"
                value={overallScore}
                sx={{ height: 12, borderRadius: 6, mb: 1, bgcolor: 'grey.200' }}
                color="warning"
            />
            <Typography variant="body2" color="text.secondary">
                {t('marketing.scoreDescription')}
            </Typography>
        </Paper>
      </Box>

      {/* 2. Customer Economics (LTV/CAC) */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <MonetizationOn sx={{ mr: 1 }} /> {t('marketing.customerEconomics')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold">
            CAC/LTV = 0.0012 | {t('marketing.ltv.investment')}: 2.000€ → {t('marketing.ltv.return')}: 1,71 M€
            </Typography>
            <Typography variant="body2">{t('marketing.ltv.description')}</Typography>
        </Alert>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.100' }}>
                <Typography variant="body2" color="text.secondary">{t('marketing.ltv.title')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="success.dark">1.71 M€</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="body2" color="text.secondary">CAC</Typography>
                <Typography variant="h4" fontWeight="bold" color="text.primary">2.000€</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'info.50', borderRadius: 2, border: '1px solid', borderColor: 'info.100' }}>
                <Typography variant="body2" color="text.secondary">{t('marketing.ltv.lifetime')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="info.dark">15 {t('operational.years')}</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.100' }}>
                <Typography variant="body2" color="text.secondary">{t('marketing.ltv.churnRate')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="success.dark">&lt;3%</Typography>
            </Paper>
        </Box>

        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
             <Typography variant="caption" color="text.secondary">
                {t('marketing.ltv.formula')}: Σ(200.000€ / (1+0.08)^t) = 1,71 M€ | {t('marketing.ltv.discountRate')}: 8%
             </Typography>
        </Box>
      </Paper>

      {/* 3. Segmentation & Market Share (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* ABC Segmentation */}
        <Paper elevation={3} sx={{ flex: 1.5, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Group sx={{ mr: 1 }} /> {t('marketing.segmentation.title')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TableContainer sx={{ mb: 2 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{t('marketing.segmentation.segment')}</strong></TableCell>
                            <TableCell align="right"><strong>{t('marketing.segmentation.revenue')}</strong></TableCell>
                            <TableCell align="right"><strong>{t('marketing.segmentation.profit')}</strong></TableCell>
                            <TableCell align="right"><strong>{t('marketing.segmentation.focus')}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerSegments.map((row) => (
                            <TableRow key={row.segment} hover>
                                <TableCell>
                                    <Chip 
                                        label={row.segment} 
                                        color={row.segment === 'A' ? 'success' : row.segment === 'B' ? 'warning' : 'default'} 
                                        size="small" 
                                    />
                                </TableCell>
                                <TableCell align="right">{row.revenue} M€</TableCell>
                                <TableCell align="right">{row.profit} M€</TableCell>
                                <TableCell align="right">
                                    <strong style={{ color: row.segment === 'A' ? 'green' : 'inherit' }}>{row.focus}%</strong>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Alert severity="warning" icon={<Warning fontSize="small"/>}>
                <Typography variant="caption" fontWeight="bold" display="block">
                    {t('marketing.segmentation.optimization')}: +11.2 M€
                </Typography>
                <Typography variant="caption">{t('marketing.segmentation.optimizationDesc')}</Typography>
            </Alert>
        </Paper>

        {/* Market Share (HHI) */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <PieIcon sx={{ mr: 1 }} /> {t('marketing.marketAnalysis')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ flex: 1, minHeight: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={marketShare}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {marketShare.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </Box>
            <Box sx={{ mt: 2, p: 1.5, bgcolor: 'info.50', borderRadius: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight="bold" color="info.dark">
                    HHI = {hhi}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {t('marketing.hhi.concentrated')} - {t('marketing.hhi.description')}
                </Typography>
            </Box>
        </Paper>
      </Box>

      {/* 4. Digital Channels & Campus ROI (Flex Row) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Digital Channels (TOPSIS) */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('marketing.digitalChannels')} (TOPSIS)
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ height: 250, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={digitalChannels}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" hide />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="topsis" fill="#8884d8" name="Score" />
                    <Bar dataKey="budget" fill="#82ca9d" name="Budget %" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
            <Typography variant="caption" color="text.secondary" align="center" display="block">
                 SEO (40%), LinkedIn (30%), Webinars (20%), Fairs (10%)
            </Typography>
        </Paper>

        {/* JUMO Campus ROI */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('marketing.campusROI')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
                <Paper elevation={0} sx={{ p: 1.5, bgcolor: 'error.50', borderRadius: 2 }}>
                    <Typography variant="caption" color="text.secondary">{t('marketing.campus.costs')}</Typography>
                    <Typography variant="h6" fontWeight="bold" color="error.main">-{campusROI.costs} M€</Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 1.5, bgcolor: 'success.50', borderRadius: 2 }}>
                    <Typography variant="caption" color="text.secondary">{t('marketing.campus.revenue')}</Typography>
                    <Typography variant="h6" fontWeight="bold" color="success.main">+{campusROI.totalRevenue} M€</Typography>
                </Paper>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 2, border: '1px dashed', borderColor: 'success.main', borderRadius: 2, bgcolor: 'success.50' }}>
                 <Typography variant="h3" fontWeight="bold" color="success.dark">{campusROI.roi}%</Typography>
                 <Typography variant="subtitle2" color="success.dark">ROI</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
                {t('marketing.campus.investment')} 1€ → 1.52€
            </Typography>
        </Paper>
      </Box>

      {/* 5. Sales Efficiency & Pricing (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
                <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrendingUp sx={{ mr: 1 }} /> {t('marketing.salesEfficiency')}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">{t('marketing.sales.current')}</Typography>
                <Typography variant="h3" fontWeight="bold" color="error.main">819k€</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Alert severity="error" icon={<Error fontSize="inherit" />}>
                     {t('marketing.sales.gap')}: -31.7% (Bench: 1.2M€)
                </Alert>
            </Box>
        </Paper>

        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <MonetizationOn sx={{ mr: 1 }} /> {t('marketing.pricingOptimization')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            

[Image of price elasticity of demand curve]

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 2 }}>
                 <Box>
                    <Typography variant="body2" color="text.secondary">{t('marketing.pricing.current')}</Typography>
                    <Typography variant="h5" fontWeight="bold">90€</Typography>
                 </Box>
                 <TrendingUp color="success" />
                 <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" color="text.secondary">{t('marketing.pricing.optimal')}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="success.main">107.50€</Typography>
                 </Box>
            </Box>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, textAlign: 'center' }}>
                 <Typography variant="subtitle1" fontWeight="bold" color="success.dark">
                    {t('marketing.pricing.potential')}: +24.2 M€
                 </Typography>
            </Paper>
        </Paper>
      </Box>

      {/* 6. Churn & MEI (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
         
         {/* Churn Prevention */}
         <Paper elevation={3} sx={{ flex: 1.5, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Repeat sx={{ mr: 1 }} /> {t('marketing.churnPrevention')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Alert severity="error" sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight="bold">
                {t('marketing.churn.annualLoss')}: 256.5 M€ LTV
                </Typography>
            </Alert>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <Box>
                    <Typography variant="caption" color="text.secondary">{t('marketing.churn.preventionCost')}</Typography>
                    <Typography variant="h5" fontWeight="bold">2 M€</Typography>
                </Box>
                <Box>
                    <Typography variant="caption" color="text.secondary">{t('marketing.churn.savings')}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="success.main">76.95 M€</Typography>
                </Box>
                <Box>
                    <Typography variant="caption" color="text.secondary">ROI</Typography>
                    <Typography variant="h5" fontWeight="bold" color="success.main">3,747%</Typography>
                </Box>
            </Box>
         </Paper>

         {/* MEI Radar */}
         <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <ShowChart sx={{ mr: 1 }} /> MEI Index
            </Typography>
            <Divider sx={{ mb: 2 }} />
            

[Image of marketing funnel metrics]

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flex: 1, height: 200 }}>
                    <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={meiBreakdown}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" style={{ fontSize: '10px' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar name="Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                    </ResponsiveContainer>
                </Box>
                <Box sx={{ flex: 0.6, p: 2, bgcolor: 'warning.50', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="caption" display="block">MEI Score</Typography>
                    <Typography variant="h4" fontWeight="bold" color="warning.main">0.325</Typography>
                    <Typography variant="caption" display="block" color="text.secondary">{t('marketing.mei.inefficient')}</Typography>
                </Box>
            </Box>
         </Paper>
      </Box>

      {/* 7. Scorecard & Priorities (2 Columns) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Scorecard */}
        <Paper elevation={3} sx={{ flex: 1.2, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('marketing.performanceScorecard')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{t('operational.metric')}</strong></TableCell>
                            <TableCell align="center"><strong>{t('operational.current')}</strong></TableCell>
                            <TableCell align="center"><strong>{t('marketing.status.title')}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {performanceMetrics.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell>
                                    {row.metric}
                                    <Typography variant="caption" display="block" color="text.secondary">Target: {row.benchmark}</Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: 500 }}>{row.current}</TableCell>
                                <TableCell align="center">
                                    <Chip label={row.status} color={row.color} size="small" variant="outlined" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

        {/* Strategic Priorities */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('marketing.strategicPriorities')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {strategicPriorities.map((priority, index) => (
                    <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                {index + 1}. {priority.priority}
                            </Typography>
                            <Chip label={priority.level} color={priority.color} size="small" sx={{ height: 20, fontSize: 10 }} />
                        </Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                             {t('marketing.impact')}: <strong style={{ color: '#1976d2' }}>{priority.impact}</strong>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                             {t('marketing.timeline')}: {priority.timeline}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Paper>
      </Box>

      {/* 8. Conclusion */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'warning.light', color: 'warning.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {t('marketing.conclusion.title')}
        </Typography>
        <Divider sx={{ mb: 2, borderColor: 'rgba(0,0,0,0.1)' }} />
        <Typography variant="body1" paragraph>
          <strong>{t('marketing.conclusion.paradox')}:</strong> {t('marketing.conclusion.paradoxText')}
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 2 }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>{t('marketing.conclusion.strengths')}:</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    <li><Typography variant="body2">{t('marketing.conclusion.strength1')}</Typography></li>
                    <li><Typography variant="body2">{t('marketing.conclusion.strength2')}</Typography></li>
                    <li><Typography variant="body2">{t('marketing.conclusion.strength3')}</Typography></li>
                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>{t('marketing.conclusion.weaknesses')}:</Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    <li><Typography variant="body2">{t('marketing.conclusion.weakness1')}</Typography></li>
                    <li><Typography variant="body2">{t('marketing.conclusion.weakness2')}</Typography></li>
                    <li><Typography variant="body2">{t('marketing.conclusion.weakness3')}</Typography></li>
                </Box>
            </Box>
        </Box>

        <Alert severity="error" sx={{ mt: 3, bgcolor: 'background.paper' }}>
          <Typography variant="subtitle2" fontWeight="bold" color="error.main">
            {t('marketing.conclusion.solution')}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {t('marketing.conclusion.solutionText')}
          </Typography>
        </Alert>
      </Paper>
    </Box>
  );
}

export default MarketingSales;