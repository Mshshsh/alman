import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
  Box,
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
  TrendingDown,
  Assessment,
  Warning,
  CheckCircle,
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

function FinancialPerformance() {
  const { t } = useTranslation();

  // Altman Z-Score components
  const altmanData = [
    { name: 'X1', value: 0.274, weight: 6.56, score: 1.797 },
    { name: 'X2', value: 0.013, weight: 3.26, score: 0.042 },
    { name: 'X3', value: 0.0021, weight: 6.72, score: 0.014 },
    { name: 'X4', value: 1.001, weight: 1.05, score: 1.051 },
  ];

  const altmanZScore = 2.904;

  // DuPont Analysis
  const dupontData = {
    profitMargin: 1.61,
    assetTurnover: 0.82,
    financialLeverage: 2.0,
    roe: 2.64,
  };

  // Financial ratios
  const ratiosData = [
    { category: t('financial.liquidity'), name: t('financial.currentRatio'), value: 1.78, benchmark: 1.5, status: 'good' },
    { category: t('financial.liquidity'), name: t('financial.cashRatio'), value: 0.61, benchmark: 0.5, status: 'good' },
    { category: t('financial.efficiency'), name: t('financial.inventoryTurnover'), value: 2.52, benchmark: 5, status: 'bad' },
    { category: t('financial.leverage'), name: t('financial.debtToEquity'), value: 1.0, benchmark: 1.5, status: 'good' },
    { category: t('financial.leverage'), name: t('financial.debtToEBITDA'), value: 10.8, benchmark: 3, status: 'bad' },
  ];

  // Financial health score breakdown
  const healthScoreData = [
    { subject: t('financial.healthMetrics.liquidity'), A: 90, fullMark: 100 },
    { subject: t('financial.healthMetrics.profitability'), A: 30, fullMark: 100 },
    { subject: t('financial.healthMetrics.efficiency'), A: 50, fullMark: 100 },
    { subject: t('financial.healthMetrics.leverage'), A: 75, fullMark: 100 },
    { subject: t('financial.healthMetrics.cashFlow'), A: 40, fullMark: 100 },
  ];

  // Key financial data
  const keyMetrics = [
    { label: t('financial.totalAssets'), value: '379.8', unit: 'M€', trend: 'up' },
    { label: t('financial.equity'), value: '190', unit: 'M€', trend: 'up' },
    { label: t('financial.revenue'), value: '311.4', unit: 'M€', trend: 'neutral' },
    { label: t('financial.ebitda'), value: '17.5', unit: 'M€', trend: 'down' },
    { label: t('financial.netProfit'), value: '5', unit: 'M€', trend: 'down' },
    { label: t('financial.cash'), value: '81.7', unit: 'M€', trend: 'up' },
  ];

  // Strengths and weaknesses
  const strengths = [
    t('financial.strengths.liquidity'),
    t('financial.strengths.lowDebt'),
    t('financial.strengths.altmanScore'),
    t('financial.strengths.equityBase'),
  ];

  const weaknesses = [
    t('financial.weaknesses.lowProfitability'),
    t('financial.weaknesses.inventoryManagement'),
    t('financial.weaknesses.personnelCost'),
    t('financial.weaknesses.cashFlowGeneration'),
  ];

  const urgentActions = [
    t('financial.urgentActions.inventoryOptimization'),
    t('financial.urgentActions.personnelEfficiency'),
    t('financial.urgentActions.operationalMargin'),
  ];

  // Colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'success';
      case 'bad': return 'error';
      default: return 'warning';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp color="success" />;
      case 'down': return <TrendingDown color="error" />;
      default: return null;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.financialPerformance.title')}
      </Typography>

      {/* Bölüm 1: Sağlık Skoru */}
      <Box sx={{ mb: 3 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" color="primary" fontWeight={600}>
              {t('financial.healthScore')}
            </Typography>
            <Chip
              label={`6.5/10`}
              color="warning"
              size="medium"
              icon={<Assessment />}
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
          <LinearProgress
            variant="determinate"
            value={65}
            sx={{ height: 12, borderRadius: 6, mb: 2, backgroundColor: 'grey.200' }}
            color="warning"
          />
          <Typography variant="body2" color="text.secondary">
            {t('financial.healthScoreDescription')}
          </Typography>
        </Paper>
      </Box>

      {/* Bölüm 2: Anahtar Metrikler (CSS Grid Layout) */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 2, 
        mb: 3 
      }}>
        {keyMetrics.map((metric, index) => (
          <Paper key={index} elevation={2} sx={{ p: 2.5, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                {metric.label}
              </Typography>
              {getTrendIcon(metric.trend)}
            </Box>
            <Typography variant="h5" fontWeight="bold">
              {metric.value} <Typography component="span" variant="body1" color="text.secondary">{metric.unit}</Typography>
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Bölüm 3: Derin Analiz (Altman & DuPont) - Yan Yana Flexbox */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3, 
        mb: 3,
        alignItems: 'stretch'
      }}>
        {/* Altman Z-Score */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
              {t('financial.altmanZScore')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="success.main">
                {altmanZScore.toFixed(3)}
              </Typography>
              <Chip
                label={t('financial.safeZone')}
                color="success"
                sx={{ mt: 1 }}
                icon={<CheckCircle />}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {t('financial.altmanInterpretation')}
              </Typography>
            </Box>
            
            <Box sx={{ flexGrow: 1, minHeight: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={altmanData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#00C49F" name={t('financial.score')} />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
          </Paper>
        </Box>

        {/* DuPont Analysis */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
              {t('financial.dupontAnalysis')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                ROE Formula
              </Typography>
              <Typography variant="subtitle2" align="center" sx={{ fontStyle: 'italic', mb: 1 }}>
                Margin × Asset Turnover × Leverage
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="error.main" align="center">
                {dupontData.roe}%
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                   <Typography variant="body2" color="text.secondary">{t('financial.profitMargin')}</Typography>
                   <Typography variant="body2" fontWeight="bold">{dupontData.profitMargin}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={dupontData.profitMargin * 10} sx={{ height: 8, borderRadius: 5 }} color="error" />
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                   <Typography variant="body2" color="text.secondary">{t('financial.assetTurnover')}</Typography>
                   <Typography variant="body2" fontWeight="bold">{dupontData.assetTurnover}x</Typography>
                </Box>
                <LinearProgress variant="determinate" value={dupontData.assetTurnover * 50} sx={{ height: 8, borderRadius: 5 }} color="warning" />
              </Box>

              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                   <Typography variant="body2" color="text.secondary">{t('financial.financialLeverage')}</Typography>
                   <Typography variant="body2" fontWeight="bold">{dupontData.financialLeverage}x</Typography>
                </Box>
                <LinearProgress variant="determinate" value={dupontData.financialLeverage * 50} sx={{ height: 8, borderRadius: 5 }} color="success" />
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Bölüm 4: Oranlar Tablosu */}
      <Box sx={{ mb: 3,mt: 10 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
            {t('financial.keyRatios')}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>{t('financial.category')}</strong></TableCell>
                  <TableCell><strong>{t('financial.ratio')}</strong></TableCell>
                  <TableCell align="right"><strong>{t('financial.value')}</strong></TableCell>
                  <TableCell align="right"><strong>{t('financial.benchmark')}</strong></TableCell>
                  <TableCell align="center"><strong>{t('financial.status')}</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ratiosData.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.value.toFixed(2)}</TableCell>
                    <TableCell align="right">{row.benchmark}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={t(`financial.${row.status}`)}
                        color={getStatusColor(row.status)}
                        size="small"
                        sx={{ minWidth: 80 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Bölüm 5: Sağlık Dağılımı (Radar) ve SWOT - Yan Yana */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3, 
        mb: 3 
      }}>
        {/* Radar Chart */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
              {t('financial.healthBreakdown')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={healthScoreData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name={t('financial.score')}
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Strengths & Weaknesses (Flex Column) */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          
          {/* Strengths */}
          <Paper elevation={2} sx={{ p: 2.5, bgcolor: '#edf7ed', borderRadius: 2, flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: 'success.dark', fontWeight: 600 }}>
              <CheckCircle sx={{ mr: 1 }} /> {t('financial.strengths.title')}
            </Typography>
            <Divider sx={{ mb: 1.5, borderColor: 'success.light' }} />
            {strengths.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 0.5, display: 'flex', alignItems: 'center' }}>
                • {item}
              </Typography>
            ))}
          </Paper>

          {/* Weaknesses */}
          <Paper elevation={2} sx={{ p: 2.5, bgcolor: '#fdeded', borderRadius: 2, flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: 'error.dark', fontWeight: 600 }}>
              <TrendingDown sx={{ mr: 1 }} /> {t('financial.weaknesses.title')}
            </Typography>
            <Divider sx={{ mb: 1.5, borderColor: 'error.light' }} />
            {weaknesses.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                • {item}
              </Typography>
            ))}
          </Paper>

        </Box>
      </Box>

      {/* Bölüm 6: Aksiyonlar ve Kaynaklar */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3,mt:10 }}>
        
        {/* Urgent Actions */}
        <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'warning.main', borderRadius: 2, overflow: 'hidden' }}>
             <Alert severity="warning" icon={<Warning fontSize="inherit" />} sx={{ borderRadius: 0 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                {t('financial.urgentActions.title')}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {urgentActions.map((item, index) => (
                    <Typography component="li" key={index} variant="body2" sx={{ mt: 0.5 }}>
                        {item}
                    </Typography>
                    ))}
                </Box>
            </Alert>
        </Paper>

        {/* Sources */}
        <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 2 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight={600} color="text.secondary">
            {t('financial.sources')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="body2">
              • <a href="https://www.unternehmensregister.de" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>www.unternehmensregister.de</a>
            </Typography>
            <Typography variant="body2">
              • <a href="https://www.northdata.de" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>www.northdata.de</a>
            </Typography>
            <Typography variant="body2">
              • JUMO GmbH & Co. KG {t('financial.officialWebsite')}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default FinancialPerformance;