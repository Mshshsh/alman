import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  Alert,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Warning,
  CheckCircle,
  School,
  People,
  Euro,
  Assessment,
  Lightbulb,
  Timeline,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  Line,
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
  ComposedChart,
  Cell,
} from 'recharts';

function HROrganization() {
  const { t } = useTranslation();

  // Key metrics
  const keyMetrics = [
    { label: t('hr.totalEmployees'), value: '2,530', icon: <People />, color: 'primary' },
    { label: t('hr.apprentices'), value: '93', icon: <School />, color: 'success' },
    { label: t('hr.turnoverRate'), value: '4%', icon: <TrendingDown />, color: 'success' },
    { label: t('hr.avgTenure'), value: '15', unit: t('hr.years'), icon: <CheckCircle />, color: 'info' },
    { label: t('hr.revenuePerEmployee'), value: '123.2k€', icon: <Euro />, color: 'warning' },
    { label: t('hr.personnelCostRatio'), value: '46%', icon: <Warning />, color: 'error' },
  ];

  // HR Performance Score
  const hrScoreData = [
    { subject: t('hr.scoreCategories.loyalty'), A: 92, fullMark: 100 },
    { subject: t('hr.scoreCategories.development'), A: 85, fullMark: 100 },
    { subject: t('hr.scoreCategories.efficiency'), A: 35, fullMark: 100 },
    { subject: t('hr.scoreCategories.futureReadiness'), A: 60, fullMark: 100 },
    { subject: t('hr.scoreCategories.orgHealth'), A: 75, fullMark: 100 },
  ];

  // ELTV Analysis
  const eltvData = [
    { year: 1, contribution: 1.984, cost: 56.672, cumulative: -54.688 },
    { year: 3, contribution: 5.952, cost: 170.016, cumulative: -164.064 },
    { year: 5, contribution: 9.920, cost: 283.360, cumulative: -273.440 },
    { year: 10, contribution: 19.840, cost: 566.720, cumulative: -546.880 },
    { year: 15, contribution: 29.760, cost: 850.080, cumulative: -820.320 },
  ];

  // Productivity scenarios
  const scenarioData = [
    { name: t('hr.scenarios.current'), revenuePerEmployee: 123.2, profitMargin: 1.61, additionalProfit: 0 },
    { name: t('hr.scenarios.pessimistic'), revenuePerEmployee: 129.4, profitMargin: 2.11, additionalProfit: 1.6 },
    { name: t('hr.scenarios.realistic'), revenuePerEmployee: 135.5, profitMargin: 2.61, additionalProfit: 3.1 },
    { name: t('hr.scenarios.optimistic'), revenuePerEmployee: 141.7, profitMargin: 3.11, additionalProfit: 4.7 },
    { name: t('hr.scenarios.benchmark'), revenuePerEmployee: 166.3, profitMargin: 5.11, additionalProfit: 10.9 },
  ];

  // Apprentice system ROI
  const apprenticeData = [
    { category: t('hr.apprentice.externalCost'), value: 3.25 },
    { category: t('hr.apprentice.trainingCost'), value: -2.79 },
    { category: t('hr.apprentice.netSaving'), value: 0.46 },
  ];

  // Strategic priorities
  const priorities = [
    {
      title: t('hr.priorities.productivity'),
      description: t('hr.priorities.productivityDesc'),
      impact: '+12.4 M€',
      difficulty: t('hr.difficulty.medium'),
      difficultyColor: 'warning'
    },
    {
      title: t('hr.priorities.talentDevelopment'),
      impact: t('hr.priorities.fasterFilling'),
      difficulty: t('hr.difficulty.low'),
      difficultyColor: 'success'
    },
    {
      title: t('hr.priorities.ageStructure'),
      impact: t('hr.priorities.reduceKLR'),
      difficulty: t('hr.difficulty.high'),
      difficultyColor: 'error'
    },
    {
      title: t('hr.priorities.flexibleWork'),
      impact: t('hr.priorities.retentionIncrease'),
      difficulty: t('hr.difficulty.medium'),
      difficultyColor: 'warning'
    },
    {
      title: t('hr.priorities.costOptimization'),
      description: t('hr.priorities.costOptimizationDesc'),
      impact: '+8 M€',
      difficulty: t('hr.difficulty.medium'),
      difficultyColor: 'warning'
    },
    {
      title: t('hr.priorities.automation'),
      description: t('hr.priorities.automationDesc'),
      impact: '+6 M€',
      difficulty: t('hr.difficulty.low'),
      difficultyColor: 'success'
    },
  ];

  // Critical findings
  const criticalFindings = [
    { type: 'danger', text: t('hr.findings.negativeELTV') },
    { type: 'danger', text: t('hr.findings.highPersonnelCost') },
    { type: 'warning', text: t('hr.findings.lowTCI') },
    { type: 'warning', text: t('hr.findings.knowledgeLossRisk') },
  ];

  // Strengths and weaknesses
  const strengths = [
    t('hr.strengths.lowTurnover'),
    t('hr.strengths.highTenure'),
    t('hr.strengths.apprenticeSystem'),
    t('hr.strengths.awardedTraining'),
  ];

  const weaknesses = [
    t('hr.weaknesses.lowProductivity'),
    t('hr.weaknesses.highCostRatio'),
    t('hr.weaknesses.negativeROI'),
    t('hr.weaknesses.agingWorkforce'),
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.hrOrganization.title')}
      </Typography>

      {/* 1. Üst Bölüm: Skor ve Uyarılar */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        {/* HR Score */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" color="primary" fontWeight={600}>
              {t('hr.performanceScore')}
            </Typography>
            <Chip
              label="65.2/100"
              color="warning"
              size="medium"
              icon={<Assessment />}
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
          <LinearProgress
            variant="determinate"
            value={65.2}
            sx={{ height: 12, borderRadius: 6, mb: 2, bgcolor: 'grey.200' }}
            color="warning"
          />
          <Typography variant="body2" color="text.secondary">
            {t('hr.scoreDescription')}
          </Typography>
        </Paper>

        {/* Critical Findings */}
        <Paper elevation={0} sx={{ flex: 1, border: '1px solid', borderColor: 'error.main', borderRadius: 2, overflow: 'hidden' }}>
             <Alert severity="error" icon={<Warning fontSize="inherit" />} sx={{ height: '100%', borderRadius: 0 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                {t('hr.criticalFindings')}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {criticalFindings.map((finding, index) => (
                    <Typography component="li" key={index} variant="body2" sx={{ mt: 0.5 }}>
                        {finding.text}
                    </Typography>
                    ))}
                </Box>
            </Alert>
        </Paper>
      </Box>

      {/* 2. Anahtar Metrikler (CSS Grid) */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: 2, 
        mb: 3 
      }}>
        {keyMetrics.map((metric, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-3px)' }
            }}
          >
            <Box sx={{ 
                color: `${metric.color}.main`, 
                bgcolor: `${metric.color}.light`, 
                p: 1, 
                borderRadius: '50%', 
                display: 'flex',
                opacity: 0.9 
            }}>
              {metric.icon}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                {metric.label}
              </Typography>
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 0.5 }}>
                {metric.value} <Typography component="span" variant="caption" color="text.secondary">{metric.unit || ''}</Typography>
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>

      {/* 3. Detaylı Analiz Grafikleri (Radar & ELTV) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3, alignItems: 'stretch' }}>
        
        {/* Radar Chart */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, minWidth: 0, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
            {t('hr.scoreBreakdown')}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={hrScoreData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name={t('hr.score')}
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Tooltip />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Paper>

        {/* ELTV Analysis */}
        <Paper elevation={3} sx={{ p: 3, flex: 1.5, minWidth: 0, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
            {t('hr.eltvAnalysis')}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          
          <Box sx={{ mb: 2, p: 2, bgcolor: 'error.50', borderRadius: 1, border: '1px dashed', borderColor: 'error.main' }}>
             <Typography variant="subtitle1" color="error.main" fontWeight="bold">
                {t('hr.eltvResult')}: -519,000€
             </Typography>
             <Typography variant="body2" color="text.secondary">
                {t('hr.eltvDescription')}
             </Typography>
          </Box>

          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={eltvData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="contribution" fill="#00C49F" name={t('hr.contribution')} barSize={20} />
              <Bar dataKey="cost" fill="#FF8042" name={t('hr.cost')} barSize={20} />
              <Line type="monotone" dataKey="cumulative" stroke="#8884d8" strokeWidth={3} dot={{r:4}} name={t('hr.cumulative')} />
            </ComposedChart>
          </ResponsiveContainer>
        </Paper>
      </Box>

      {/* 4. Verimlilik ve ROI */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Productivity Scenarios */}
        <Paper elevation={3} sx={{ p: 3, flex: 1.5, minWidth: 0, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
            {t('hr.productivityScenarios')}
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scenarioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="revenuePerEmployee" fill="#0088FE" name={t('hr.revenuePerEmployee')} />
              <Bar yAxisId="right" dataKey="profitMargin" fill="#00C49F" name={t('hr.profitMargin')} />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        {/* Apprentice ROI */}
        <Paper elevation={3} sx={{ p: 3, flex: 1, minWidth: 0, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600}>
                {t('hr.apprenticeROI')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'warning.50', borderRadius: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" color="warning.dark">
                ROI: -63.4%
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2, display: 'block' }}>
                {t('hr.apprenticeROIDescription')}
                </Typography>
            </Box>
            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={apprenticeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={100} tick={{fontSize: 11}} />
                <Tooltip />
                <Bar dataKey="value" barSize={30}>
                    {apprenticeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#00C49F' : '#FF8042'} />
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Paper>
      </Box>

      {/* 5. SWOT Analizi */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={2} sx={{ flex: 1, bgcolor: '#edf7ed', p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: 'success.dark', fontWeight: 600 }}>
            <CheckCircle sx={{ mr: 1 }} /> {t('hr.strengths.title')}
          </Typography>
          <Divider sx={{ mb: 2, borderColor: 'success.light' }} />
          {strengths.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
              • <span style={{marginLeft: 8}}>{item}</span>
            </Typography>
          ))}
        </Paper>

        <Paper elevation={2} sx={{ flex: 1, bgcolor: '#fdeded', p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: 'error.dark', fontWeight: 600 }}>
            <TrendingDown sx={{ mr: 1 }} /> {t('hr.weaknesses.title')}
          </Typography>
          <Divider sx={{ mb: 2, borderColor: 'error.light' }} />
          {weaknesses.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'flex-start' }}>
              • <span style={{marginLeft: 8}}>{item}</span>
            </Typography>
          ))}
        </Paper>
      </Box>

      {/* 6. Stratejik Öncelikler (2 Kolonlu Grid) */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
          <Lightbulb sx={{ mr: 1 }} /> {t('hr.strategicPriorities')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {priorities.map((priority, index) => (
            <Box key={index} sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                    {index + 1}. {priority.title}
                </Typography>
                <Chip
                    label={priority.difficulty}
                    color={priority.difficultyColor}
                    size="small"
                    variant="outlined"
                />
                </Box>
                {priority.description && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, minHeight: 40 }}>
                    {priority.description}
                </Typography>
                )}
                <Divider sx={{ my: 1 }} />
                <Typography variant="caption" fontWeight="bold" color="text.primary">
                {t('hr.expectedImpact')}: <span style={{ color: '#1976d2' }}>{priority.impact}</span>
                </Typography>
            </Box>
            ))}
        </Box>
      </Paper>

      {/* 7. Aksiyon Planı ve Hedefler */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Timeline sx={{ mr: 1 }} /> {t('hr.actionPlan')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            {/* Sol: Metrikler ve Hedefler */}
            <Box sx={{ flex: 1 }}>
                 {/* Monthly Metrics */}
                <Box sx={{ mb: 2, p: 2, bgcolor: 'info.50', borderRadius: 2, borderLeft: '4px solid', borderColor: 'info.main' }}>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="info.dark">
                    {t('hr.monthlyMetrics')}:
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        <li><Typography variant="body2">{t('hr.metrics.valueAdded')}: <strong>130,000€</strong> ({t('hr.current')}: ~1,984€)</Typography></li>
                        <li><Typography variant="body2">{t('hr.metrics.internalDevelopment')}: <strong>35%</strong> ({t('hr.current')}: ~30%)</Typography></li>
                        <li><Typography variant="body2">{t('hr.metrics.fillTime')}: <strong>60 {t('hr.days')}</strong> ({t('hr.current')}: 90+)</Typography></li>
                    </Box>
                </Box>

                {/* Mathematical Targets */}
                <Box sx={{ p: 2, bgcolor: 'warning.50', borderRadius: 2, borderLeft: '4px solid', borderColor: 'warning.main' }}>
                    <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="warning.dark">
                    {t('hr.mathematicalTargets')}:
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        <li><Typography variant="body2">{t('hr.targets.costRatio')}: 46% → <strong>42%</strong></Typography></li>
                        <li><Typography variant="body2">{t('hr.targets.eltv')}: -519k€ → <strong>-200k€</strong></Typography></li>
                        <li><Typography variant="body2">{t('hr.targets.revenuePerEmployee')}: 123.2k€ → <strong>135k€</strong></Typography></li>
                    </Box>
                </Box>
            </Box>

            {/* Sağ: Timeline */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                    { period: t('hr.months.m1_3'), action: t('hr.actions.diagnostics') },
                    { period: t('hr.months.m4_6'), action: t('hr.actions.pilotAutomation') + ' & ' + t('hr.actions.apprenticeReform') },
                    { period: t('hr.months.m7_9'), action: t('hr.actions.scaleAutomation') + ' & ' + t('hr.actions.performanceSystem') },
                    { period: t('hr.months.m10_12'), action: t('hr.actions.continuousImprovement') },
                ].map((item, index) => (
                    <Paper key={index} elevation={0} sx={{ p: 1.5, border: '1px solid', borderColor: 'grey.300', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip label={item.period} color="primary" size="small" sx={{ minWidth: 80, fontWeight: 'bold' }} />
                    <Typography variant="body2">{item.action}</Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
      </Paper>

      {/* 8. Temel İndeksler (TCI ve KLR) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, mb: 3 }}>
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, textAlign: 'center', borderTop: '4px solid', borderColor: 'warning.main' }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {t('hr.tci')}
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="warning.main">
            0.67
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {t('hr.tciDescription')}
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2, textAlign: 'center', borderTop: '4px solid', borderColor: 'error.main' }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {t('hr.klr')}
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="error.main">
            1.6
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {t('hr.klrDescription')}
          </Typography>
        </Paper>
      </Box>

      {/* 9. Sonuç */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: 'info.light', color: 'info.contrastText', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {t('hr.conclusion')}
        </Typography>
        <Divider sx={{ mb: 2, borderColor: 'rgba(0,0,0,0.1)' }} />
        <Typography variant="body1" paragraph>
          <strong>{t('hr.conclusionStrong')}:</strong> {t('hr.conclusionStrengthText')}
        </Typography>
        <Typography variant="body1">
          <strong>{t('hr.conclusionWeak')}:</strong> {t('hr.conclusionWeaknessText')}
        </Typography>
      </Paper>
    </Box>
  );
}

export default HROrganization;