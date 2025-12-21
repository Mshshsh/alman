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
  Warning,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Factory,
  Inventory,
  Speed,
  Science,
  Settings,
  ShowChart,
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

function OperationalEfficiency() {
  const { t } = useTranslation();

  // Data Disclaimer
  const dataDisclaimer = t('operational.dataDisclaimer');

  // Overall Score
  const overallScore = 62;

  // OEE Analysis Data
  const oeeComponents = [
    { name: t('operational.oee.availability'), value: 85, benchmark: 90 },
    { name: t('operational.oee.performance'), value: 90, benchmark: 95 },
    { name: t('operational.oee.quality'), value: 92, benchmark: 98 },
  ];

  const oeeScore = 70.4;

  // Lost Profit Calculation
  const lostProfitData = {
    theoreticalCapacity: 12,
    effectiveCapacity: 8.45,
    capacityLoss: 3.55,
    unitMargin: 5,
    annualLostProfit: 17.75,
  };

  // Setup Cost Analysis
  const setupCostData = [
    { category: t('operational.setup.setupTime'), value: 0.99, color: '#FF8042' },
    { category: t('operational.setup.inventoryCost'), value: 4.5, color: '#FFBB28' },
    { category: t('operational.setup.financingCost'), value: 0.225, color: '#00C49F' },
  ];

  // Vertical Integration Analysis
  const integrationComparison = [
    {
      scenario: t('operational.integration.current'),
      personnel: 876,
      cost: 55.04,
      wasteCost: 5.4,
      total: 55.04,
    },
    {
      scenario: t('operational.integration.outsourcing'),
      personnel: 526,
      cost: 35.2,
      wasteCost: 7.2,
      total: 47.26,
    },
  ];

  const netSavings = 7.78;

  // Inventory Optimization
  const inventoryOptimization = {
    current: 2000,
    optimal: 1135,
    excess: 865,
    totalExcessValue: 389,
    releasableCash: 272,
  };

  // Sensilo Factory ROI
  const sensiloROI = {
    investment: 50,
    annualBenefit: 26.47,
    roi: 52.9,
    paybackPeriod: 1.89,
  };

  // Success Probability
  const successFactors = [
    { factor: t('operational.sensilo.agvIntegration'), probability: 85 },
    { factor: t('operational.sensilo.darkFactory'), probability: 75 },
    { factor: t('operational.sensilo.training'), probability: 90 },
    { factor: t('operational.sensilo.supplyChain'), probability: 80 },
  ];

  const overallSuccessProbability = 45.9;

  // Performance Scorecard
  const performanceMetrics = [
    {
      metric: 'OEE',
      current: '70%',
      target: '85%',
      gap: '+15%',
      priority: t('operational.priority.high'),
      priorityColor: 'error',
    },
    {
      metric: t('operational.metrics.inventoryTurnover'),
      current: '2.52x',
      target: '4.0x',
      gap: '+1.48x',
      priority: t('operational.priority.critical'),
      priorityColor: 'error',
    },
    {
      metric: t('operational.metrics.sigmaLevel'),
      current: '2.2σ',
      target: '3.0σ',
      gap: '+0.8σ',
      priority: t('operational.priority.medium'),
      priorityColor: 'warning',
    },
    {
      metric: t('operational.metrics.productivity'),
      current: '0.68',
      target: '0.85',
      gap: '+0.17',
      priority: t('operational.priority.high'),
      priorityColor: 'error',
    },
    {
      metric: t('operational.metrics.unitCost'),
      current: '15€',
      target: '12€',
      gap: '-3€',
      priority: t('operational.priority.high'),
      priorityColor: 'error',
    },
  ];

  // Six Sigma Calculation
  const sigmaData = {
    wasteRate: 3,
    dpmo: 15250,
    sigmaLevel: 2.2,
    industryAverage: 3.0,
  };

  // Strategic Priorities NPV
  const strategicPriorities = [
    {
      priority: t('operational.priorities.inventory'),
      npv: 272,
      impact: t('operational.priorities.immediate'),
      difficulty: t('operational.difficulty.low'),
      difficultyColor: 'success',
    },
    {
      priority: t('operational.priorities.sensilo'),
      npv: 82.35,
      impact: '+26.47 M€/year',
      difficulty: t('operational.difficulty.high'),
      difficultyColor: 'error',
    },
    {
      priority: t('operational.priorities.oee'),
      npv: 44.4,
      impact: '+8.88 M€/year',
      difficulty: t('operational.difficulty.medium'),
      difficultyColor: 'warning',
    },
    {
      priority: t('operational.priorities.waste'),
      npv: 13.5,
      impact: '+2.7 M€/year',
      difficulty: t('operational.difficulty.low'),
      difficultyColor: 'success',
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.operationalEfficiency.title')}
      </Typography>

      {/* 1. Disclaimer & Overall Score */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
         <Paper elevation={0} sx={{ flex: 1, border: '1px solid', borderColor: 'info.main', borderRadius: 2, overflow: 'hidden' }}>
            <Alert severity="info" icon={<Science fontSize="inherit" />} sx={{ height: '100%', borderRadius: 0 }}>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                {t('operational.dataDisclaimerTitle')}
                </Typography>
                <Typography variant="body2">{dataDisclaimer}</Typography>
            </Alert>
         </Paper>

         <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" color="primary" fontWeight={600}>
                {t('operational.overallScore')}
                </Typography>
                <Chip label={`${overallScore}/100`} color="warning" size="medium" icon={<Speed />} sx={{ fontWeight: 'bold' }} />
            </Box>
            <LinearProgress
                variant="determinate"
                value={overallScore}
                sx={{ height: 12, borderRadius: 6, mb: 1, bgcolor: 'grey.200' }}
                color="warning"
            />
            <Typography variant="body2" color="text.secondary">
                {t('operational.scoreDescription')}
            </Typography>
         </Paper>
      </Box>

      {/* 2. OEE Analysis & Setup Costs (Side by Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3, alignItems: 'stretch' }}>
        
        {/* OEE Analysis */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, minWidth: 0, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Factory sx={{ mr: 1 }} /> {t('operational.oeeAnalysis')}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Alert severity="error" sx={{ mb: 3 }}>
            <Typography variant="body2" fontWeight="bold">
              {t('operational.oee.currentOEE')}: {oeeScore}% | {t('operational.oee.annualLoss')}: {lostProfitData.annualLostProfit} M€
            </Typography>
            <Typography variant="caption">{t('operational.oee.lossDescription')}</Typography>
          </Alert>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={oeeComponents}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#FF8042" name={t('operational.current')} barSize={30} />
              <Bar dataKey="benchmark" fill="#00C49F" name={t('operational.benchmark')} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
          
          <Box sx={{ mt: 2, p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary" display="block">
                {t('operational.oee.formula')}: 0.85 × 0.90 × 0.92 = 0.704
            </Typography>
          </Box>
        </Paper>

        {/* Setup Costs */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, minWidth: 0, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Settings sx={{ mr: 1 }} /> {t('operational.setupCostAnalysis')}
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={setupCostData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: 'M€', position: 'insideBottom', offset: -5 }} />
              <YAxis dataKey="category" type="category" width={120} tick={{fontSize: 12}} />
              <Tooltip />
              <Bar dataKey="value" fill="#0088FE" barSize={25} />
            </BarChart>
          </ResponsiveContainer>

          <Alert severity="warning" sx={{ mt: 3 }}>
             <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.4 }}>
               {t('operational.setup.description')}: 150k {t('operational.setup.variations')}, {t('operational.setup.dailySetups')}: 10
             </Typography>
          </Alert>
        </Paper>
      </Box>

      {/* 3. Vertical Integration & Six Sigma (Flex Row) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Vertical Integration */}
        <Paper elevation={3} sx={{ p: 3, flex: 2, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('operational.verticalIntegration')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <TableContainer>
                <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell><strong>{t('operational.scenario')}</strong></TableCell>
                    <TableCell align="right"><strong>{t('operational.personnel')}</strong></TableCell>
                    <TableCell align="right"><strong>{t('operational.totalCost')} (M€)</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {integrationComparison.map((row, index) => (
                    <TableRow key={index} hover>
                        <TableCell>{row.scenario}</TableCell>
                        <TableCell align="right">{row.personnel}</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.total}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 2, p: 2, bgcolor: 'success.50', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                 <CheckCircle color="success" />
                 <Box>
                    <Typography variant="subtitle2" fontWeight="bold" color="success.dark">
                        {t('operational.integration.netSavings')}: {netSavings} M€/year
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {t('operational.integration.savingsDescription')}
                    </Typography>
                 </Box>
            </Box>
        </Paper>

        {/* Six Sigma */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('operational.sixSigma')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            


            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Paper elevation={0} sx={{ flex: 1, p: 1.5, bgcolor: 'error.50', textAlign: 'center', borderRadius: 2 }}>
                        <Typography variant="caption" color="text.secondary">{t('operational.sigma.current')}</Typography>
                        <Typography variant="h4" fontWeight="bold" color="error.main">{sigmaData.sigmaLevel}σ</Typography>
                    </Paper>
                    <Paper elevation={0} sx={{ flex: 1, p: 1.5, bgcolor: 'warning.50', textAlign: 'center', borderRadius: 2 }}>
                        <Typography variant="caption" color="text.secondary">{t('operational.sigma.industry')}</Typography>
                        <Typography variant="h4" fontWeight="bold" color="warning.main">{sigmaData.industryAverage}σ</Typography>
                    </Paper>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'grey.50', borderRadius: 1 }}>
                     <Typography variant="caption" color="text.secondary" display="block" align="center">
                        DPMO = {sigmaData.dpmo}
                     </Typography>
                </Box>
            </Box>
        </Paper>
      </Box>

      {/* 4. Inventory Optimization (Grid Cards) */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Inventory sx={{ mr: 1 }} /> {t('operational.inventoryOptimization')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, mb: 3 }}>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'error.50', borderRadius: 2, border: '1px solid', borderColor: 'error.100' }}>
            <Typography variant="body2" color="text.secondary">{t('operational.inventory.current')}</Typography>
            <Typography variant="h4" fontWeight="bold" color="error.dark">{inventoryOptimization.current}</Typography>
            <Typography variant="caption">{t('operational.inventory.units')}</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.100' }}>
            <Typography variant="body2" color="text.secondary">{t('operational.inventory.optimal')}</Typography>
            <Typography variant="h4" fontWeight="bold" color="success.dark">{inventoryOptimization.optimal}</Typography>
            <Typography variant="caption">{t('operational.inventory.units')}</Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, bgcolor: 'warning.50', borderRadius: 2, border: '1px solid', borderColor: 'warning.100' }}>
            <Typography variant="body2" color="text.secondary">{t('operational.inventory.excess')}</Typography>
            <Typography variant="h4" fontWeight="bold" color="warning.dark">{inventoryOptimization.excess}</Typography>
            <Typography variant="caption">{t('operational.inventory.units')}</Typography>
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'}, gap: 2, alignItems: 'center' }}>
            <Alert severity="error" sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold">
                    {t('operational.inventory.excessValue')}: {inventoryOptimization.totalExcessValue} M€
                </Typography>
                <Typography variant="caption">
                    {t('operational.inventory.releasableCash')}: {inventoryOptimization.releasableCash} M€
                </Typography>
            </Alert>
            <Box sx={{ flex: 1, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="caption" color="text.secondary">
                    {t('operational.inventory.newsvendorModel')} Calculation: Q* = 1,135 (Critical Ratio = 0.75)
                </Typography>
            </Box>
        </Box>
      </Paper>

      {/* 5. Sensilo ROI & Risk (Complex Grid) */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <ShowChart sx={{ mr: 1 }} /> {t('operational.sensiloROI')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 2, mb: 3 }}>
             {/* Key Stats */}
             <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                 <Typography variant="caption" color="text.secondary">{t('operational.sensilo.investment')}</Typography>
                 <Typography variant="h5" fontWeight="bold" color="error.main">{sensiloROI.investment} M€</Typography>
             </Paper>
             <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                 <Typography variant="caption" color="text.secondary">{t('operational.sensilo.annualBenefit')}</Typography>
                 <Typography variant="h5" fontWeight="bold" color="success.main">+{sensiloROI.annualBenefit} M€</Typography>
             </Paper>
             <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                 <Typography variant="caption" color="text.secondary">ROI</Typography>
                 <Typography variant="h5" fontWeight="bold" color="success.main">{sensiloROI.roi}%</Typography>
             </Paper>
             <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                 <Typography variant="caption" color="text.secondary">{t('operational.sensilo.payback')}</Typography>
                 <Typography variant="h5" fontWeight="bold" color="info.main">{sensiloROI.paybackPeriod} {t('operational.years')}</Typography>
             </Paper>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'}, gap: 4 }}>
            {/* Probability Alert */}
            <Box sx={{ flex: 1 }}>
                <Alert severity="warning" sx={{ mb: 2, height: 'fit-content' }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        {t('operational.sensilo.successProbability')}: {overallSuccessProbability}%
                    </Typography>
                    <Typography variant="caption">{t('operational.sensilo.riskNote')}</Typography>
                </Alert>
            </Box>
            
            {/* Factors */}
            <Box sx={{ flex: 1.5 }}>
                 <Typography variant="subtitle2" gutterBottom color="text.secondary">
                    {t('operational.sensilo.criticalFactors')}
                 </Typography>
                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {successFactors.map((factor, index) => (
                        <Box key={index}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="caption" fontWeight="bold">{factor.factor}</Typography>
                            <Typography variant="caption">{factor.probability}%</Typography>
                            </Box>
                            <LinearProgress
                            variant="determinate"
                            value={factor.probability}
                            sx={{ height: 6, borderRadius: 3 }}
                            color={factor.probability >= 85 ? 'success' : factor.probability >= 75 ? 'warning' : 'error'}
                            />
                        </Box>
                    ))}
                 </Box>
            </Box>
        </Box>
      </Paper>

      {/* 6. Performance Scorecard & Priorities */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Scorecard Table */}
        <Paper elevation={3} sx={{ flex: 1.5, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('operational.performanceScorecard')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer>
                <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell><strong>{t('operational.metric')}</strong></TableCell>
                    <TableCell align="center"><strong>{t('operational.current')}</strong></TableCell>
                    <TableCell align="center"><strong>{t('operational.target')}</strong></TableCell>
                    <TableCell align="center"><strong>{t('operational.priority.title')}</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {performanceMetrics.map((row, index) => (
                    <TableRow key={index} hover>
                        <TableCell sx={{ py: 1.5 }}>
                            {row.metric}
                            <Typography variant="caption" color="text.secondary" display="block">Gap: {row.gap}</Typography>
                        </TableCell>
                        <TableCell align="center">{row.current}</TableCell>
                        <TableCell align="center">{row.target}</TableCell>
                        <TableCell align="center">
                             <Chip label={row.priority} color={row.priorityColor} size="small" variant="outlined" />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Paper>

        {/* Strategic Priorities Grid */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('operational.strategicPriorities')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                {strategicPriorities.map((priority, index) => (
                <Paper key={index} elevation={0} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold" noWrap title={priority.priority}>
                            {index + 1}. {priority.priority}
                        </Typography>
                        <Chip label={priority.difficulty} color={priority.difficultyColor} size="small" sx={{ height: 20, fontSize: 10 }} />
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="caption" color="text.secondary" display="block">
                        NPV: <strong>{priority.npv} M€</strong>
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                        {t('operational.impact')}: {priority.impact}
                    </Typography>
                </Paper>
                ))}
            </Box>
        </Paper>
      </Box>

      {/* 7. Conclusion */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'info.light', color: 'info.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {t('operational.conclusion.title')}
        </Typography>
        <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body1" paragraph>
          <strong>{t('operational.conclusion.paradox')}:</strong> {t('operational.conclusion.paradoxText')}
        </Typography>
        <Typography variant="body2">
           <strong>{t('operational.conclusion.keyIssues')}:</strong>
           <ul>
            <li>{t('operational.conclusion.issue1')}</li>
            <li>{t('operational.conclusion.issue2')}</li>
            <li>{t('operational.conclusion.issue3')}</li>
            <li>{t('operational.conclusion.issue4')}</li>
           </ul>
        </Typography>
      </Paper>
    </Box>
  );
}

export default OperationalEfficiency;