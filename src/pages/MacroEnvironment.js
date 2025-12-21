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
  Public,
  TrendingUp,
  Warning,
  Groups,
  Nature,
  Speed,
  Business,
  Flag,
  Gavel,
  Science,
  ShowChart,
  Radar as RadarIcon
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
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine,
  Cell,
} from 'recharts';

function MacroEnvironment() {
  const { t } = useTranslation();

  // --- BÖLÜM 1: PESTEL & MRI ---
  const pestelData = [
    { name: t('macro.pestel.economic'), impact: 8, prob: 0.9, score: 23, fill: '#d32f2f' }, // Kırmızı (Risk)
    { name: t('macro.pestel.technological'), impact: 9, prob: 0.7, score: 20, fill: '#2e7d32' }, // Yeşil (Fırsat)
    { name: t('macro.pestel.legal'), impact: 7, prob: 0.85, score: 18, fill: '#ed6c02' },
    { name: t('macro.pestel.social'), impact: 6, prob: 0.95, score: 17, fill: '#ed6c02' },
    { name: t('macro.pestel.environmental'), impact: 6, prob: 0.63, score: 11, fill: '#0288d1' },
    { name: t('macro.pestel.political'), impact: 5, prob: 0.52, score: 8, fill: '#7b1fa2' },
  ];

  const mriScore = 62.4;

  // --- BÖLÜM 2: PORTER 5 KUVVET ---
  const porterData = [
    { subject: t('macro.porter.rivalry'), A: 4, fullMark: 5 },
    { subject: t('macro.porter.supplier'), A: 5, fullMark: 5 },
    { subject: t('macro.porter.buyer'), A: 3, fullMark: 5 },
    { subject: t('macro.porter.entry'), A: 2, fullMark: 5 },
    { subject: t('macro.porter.substitute'), A: 2, fullMark: 5 },
  ];

  const sectorAttractiveness = 71.0;

  // Rekabetçi Pozisyon Matrisi (Scatter)
  const competitorData = [
    { name: 'Siemens', x: 8, y: 9, z: 100, fill: '#9c27b0' }, // Lider
    { name: 'Endress+Hauser', x: 7, y: 8, z: 80, fill: '#1976d2' }, // Takipçi
    { name: 'WIKA', x: 9, y: 6, z: 70, fill: '#2e7d32' }, // Maliyet Lideri (Ops yüksek)
    { name: 'JUMO', x: 5, y: 7, z: 60, fill: '#d32f2f' }, // Niş (Biz)
  ];

  // --- BÖLÜM 3: SENARYO & DUYARLILIK ---
  const scenarioData = [
    { name: t('macro.scenario.pessimistic'), revenue: 302.1, profit: 3.5 },
    { name: t('macro.scenario.base'), revenue: 312.9, profit: 4.5 },
    { name: t('macro.scenario.optimistic'), revenue: 336.3, profit: 6.5 },
  ];
  
  const expectedRevenue = 316.0;

  // Tornado Diyagramı Verisi (Duyarlılık)
  const sensitivityData = [
    { name: t('macro.sens.energy'), value: -0.45, percent: '-9%', color: '#d32f2f' },
    { name: t('macro.sens.pfas'), value: -0.25, percent: '-5%', color: '#d32f2f' },
    { name: t('macro.sens.efficiency'), value: 0.31, percent: '+6.2%', color: '#2e7d32' },
    { name: t('macro.sens.iolink'), value: 0.75, percent: '+15%', color: '#2e7d32' },
    { name: t('macro.sens.inventory'), value: 1.55, percent: '+31%', color: '#2e7d32' }, // En büyük etki
  ];

  // --- BÖLÜM 4: GAP ANALİZİ ---
  const gapData = [
    { metric: t('macro.gaps.marketShare'), current: '3.0%', target: '3.5%', gap: '+0.5%', priority: 'Yüksek' },
    { metric: t('macro.gaps.margin'), current: '1.61%', target: '3.5%', gap: '+1.89%', priority: 'Kritik' },
    { metric: t('macro.gaps.roe'), current: '2.64%', target: '8.0%', gap: '+5.36%', priority: 'Kritik' },
    { metric: t('macro.gaps.turnover'), current: '1.8x', target: '3.0x', gap: '+1.2x', priority: 'Kritik' },
    { metric: t('macro.gaps.perCapita'), current: '123k€', target: '140k€', gap: '+17k€', priority: 'Yüksek' },
  ];

  // --- BÖLÜM 5: ENTEGRE SKOR ---
  const topsisData = [
    { strategy: t('macro.topsis.A'), score: 0.782, rank: 1 },
    { strategy: t('macro.topsis.B'), score: 0.654, rank: 2 },
    { strategy: t('macro.topsis.C'), score: 0.521, rank: 3 },
  ];

  const scorecardData = [
    { dimension: t('macro.score.mri'), score: 38, weight: '35%', desc: 'MRI: 62.4 (High Risk)' },
    { dimension: t('macro.score.scs'), score: 71, weight: '30%', desc: 'SCS: 71.0 (High Appeal)' },
    { dimension: t('macro.score.comp'), score: 65, weight: '20%', desc: 'Niche Player' },
    { dimension: t('macro.score.reg'), score: 55, weight: '15%', desc: 'Green Deal / PFAS' },
  ];

  const overallHealthScore = 55.9;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('pages.macroEnvironment.title')}
      </Typography>

      {/* 1. MRI Score (Risk Alert) */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderLeft: '6px solid #d32f2f', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom color="error.dark">
                    {t('macro.mriTitle')}
                </Typography>
                <Typography variant="body1">
                    {t('macro.mriDesc')}
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', minWidth: 150, p: 2, bgcolor: 'error.50', borderRadius: 2 }}>
                <Typography variant="h3" fontWeight="bold" color="error.main">
                    %{mriScore}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold" color="error.dark">
                    {t('macro.riskLevel.high')}
                </Typography>
            </Box>
        </Box>
      </Paper>

      {/* 2. PESTEL Analysis */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Public sx={{ mr: 1 }} /> {t('macro.pestelAnalysis')}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        


        
        <Box sx={{ height: 350, width: '100%', mb: 2 }}>
            <ResponsiveContainer>
                <BarChart data={pestelData} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 30]} />
                    <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12, fontWeight: 500}} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Legend />
                    <Bar dataKey="score" name={t('macro.impactWeight')} radius={[0, 5, 5, 0]} barSize={25}>
                        {pestelData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Box>
        <Alert severity="info" variant="outlined">
            <Typography variant="body2">
                <strong>{t('macro.criticalFinding')}:</strong> {t('macro.pestel.findingText')}
            </Typography>
        </Alert>
      </Paper>

      {/* 3. Sector & Competition (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Porter 5 Forces */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <RadarIcon sx={{ mr: 1 }} /> {t('macro.porterTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            


            
            <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={porterData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 5]} />
                        <Radar name="JUMO" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Tooltip />
                    </RadarChart>
                </ResponsiveContainer>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 1 }}>
                <Chip label={`SCS: ${sectorAttractiveness}%`} color="primary" variant="outlined" />
            </Box>
        </Paper>

        {/* Competitor Matrix */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Groups sx={{ mr: 1 }} /> {t('macro.competitorMatrix')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            



            <Box sx={{ height: 300, width: '100%', bgcolor: 'grey.50', borderRadius: 2, p: 1 }}>
                <ResponsiveContainer>
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name={t('macro.axis.ops')} unit="/10" domain={[0, 10]} />
                        <YAxis type="number" dataKey="y" name={t('macro.axis.tech')} unit="/10" domain={[0, 10]} />
                        <ZAxis type="number" dataKey="z" range={[100, 400]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="Competitors" data={competitorData} fill="#8884d8">
                            {competitorData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </Box>
            <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                X: {t('macro.axis.ops')} | Y: {t('macro.axis.tech')} | Size: Market Share
            </Typography>
        </Paper>
      </Box>

      {/* 4. Scenario & Sensitivity (Side-by-Side) */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3, mb: 3 }}>
        
        {/* Scenario Analysis */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <ShowChart sx={{ mr: 1 }} /> {t('macro.scenarioTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            

            <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer>
                    <BarChart data={scenarioData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="revenue" name={t('macro.revenue')} fill="#8884d8" barSize={40} />
                        <Bar yAxisId="right" dataKey="profit" name={t('macro.profit')} fill="#82ca9d" barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </Box>
            <Alert severity="info" sx={{ mt: 1, py: 0 }}>
                <Typography variant="caption" fontWeight="bold">
                    {t('macro.expectedRevenue')}: {expectedRevenue} M€
                </Typography>
            </Alert>
        </Paper>

        {/* Sensitivity (Tornado) */}
        <Paper elevation={3} sx={{ flex: 1, p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                <Nature sx={{ mr: 1 }} /> {t('macro.sensitivityTitle')}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        data={sensitivityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 11}} />
                        <Tooltip />
                        <ReferenceLine x={0} stroke="#000" />
                        <Bar dataKey="value" name="Net Profit Impact (M€)" barSize={25}>
                            {sensitivityData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Box>
            <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'center', fontWeight: 'bold', color: 'text.primary' }}>
                {t('macro.criticalFinding')}: {t('macro.sens.finding')}
            </Typography>
        </Paper>
      </Box>

      {/* 5. Gap Analysis */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Flag sx={{ mr: 1 }} /> {t('macro.gapAnalysis')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <TableContainer sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ bgcolor: 'grey.100' }}>
                        <TableCell><strong>{t('macro.metric')}</strong></TableCell>
                        <TableCell align="center"><strong>{t('macro.current')}</strong></TableCell>
                        <TableCell align="center"><strong>{t('macro.target')}</strong></TableCell>
                        <TableCell align="center"><strong>{t('macro.gap')}</strong></TableCell>
                        <TableCell align="center"><strong>{t('macro.priority')}</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gapData.map((row, index) => (
                        <TableRow key={index} hover>
                            <TableCell>{row.metric}</TableCell>
                            <TableCell align="center">{row.current}</TableCell>
                            <TableCell align="center">{row.target}</TableCell>
                            <TableCell align="center" sx={{ color: 'error.main', fontWeight: 'bold' }}>{row.gap}</TableCell>
                            <TableCell align="center">
                                <Chip 
                                    label={row.priority} 
                                    color={row.priority === 'Kritik' ? 'error' : 'warning'} 
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

      {/* 6. Integrated Score Card */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: '#f9fafb', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
            <Business sx={{ mr: 1 }} /> {t('macro.integratedScore')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
            {/* TOPSIS Results */}
            <Box>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{t('macro.topsisResults')}</Typography>
                {topsisData.map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2">{item.strategy}</Typography>
                            <Typography variant="body2" fontWeight="bold">{item.score.toFixed(3)}</Typography>
                        </Box>
                        <LinearProgress 
                            variant="determinate" 
                            value={item.score * 100} 
                            color={index === 0 ? "success" : "secondary"} 
                            sx={{ height: 10, borderRadius: 5, bgcolor: 'grey.300' }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Health Score */}
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #ddd', textAlign: 'center', borderRadius: 2, bgcolor: 'white' }}>
                <Typography variant="subtitle2" color="text.secondary">{t('macro.healthScore')}</Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
                    <Speed sx={{ fontSize: 60, color: 'warning.main', opacity: 0.8 }} />
                    <Box sx={{ ml: 2, textAlign: 'left' }}>
                        <Typography variant="h3" color="warning.main" fontWeight="bold">
                            {overallHealthScore}
                        </Typography>
                        <Typography variant="caption">/100</Typography>
                    </Box>
                </Box>
                <Typography variant="body2" fontWeight="bold">{t('macro.healthDesc')}</Typography>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box>
                        <Typography variant="caption" display="block" color="text.secondary">Main Threat</Typography>
                        <Typography variant="body2" fontWeight="bold" color="error.main">{t('macro.mainThreat')}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" display="block" color="text.secondary">Main Opportunity</Typography>
                        <Typography variant="body2" fontWeight="bold" color="success.main">{t('macro.mainOpp')}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
      </Paper>
    </Box>
  );
}

export default MacroEnvironment;