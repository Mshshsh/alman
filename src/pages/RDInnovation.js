import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  LinearProgress,
  Chip,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import {
  Lightbulb,
  Timeline,
  School,
  ShowChart,
  Assignment,
  Science,
  TrendingUp,
  Warning,
  CheckCircle,
  Error as ErrorIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function RDInnovation() {
  const { t } = useTranslation();

  const COLORS = ['#1976d2', '#388e3c', '#f57c00', '#d32f2f', '#7b1fa2'];

  // Overall Innovation Performance Score
  const innovationScore = 58;

  // Patent Portfolio Analysis
  const patentImpactScore = 0.857;
  const totalPatents = 650;
  const annualNewPatents = 30;

  const technologyConcentration = [
    { name: t('rd.technologies.temperature'), value: 40, patents: 260 },
    { name: t('rd.technologies.liquid'), value: 30, patents: 195 },
    { name: t('rd.technologies.pressure'), value: 30, patents: 195 },
  ];

  // Patent Age Distribution
  const patentAgeData = [
    { age: '0-3 ' + t('rd.years'), patents: 180, value: 14382 },
    { age: '4-7 ' + t('rd.years'), patents: 240, value: 10728 },
    { age: '8-10 ' + t('rd.years'), patents: 120, value: 3000 },
    { age: '10+ ' + t('rd.years'), patents: 60, value: 990 },
  ];

  const totalPortfolioValue = 29100;
  const annualDepreciation = 4365;

  // R&D Investment Efficiency
  const rdIntensity = 7.0;
  const rdBudget = 21.5;
  const innovationReturnRate = 84.5;
  const newProductRevenue = 54.5;

  // R&D Personnel Productivity
  const rdPersonnel = 350;
  const patentsPerEmployee = 0.086;
  const sectorBenchmark = 0.15;
  const productivityRatio = 57.3;

  // Technology Roadmap
  const technologyProjects = [
    {
      name: 'SPE/IO-Link',
      trl: '8-9',
      market: '1-2',
      investment: 5,
      success: 85,
      revenue: 75,
    },
    {
      name: 'JUMO Cloud',
      trl: '5-6',
      market: '3-4',
      investment: 15,
      success: 60,
      revenue: 30,
    },
    {
      name: t('rd.projects.autonomous'),
      trl: '3-4',
      market: '5+',
      investment: 30,
      success: 40,
      revenue: 80,
    },
  ];

  const portfolioRisk = 43.5;

  // University Collaboration
  const collaborationCost = 4.0;
  const collaborationBenefit = 3.3;
  const collaborationROI = -17.5;

  // Tax Benefits
  const taxBenefit = 8.06;
  const effectiveRDCost = 13.44;

  // Innovation Metrics Radar
  const innovationMetrics = [
    { metric: t('rd.metrics.patentImpact'), score: 71.4 },
    { metric: t('rd.metrics.rdIntensity'), score: 87.5 },
    { metric: t('rd.metrics.innovationReturn'), score: 70.4 },
    { metric: t('rd.metrics.personnelProductivity'), score: 57.3 },
    { metric: t('rd.metrics.portfolioRisk'), score: 56.5 },
    { metric: t('rd.metrics.universityROI'), score: 42.5 },
  ];

  // Performance Scorecard
  const performanceScorecard = [
    {
      metric: t('rd.scorecard.patentImpact'),
      current: 0.857,
      target: 1.2,
      gap: -0.343,
      status: 'bad',
    },
    {
      metric: t('rd.scorecard.rdIntensity'),
      current: '7.0%',
      target: '8.0%',
      gap: '-1.0%',
      status: 'good',
    },
    {
      metric: t('rd.scorecard.innovationReturn'),
      current: '84.5%',
      target: '120%',
      gap: '-35.5%',
      status: 'medium',
    },
    {
      metric: t('rd.scorecard.personnelProductivity'),
      current: '57.3%',
      target: '85%',
      gap: '-27.7%',
      status: 'bad',
    },
    {
      metric: t('rd.scorecard.portfolioRisk'),
      current: '43.5%',
      target: '30%',
      gap: '+13.5%',
      status: 'bad',
    },
    {
      metric: t('rd.scorecard.universityROI'),
      current: '-17.5%',
      target: '+10%',
      gap: '-27.5%',
      status: 'bad',
    },
  ];

  // Strategic Priorities
  const strategicPriorities = [
    {
      priority: t('rd.priorities.iolink'),
      impact: '+75 M€',
      investment: '5 M€',
      roi: '+400%',
      level: t('rd.priority.critical'),
      color: 'error',
    },
    {
      priority: t('rd.priorities.patentQuality'),
      impact: 'PI: 0.857 → 1.0',
      investment: '2 M€',
      roi: '+25%',
      level: t('rd.priority.high'),
      color: 'error',
    },
    {
      priority: t('rd.priorities.rdEfficiency'),
      impact: t('rd.priorities.rdEfficiencyDesc'),
      investment: '3 M€',
      roi: '+150%',
      level: t('rd.priority.high'),
      color: 'warning',
    },
    {
      priority: t('rd.priorities.university'),
      impact: '-0.7M€ → +1.0M€',
      investment: '1 M€',
      roi: '+100%',
      level: t('rd.priority.medium'),
      color: 'warning',
    },
  ];

  // Optimal R&D Portfolio Allocation
  const portfolioAllocation = [
    { project: 'IO-Link/SPE', allocation: 35, budget: 7.5, return: 25, risk: 15 },
    { project: 'JUMO Cloud', allocation: 25, budget: 5.4, return: 40, risk: 35 },
    {
      project: t('rd.projects.autonomous'),
      allocation: 15,
      budget: 3.2,
      return: 60,
      risk: 50,
    },
    { project: t('rd.projects.basicRD'), allocation: 15, budget: 3.2, return: 15, risk: 10 },
    {
      project: t('rd.projects.efficiency'),
      allocation: 10,
      budget: 2.2,
      return: 35,
      risk: 20,
    },
  ];

  const portfolioExpectedReturn = 32.3;
  const portfolioRiskLevel = 21.8;
  const sharpeRatio = 1.34;

  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.rdInnovation.title')}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {t('pages.rdInnovation.welcome')}
      </Typography>

      {/* 1. Disclaimer & Overall Score */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={0} sx={{ flex: 1, border: '1px solid', borderColor: 'warning.main', borderRadius: 2, overflow: 'hidden' }}>
            <Alert severity="warning" icon={<Warning fontSize="inherit" />} sx={{ height: '100%', borderRadius: 0 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                {t('rd.dataDisclaimerTitle')}
                </Typography>
                <Typography variant="body2">{t('rd.dataDisclaimer')}</Typography>
            </Alert>
        </Paper>

        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" gutterBottom sx={{ opacity: 0.9 }}>
                    {t('rd.overallScore')}
                    </Typography>
                    <Typography variant="h2" fontWeight="bold">
                    {innovationScore}/100
                    </Typography>
                </Box>
                <Lightbulb sx={{ fontSize: 60, opacity: 0.8 }} />
            </Box>
            <LinearProgress
                variant="determinate"
                value={innovationScore}
                sx={{ 
                    height: 10, 
                    borderRadius: 5, 
                    mt: 2, 
                    mb: 1, 
                    bgcolor: 'rgba(255,255,255,0.3)',
                    '& .MuiLinearProgress-bar': { bgcolor: 'white' } 
                }}
            />
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {t('rd.scoreDescription')}
            </Typography>
        </Paper>
      </Box>

      {/* 2. Patent Portfolio Analysis */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Assignment sx={{ mr: 1 }} /> {t('rd.patentPortfolio.title')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        



        {/* Key Stats Row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3 }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="body2" color="text.secondary">{t('rd.patentPortfolio.totalPatents')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">{totalPatents}</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'warning.50', borderRadius: 2 }}>
                <Typography variant="body2" color="text.secondary">{t('rd.patentPortfolio.patentImpact')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="warning.main">{patentImpactScore}</Typography>
                <Typography variant="caption" color="error">{t('rd.patentPortfolio.belowTarget')}</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2 }}>
                <Typography variant="body2" color="text.secondary">{t('rd.patentPortfolio.annualPatents')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="success.main">{annualNewPatents}</Typography>
            </Paper>
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
            <strong>{t('rd.patentPortfolio.impactFormula')}:</strong> PI = (C/A) × (F/S)
            </Typography>
            <Typography variant="body2">
            {t('rd.patentPortfolio.impactDescription')}
            </Typography>
        </Alert>

        {/* Charts Row */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" align="center" gutterBottom>
                   {t('rd.patentPortfolio.technologyConcentration')}
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                    <Pie
                        data={technologyConcentration}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {technologyConcentration.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                </ResponsiveContainer>
            </Box>
            
            <Box sx={{ flex: 1.5 }}>
                 <Typography variant="subtitle2" fontWeight="bold" align="center" gutterBottom>
                   {t('rd.patentPortfolio.ageDistribution')}
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={patentAgeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="patents" fill="#1976d2" name={t('rd.patentPortfolio.patents')} />
                    <Bar dataKey="value" fill="#388e3c" name={t('rd.patentPortfolio.value')} />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Box>
        
        <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
             <Typography variant="caption" color="text.secondary">
               <strong>{t('rd.patentPortfolio.portfolioValue')}:</strong> {totalPortfolioValue.toLocaleString()} {t('rd.units')} | 
               <strong> {t('rd.patentPortfolio.annualDepreciation')}:</strong> {annualDepreciation.toLocaleString()} {t('rd.units')}
             </Typography>
        </Box>
      </Paper>

      {/* 3. R&D Efficiency & Personnel (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        
        {/* R&D Efficiency */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUp sx={{ mr: 1 }} /> {t('rd.rdEfficiency.title')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
                <Paper elevation={0} sx={{ p: 1.5, bgcolor: 'success.50', borderRadius: 2 }}>
                    <Typography variant="caption" color="text.secondary">{t('rd.rdEfficiency.rdIntensity')}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="success.main">{rdIntensity}%</Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 1.5, bgcolor: 'info.50', borderRadius: 2 }}>
                    <Typography variant="caption" color="text.secondary">{t('rd.rdEfficiency.annualBudget')}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="info.main">{rdBudget} M€</Typography>
                </Paper>
            </Box>
            
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'warning.50', borderRadius: 2, textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" fontWeight="bold" color="warning.main">{innovationReturnRate}%</Typography>
                <Typography variant="body2" color="text.secondary">{t('rd.rdEfficiency.innovationReturn')}</Typography>
                <Typography variant="caption" color="error">{t('rd.rdEfficiency.targetReturn')}</Typography>
            </Paper>

            <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="caption">
                    IRR = ({newProductRevenue} M€ / 64.5 M€) × 100% = {innovationReturnRate}%
                </Typography>
            </Alert>
        </Paper>

        {/* Personnel Productivity */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Science sx={{ mr: 1 }} /> {t('rd.personnel.title')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                    <Typography variant="body2">{t('rd.personnel.rdPersonnel')}</Typography>
                    <Typography variant="h5" fontWeight="bold" color="primary">{rdPersonnel}</Typography>
                 </Box>
                 
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'warning.50', borderRadius: 2 }}>
                    <Box>
                        <Typography variant="body2">{t('rd.personnel.patentsPerEmployee')}</Typography>
                        <Typography variant="caption" color="text.secondary">{t('rd.personnel.sectorBenchmark')}: {sectorBenchmark}</Typography>
                    </Box>
                    <Typography variant="h5" fontWeight="bold" color="warning.main">{patentsPerEmployee}</Typography>
                 </Box>

                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: 'error.50', borderRadius: 2 }}>
                    <Typography variant="body2">{t('rd.personnel.productivityRatio')}</Typography>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h5" fontWeight="bold" color="error.main">{productivityRatio}%</Typography>
                        <Typography variant="caption" color="error">{t('rd.personnel.belowSector')}</Typography>
                    </Box>
                 </Box>
            </Box>
            <Alert severity="warning" sx={{ mt: 2 }}>
                <Typography variant="caption">{t('rd.personnel.productivityNote')}</Typography>
            </Alert>
        </Paper>
      </Box>

      {/* 4. Technology Roadmap & University (Flex Row) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Technology Roadmap */}
        <Paper elevation={3} sx={{ flex: 2, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Timeline sx={{ mr: 1 }} /> {t('rd.roadmap.title')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            
            <TableContainer sx={{ mb: 2 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{t('rd.roadmap.technology')}</strong></TableCell>
                            <TableCell><strong>{t('rd.roadmap.trl')}</strong></TableCell>
                            <TableCell><strong>{t('rd.roadmap.market')}</strong></TableCell>
                            <TableCell><strong>{t('rd.roadmap.success')}</strong></TableCell>
                            <TableCell><strong>{t('rd.roadmap.potentialRevenue')}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {technologyProjects.map((project, index) => (
                            <TableRow key={index} hover>
                                <TableCell>{project.name}</TableCell>
                                <TableCell><Chip label={project.trl} size="small" variant="outlined" /></TableCell>
                                <TableCell>{project.market} {t('rd.roadmap.years')}</TableCell>
                                <TableCell sx={{ width: 150 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={project.success} 
                                            sx={{ flex: 1, height: 6, borderRadius: 3 }}
                                            color={project.success > 70 ? 'success' : project.success > 50 ? 'warning' : 'error'}
                                        />
                                        <Typography variant="caption">{project.success}%</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography fontWeight="bold" color="success.main" variant="body2">
                                        {project.revenue} M€
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Alert severity="error" icon={<ErrorIcon fontSize="inherit" />}>
                 <Typography variant="body2">
                    <strong>{t('rd.roadmap.portfolioRisk')}:</strong> {portfolioRisk}% {t('rd.roadmap.failureProb')}
                 </Typography>
            </Alert>
        </Paper>

        {/* University Collaboration & Radar */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                    <School sx={{ mr: 1 }} /> {t('rd.university.title')}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box sx={{ flex: 1, textAlign: 'center', p: 1, bgcolor: 'error.50', borderRadius: 2 }}>
                        <Typography variant="caption" display="block">{t('rd.university.annualCost')}</Typography>
                        <Typography variant="h6" fontWeight="bold" color="error.main">{collaborationCost} M€</Typography>
                    </Box>
                    <Box sx={{ flex: 1, textAlign: 'center', p: 1, bgcolor: 'success.50', borderRadius: 2 }}>
                        <Typography variant="caption" display="block">{t('rd.university.annualBenefit')}</Typography>
                        <Typography variant="h6" fontWeight="bold" color="success.main">{collaborationBenefit} M€</Typography>
                    </Box>
                </Box>
                <Alert severity="error" sx={{ py: 0 }}>
                    <Typography variant="caption">ROI: {collaborationROI}% ({t('rd.university.negativeROI')})</Typography>
                </Alert>
            </Box>
            
            <Box sx={{ flex: 1, minHeight: 250 }}>
                <Typography variant="subtitle2" fontWeight="bold" align="center">{t('rd.innovationRadar.title')}</Typography>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={innovationMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" style={{fontSize: 10}} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name={t('rd.innovationRadar.score')} dataKey="score" stroke="#1976d2" fill="#1976d2" fillOpacity={0.6} />
                    <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
      </Box>

      {/* 5. Scorecard & Priorities (2 Columns) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Performance Scorecard */}
        <Paper elevation={3} sx={{ flex: 1.2, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('rd.scorecard.title')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>{t('rd.scorecard.metric')}</strong></TableCell>
                            <TableCell><strong>{t('rd.scorecard.current')}</strong></TableCell>
                            <TableCell><strong>{t('rd.scorecard.target')}</strong></TableCell>
                            <TableCell><strong>{t('rd.scorecard.status')}</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {performanceScorecard.map((row, index) => (
                            <TableRow key={index} hover>
                                <TableCell>
                                    {row.metric}
                                    <Typography variant="caption" display="block" color="text.secondary">Gap: {row.gap}</Typography>
                                </TableCell>
                                <TableCell>{row.current}</TableCell>
                                <TableCell>{row.target}</TableCell>
                                <TableCell>
                                    <Chip 
                                        label={row.status === 'good' ? t('rd.scorecard.good') : row.status === 'medium' ? t('rd.scorecard.medium') : t('rd.scorecard.weak')}
                                        color={row.status === 'good' ? 'success' : row.status === 'medium' ? 'warning' : 'error'}
                                        size="small"
                                        variant="outlined"
                                    />
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
                {t('rd.strategicPriorities')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {strategicPriorities.map((priority, index) => (
                    <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {index + 1}. {priority.priority}
                            </Typography>
                            <Chip label={priority.level} color={priority.color} size="small" />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                             <Typography variant="caption" color="text.secondary">{t('rd.impact')}: <strong>{priority.impact}</strong></Typography>
                             <Typography variant="caption" color="text.secondary">{t('rd.investment')}: <strong>{priority.investment}</strong></Typography>
                             <Typography variant="caption" color="text.secondary">ROI: <strong>{priority.roi}</strong></Typography>
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Paper>
      </Box>

      {/* 6. Portfolio Allocation */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
         <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <ShowChart sx={{ mr: 1 }} /> {t('rd.portfolio.title')}
         </Typography>
         <Divider sx={{ mb: 3 }} />
         

         <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioAllocation}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="project" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="allocation" fill="#1976d2" name={t('rd.portfolio.allocation') + ' (%)'} />
            <Bar dataKey="return" fill="#388e3c" name={t('rd.portfolio.expectedReturn') + ' (%)'} />
            <Bar dataKey="risk" fill="#d32f2f" name={t('rd.portfolio.risk') + ' (%)'} />
            </BarChart>
         </ResponsiveContainer>

         <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
            <Paper elevation={2} sx={{ flex: 1, minWidth: '200px', p: 2, bgcolor: 'success.50' }}>
               <Typography variant="body2" color="text.secondary">{t('rd.portfolio.expectedReturn')}</Typography>
               <Typography variant="h4" fontWeight="bold" color="success.dark">{portfolioExpectedReturn}%</Typography>
            </Paper>
            <Paper elevation={2} sx={{ flex: 1, minWidth: '200px', p: 2, bgcolor: 'warning.50' }}>
               <Typography variant="body2" color="text.secondary">{t('rd.portfolio.portfolioRisk')}</Typography>
               <Typography variant="h4" fontWeight="bold" color="warning.dark">{portfolioRiskLevel}%</Typography>
            </Paper>
            <Paper elevation={2} sx={{ flex: 1, minWidth: '200px', p: 2, bgcolor: 'info.50' }}>
               <Typography variant="body2" color="text.secondary">{t('rd.portfolio.sharpeRatio')}</Typography>
               <Typography variant="h4" fontWeight="bold" color="info.dark">{sharpeRatio}</Typography>
            </Paper>
         </Box>
      </Paper>

      {/* 7. Conclusion */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#fff3e0', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="warning.main" fontWeight="bold">
          {t('rd.conclusion.title')}
        </Typography>
        <Divider sx={{ mb: 2, borderColor: 'rgba(0,0,0,0.1)' }} />

        <Typography variant="subtitle1" color="error.main" fontWeight="bold" gutterBottom>
          {t('rd.conclusion.paradox')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('rd.conclusion.paradoxText')}
        </Typography>

        <Box sx={{ mt: 2, mb: 3 }}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>{t('rd.conclusion.keyIssues')}:</Typography>
            <Box component="ul" sx={{ m: 0, pl: 2 }}>
                <li><Typography variant="body2">{t('rd.conclusion.issue1')}</Typography></li>
                <li><Typography variant="body2">{t('rd.conclusion.issue2')}</Typography></li>
                <li><Typography variant="body2">{t('rd.conclusion.issue3')}</Typography></li>
                <li><Typography variant="body2">{t('rd.conclusion.issue4')}</Typography></li>
            </Box>
        </Box>

        <Alert severity="success" icon={<CheckCircle fontSize="inherit" />}>
          <Typography variant="body2">
            <strong>{t('rd.conclusion.recommendation')}:</strong> {t('rd.conclusion.recommendationText')}
          </Typography>
        </Alert>
      </Paper>
    </Box>
  );
}

export default RDInnovation;