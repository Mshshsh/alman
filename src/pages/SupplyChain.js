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
  LinearProgress,
} from '@mui/material';
import {
  Inventory,
  LocalShipping,
  Warning,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AccountBalanceWallet,
  ShowChart,
  CompareArrows,
  Security,
  Map,
  Factory,
  AssignmentTurnedIn
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
  LineChart,
  Line,
} from 'recharts';

function SupplyChain() {
  const { t } = useTranslation();

  // --- BÖLÜM 1: STOK YÖNETİMİ VERİLERİ ---
  const stockCostData = {
    avgStockValue: 123.5, // M€
    holdingCostRate: 0.25, // %25
    annualCost: 30.875, // M€
  };

  const eoqComparison = [
    { name: t('supplyChain.current'), quantity: 4.94, fill: '#8884d8' }, // Milyon birim
    { name: t('supplyChain.eoq'), quantity: 0.45, fill: '#82ca9d' },    // Milyon birim
  ];

  const eoqReduction = 90.9; // %

  // Real Options Verileri
  const realOptionsData = [
    { name: t('supplyChain.holdingCost'), value: 30.9, fill: '#FF8042' },
    { name: t('supplyChain.optionValue'), value: 69.3, fill: '#00C49F' },
  ];

  // --- BÖLÜM 2: TEDARİKÇİ RİSK YÖNETİMİ VERİLERİ ---
  const supplierRiskData = [
    { type: t('supplyChain.risk.chips'), share: 0.30, alt: 0.20, critical: 5, scr: 1.20 },
    { type: t('supplyChain.risk.metals'), share: 0.20, alt: 0.40, critical: 4, scr: 0.48 },
    { type: t('supplyChain.risk.raw'), share: 0.50, alt: 0.80, critical: 2, scr: 0.20 },
  ];

  const totalSCR = 1.88;

  const sourcingComparison = [
    { name: t('supplyChain.source.current'), cost: 30.875 },
    { name: t('supplyChain.source.dual'), cost: 22.937 },
  ];
  const sourcingSavings = 7.938; // M€

  // --- BÖLÜM 3: LOJİSTİK AĞ OPTİMİZASYONU VERİLERİ ---
  const logisticsData = [
    { mode: t('supplyChain.logistics.central'), cost: 40.217, time: '24-48h' },
    { mode: t('supplyChain.logistics.distributed'), cost: 42.655, time: '12-24h' },
  ];
  
  const logisticsROI = 539; // %

  const transportModeData = {
    criticalDays: 6.57,
    airCost: 8,
    seaCost: 0.8,
    valuePerM3: 5000,
  };

  // --- BÖLÜM 4: DAYANIKLILIK ENDEKSİ VERİLERİ ---
  const rciScore = 0.322;
  const scorecardData = [
    { metric: t('supplyChain.metrics.turnover'), current: '1.8x', benchmark: '5.0x', score: 36, weight: '25%' },
    { metric: t('supplyChain.metrics.delivery'), current: '99.5%', benchmark: '98%', score: 100, weight: '20%' },
    { metric: t('supplyChain.metrics.scr'), current: '1.88', benchmark: '1.50', score: 60, weight: '20%' },
    { metric: t('supplyChain.metrics.logisticsCost'), current: '9%', benchmark: '7%', score: 78, weight: '15%' },
    { metric: t('supplyChain.metrics.rci'), current: '0.322', benchmark: '0.50', score: 100, weight: '20%' },
  ];
  const overallScore = 72.7;

  // --- BÖLÜM 5: SENARYOLAR VE STRATEJİ ---
  const scenarios = [
    { name: t('supplyChain.scenarios.current'), stock: 123.5, turn: '1.8x', cost: 30.9, risk: t('supplyChain.risk.veryHigh'), impact: 'Baseline' },
    { name: t('supplyChain.scenarios.optimized'), stock: 61.8, turn: '3.6x', cost: 15.4, risk: t('supplyChain.risk.high'), impact: '+15.5 M€' },
    { name: t('supplyChain.scenarios.aggressive'), stock: 24.7, turn: '9.0x', cost: 6.2, risk: t('supplyChain.risk.medium'), impact: '+24.7 M€ (High Risk)' },
  ];

  const strategicRecommendations = [
    { action: t('supplyChain.rec.dualSource'), impact: '-7.5 M€ cost', difficulty: t('supplyChain.difficulty.high'), priority: 'YÜKSEK', color: 'error' },
    { action: t('supplyChain.rec.stockOpt'), impact: '+15.5 M€ profit', difficulty: t('supplyChain.difficulty.medium'), priority: 'KRİTİK', color: 'error' },
    { action: t('supplyChain.rec.distributed'), impact: '-2.4 M€ cost', difficulty: t('supplyChain.difficulty.high'), priority: 'ORTA', color: 'warning' },
    { action: t('supplyChain.rec.logistics'), impact: '+3% efficiency', difficulty: t('supplyChain.difficulty.low'), priority: 'DÜŞÜK', color: 'success' },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.supplyChain.title')}
      </Typography>

      {/* 1. Overall Performance Score */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6" color="primary" fontWeight={600}>
                    {t('supplyChain.overallPerformance')}
                </Typography>
                <Chip label={`${overallScore}/100`} color="info" size="medium" icon={<ShowChart />} sx={{ fontWeight: 'bold' }} />
            </Box>
            <LinearProgress
                variant="determinate"
                value={overallScore}
                sx={{ height: 12, borderRadius: 6, mb: 1.5, bgcolor: 'grey.200' }}
                color={overallScore > 70 ? "success" : "warning"}
            />
            <Typography variant="body2" color="text.secondary">
                {t('supplyChain.scoreDesc')}
            </Typography>
        </Paper>
        
        {/* Quick Stats */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-around', bgcolor: 'primary.50' }}>
             <Box sx={{ textAlign: 'center' }}>
                 <Typography variant="caption" color="text.secondary">{t('supplyChain.metrics.rci')}</Typography>
                 <Typography variant="h4" fontWeight="bold" color="primary.main">{rciScore}</Typography>
             </Box>
             <Divider orientation="vertical" flexItem />
             <Box sx={{ textAlign: 'center' }}>
                 <Typography variant="caption" color="text.secondary">{t('supplyChain.metrics.scr')}</Typography>
                 <Typography variant="h4" fontWeight="bold" color="warning.main">{totalSCR}</Typography>
             </Box>
        </Paper>
      </Box>

      {/* 2. Stock Management Analysis */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Inventory sx={{ mr: 1 }} /> {t('supplyChain.stockManagementAnalysis')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

[Image of Economic Order Quantity EOQ graph]


        {/* Top Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2, mb: 3 }}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'error.50', borderRadius: 2, border: '1px solid', borderColor: 'error.100' }}>
                <Typography variant="body2" color="text.secondary">{t('supplyChain.annualHoldingCost')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="error.main">{stockCostData.annualCost} M€</Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>{t('supplyChain.inventoryValue')}: {stockCostData.avgStockValue} M€</Typography>
            </Paper>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.100' }}>
                <Typography variant="body2" color="text.secondary">{t('supplyChain.eoqPotential')}</Typography>
                <Typography variant="h4" fontWeight="bold" color="success.main">{eoqReduction}% {t('supplyChain.reduction')}</Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>4.94M → 0.45M {t('supplyChain.units')}</Typography>
            </Paper>
        </Box>

        {/* Charts Row */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* EOQ Chart */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" gutterBottom align="center" fontWeight="bold">{t('supplyChain.unitComparison')}</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={eoqComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity" name={t('supplyChain.unitsMillion')} barSize={40}>
                  {eoqComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Real Options Chart */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" gutterBottom align="center" fontWeight="bold">{t('supplyChain.strategicBufferValue')}</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={realOptionsData}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />
                 <Bar dataKey="value" name="M€" barSize={40}>
                   {realOptionsData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.fill} />
                   ))}
                 </Bar>
              </BarChart>
            </ResponsiveContainer>
            <Alert severity="success" sx={{ mt: 1, py: 0 }}>
                <Typography variant="caption" fontWeight="bold">
                {t('supplyChain.optionValueResult')}: 69.3 M€ ({t('supplyChain.costMultiplier')}: 2.24x)
                </Typography>
            </Alert>
          </Box>
        </Box>
      </Paper>

      {/* 3. Supplier Risk Analysis */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Security sx={{ mr: 1 }} /> {t('supplyChain.supplierRiskAnalysis')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        

[Image of supply chain risk management matrix]


        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
          {/* Table */}
          <Box sx={{ flex: 1.5 }}>
            <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: 'grey.100' }}>
                    <TableCell><strong>{t('supplyChain.type')}</strong></TableCell>
                    <TableCell align="center"><strong>{t('supplyChain.share')} (w)</strong></TableCell>
                    <TableCell align="center"><strong>{t('supplyChain.criticality')} (G)</strong></TableCell>
                    <TableCell align="center"><strong>SCR</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {supplierRiskData.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{row.type}</TableCell>
                      <TableCell align="center">{row.share}</TableCell>
                      <TableCell align="center">{row.critical}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 'bold' }}>{row.scr}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ bgcolor: 'warning.50' }}>
                    <TableCell colSpan={3} align="right"><strong>{t('supplyChain.totalSCR')}</strong></TableCell>
                    <TableCell align="center"><strong>{totalSCR}</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Risk Summary */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
             <Alert severity="warning">
                <Typography variant="subtitle2" fontWeight="bold">JUMO SCR: {totalSCR} → {t('supplyChain.risk.mediumHigh')}</Typography>
             </Alert>
             <Paper elevation={0} sx={{ p: 2, bgcolor: 'success.50', borderRadius: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="subtitle2" color="success.dark" gutterBottom>{t('supplyChain.dualSourcingSavings')}</Typography>
                <Typography variant="h4" color="success.main" fontWeight="bold">
                {sourcingSavings} M€/yıl
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    {t('supplyChain.newTotalCost')}: 22.9 M€ (%25.7 {t('supplyChain.decrease')})
                </Typography>
             </Paper>
          </Box>
        </Box>
      </Paper>

      {/* 4. Logistics Optimization */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
         <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalShipping sx={{ mr: 1 }} /> {t('supplyChain.logisticsOptimization')}
         </Typography>
         <Divider sx={{ mb: 3 }} />
         

         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            {/* Chart */}
            <Box sx={{ flex: 1.5, minHeight: 250 }}>
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={logisticsData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="mode" type="category" width={100} tick={{fontSize: 12}} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cost" fill="#8884d8" name={t('supplyChain.costMEur')} barSize={30} />
                  </BarChart>
               </ResponsiveContainer>
            </Box>

            {/* Metrics */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
               <Paper elevation={0} sx={{ p: 2, bgcolor: 'info.main', color: 'white', borderRadius: 2 }}>
                 <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>{t('supplyChain.roi')}</Typography>
                 <Typography variant="h3" fontWeight="bold">{logisticsROI}%</Typography>
                 <Typography variant="caption" sx={{ opacity: 0.9 }}>{t('supplyChain.fasterDelivery')}</Typography>
               </Paper>
               
               <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Map sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="subtitle2" fontWeight="bold">{t('supplyChain.airVsSea')}</Typography>
                 </Box>
                 <Typography variant="body2">{t('supplyChain.criticalValue')}: <strong>{transportModeData.criticalDays} {t('supplyChain.days')}</strong></Typography>
                 <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 1 }}>
                    {t('supplyChain.airReasoning')}
                 </Typography>
               </Paper>
            </Box>
         </Box>
      </Paper>

      {/* 5. Resilience Scorecard */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <AssignmentTurnedIn sx={{ mr: 1 }} /> {t('supplyChain.resilienceScorecard')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3, p: 2, bgcolor: 'success.50', borderRadius: 2, borderLeft: '4px solid', borderColor: 'success.main' }}>
           <Typography variant="subtitle1" fontWeight="bold" color="success.dark">
             RCI (Esneklik Maliyet İndeksi): {rciScore}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             RCI &lt; 1 → {t('supplyChain.rciEfficient')} (1€ yatırım = 3.1€ koruma)
           </Typography>
        </Box>

        <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell><strong>{t('supplyChain.metric')}</strong></TableCell>
                <TableCell align="center"><strong>{t('supplyChain.current')}</strong></TableCell>
                <TableCell align="center"><strong>{t('supplyChain.sector')}</strong></TableCell>
                <TableCell align="center"><strong>{t('supplyChain.score')}</strong></TableCell>
                <TableCell align="center"><strong>{t('supplyChain.weight')}</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scorecardData.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>{row.metric}</TableCell>
                  <TableCell align="center">{row.current}</TableCell>
                  <TableCell align="center">{row.benchmark}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                       <LinearProgress 
                          variant="determinate" 
                          value={row.score} 
                          sx={{ width: 60, height: 6, borderRadius: 3 }} 
                          color={row.score < 50 ? 'error' : row.score < 80 ? 'warning' : 'success'}
                       />
                       <Typography variant="caption" fontWeight="bold">{row.score}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{row.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 6. Strategic Scenarios & Recommendations */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <CompareArrows sx={{ mr: 1 }} /> {t('supplyChain.strategicScenarios')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <TableContainer sx={{ mb: 4, borderRadius: 2, border: '1px solid #e0e0e0' }}>
           <Table>
             <TableHead>
               <TableRow sx={{ bgcolor: 'grey.100' }}>
                 <TableCell><strong>{t('supplyChain.scenario')}</strong></TableCell>
                 <TableCell align="right"><strong>{t('supplyChain.stockLevel')}</strong></TableCell>
                 <TableCell align="right"><strong>{t('supplyChain.turnover')}</strong></TableCell>
                 <TableCell align="right"><strong>{t('supplyChain.cost')}</strong></TableCell>
                 <TableCell><strong>{t('supplyChain.netImpact')}</strong></TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {scenarios.map((row, index) => (
                 <TableRow key={index} sx={index === 1 ? { bgcolor: 'success.50', '& td': { fontWeight: 'bold' } } : {}}>
                   <TableCell>{row.name}</TableCell>
                   <TableCell align="right">{row.stock} M€</TableCell>
                   <TableCell align="right">{row.turn}</TableCell>
                   <TableCell align="right">{row.cost} M€</TableCell>
                   <TableCell>{row.impact}</TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
        </TableContainer>

        <Typography variant="subtitle1" gutterBottom fontWeight="bold" sx={{ mt: 2 }}>
          {t('supplyChain.recommendationMatrix')}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
           {strategicRecommendations.map((rec, index) => (
             <Paper key={index} elevation={0} sx={{ p: 2, borderLeft: `6px solid`, borderColor: `${rec.color}.main`, bgcolor: 'background.paper', border: '1px solid #e0e0e0', borderRadius: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold" color={`${rec.color}.dark`}>{rec.priority}</Typography>
                    <Chip label={rec.difficulty} size="small" variant="outlined" />
                </Box>
                <Typography variant="body1" fontWeight={500}>{rec.action}</Typography>
                <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>{rec.impact}</Typography>
             </Paper>
           ))}
        </Box>
      </Paper>

      {/* 7. Conclusion */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'info.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
           {t('supplyChain.conclusion.title')}
        </Typography>
        <Divider sx={{ bgcolor: 'white', mb: 2, opacity: 0.3 }} />
        <Typography variant="body1" paragraph>
           <strong>{t('supplyChain.conclusion.paradox')}:</strong> {t('supplyChain.conclusion.paradoxText')}
        </Typography>
        <Typography variant="body1">
           <strong>{t('supplyChain.conclusion.recommendation')}:</strong> {t('supplyChain.conclusion.hybridModel')}
        </Typography>
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
             <li><Typography variant="body2">{t('supplyChain.conclusion.point1')}</Typography></li>
             <li><Typography variant="body2">{t('supplyChain.conclusion.point2')}</Typography></li>
             <li><Typography variant="body2">{t('supplyChain.conclusion.point3')}</Typography></li>
        </Box>
      </Paper>

    </Box>
  );
}

export default SupplyChain;