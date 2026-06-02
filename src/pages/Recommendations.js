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
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from '@mui/material';
import {
  Speed, // Hızlandırma
  Inventory, // Stok
  Group, // Personel
  Factory, // Fabrika
  Euro, // Fiyat/Para
  Business, // İş Modeli
  PriorityHigh, // Kritik
  CheckCircle, // Onay
  Timeline, // Zaman çizelgesi
  Lightbulb, // Fikir
  TrendingUp,
  Bolt,
} from '@mui/icons-material';

function Recommendations() {
  const { t } = useTranslation();

  // --- A. ACİL EYLEM VERİLERİ (0-12 Ay) ---
  const urgentActions = {
    title: t('rec.phase1.title'),
    subtitle: t('rec.phase1.subtitle'),
    icon: <Bolt fontSize="large" color="error" />,
    color: 'error.main',
    sections: [
      {
        id: 1,
        title: t('rec.action.stock.title'),
        problem: t('rec.action.stock.problem'),
        target: t('rec.action.stock.target'),
        rows: [
          { code: 'A1', action: t('rec.action.stock.a1.act'), impact: t('rec.action.stock.a1.imp'), owner: t('rec.role.supplyChain') },
          { code: 'A2', action: t('rec.action.stock.a2.act'), impact: t('rec.action.stock.a2.imp'), owner: t('rec.role.cfo') },
          { code: 'A3', action: t('rec.action.stock.a3.act'), impact: t('rec.action.stock.a3.imp'), owner: t('rec.role.purchasing') },
        ],
      },
      {
        id: 2,
        title: t('rec.action.hr.title'),
        problem: t('rec.action.hr.problem'),
        target: t('rec.action.hr.target'),
        rows: [
          { code: 'B1', action: t('rec.action.hr.b1.act'), impact: t('rec.action.hr.b1.imp'), owner: t('rec.role.prodMgr') },
          { code: 'B2', action: t('rec.action.hr.b2.act'), impact: t('rec.action.hr.b2.imp'), owner: t('rec.role.hr') },
          { code: 'B3', action: t('rec.action.hr.b3.act'), impact: t('rec.action.hr.b3.imp'), owner: t('rec.role.hr') },
        ],
      },
    ],
  };

  // --- B. ORTA VADELİ VERİLER (12-36 Ay) ---
  const midTermActions = {
    title: t('rec.phase2.title'),
    subtitle: t('rec.phase2.subtitle'),
    icon: <Timeline fontSize="large" color="primary" />,
    color: 'primary.main',
    sections: [
      {
        id: 3,
        title: t('rec.action.factory.title'),
        problem: t('rec.action.factory.problem'),
        target: t('rec.action.factory.target'),
        rows: [
          { code: 'C1', action: t('rec.action.factory.c1.act'), impact: t('rec.action.factory.c1.imp'), owner: t('rec.role.opEx') },
          { code: 'C2', action: t('rec.action.factory.c2.act'), impact: t('rec.action.factory.c2.imp'), owner: t('rec.role.prodMgr') },
          { code: 'C3', action: t('rec.action.factory.c3.act'), impact: t('rec.action.factory.c3.imp'), owner: t('rec.role.cto') },
        ],
      },
      {
        id: 4,
        title: t('rec.action.price.title'),
        problem: t('rec.action.price.problem'),
        target: t('rec.action.price.target'),
        rows: [
          { code: 'D1', action: t('rec.action.price.d1.act'), impact: t('rec.action.price.d1.imp'), owner: t('rec.role.sales') },
          { code: 'D2', action: t('rec.action.price.d2.act'), impact: t('rec.action.price.d2.imp'), owner: t('rec.role.marketing') },
          { code: 'D3', action: t('rec.action.price.d3.act'), impact: t('rec.action.price.d3.imp'), owner: t('rec.role.sales') },
        ],
      },
    ],
  };

  // --- C. UZUN VADELİ VERİLER (36+ Ay) ---
  const longTermActions = {
    title: t('rec.phase3.title'),
    subtitle: t('rec.phase3.subtitle'),
    icon: <Business fontSize="large" color="success" />,
    color: 'success.main',
    sections: [
      {
        id: 5,
        title: t('rec.action.business.title'),
        problem: t('rec.action.business.problem'),
        target: t('rec.action.business.target'),
        rows: [
          { code: 'E1', action: t('rec.action.business.e1.act'), impact: t('rec.action.business.e1.imp'), owner: t('rec.role.ceo') },
          { code: 'E2', action: t('rec.action.business.e2.act'), impact: t('rec.action.business.e2.imp'), owner: t('rec.role.cto') },
          { code: 'E3', action: t('rec.action.business.e3.act'), impact: t('rec.action.business.e3.imp'), owner: t('rec.role.sustain') },
        ],
      },
    ],
  };

  // --- MATRİS VERİSİ ---
  const matrixData = [
    { code: 'A1-A3', name: t('rec.matrix.stock'), benefit: '15-20 M€ (Cash)', time: '12 Mo', invest: '0.5 M€', priority: t('rec.priority.critical'), pColor: 'error' },
    { code: 'D1-D3', name: t('rec.matrix.price'), benefit: '12-20 M€ (Profit)', time: '24 Mo', invest: '0.3 M€', priority: t('rec.priority.critical'), pColor: 'error' },
    { code: 'B1-B3', name: t('rec.matrix.hr'), benefit: '3-5 M€ (Saving)', time: '18 Mo', invest: '1.0 M€', priority: t('rec.priority.high'), pColor: 'warning' },
    { code: 'C1-C3', name: t('rec.matrix.oee'), benefit: '8-10 M€ (Profit)', time: '36 Mo', invest: '2.5 M€', priority: t('rec.priority.medium'), pColor: 'info' },
    { code: 'E1-E3', name: t('rec.matrix.model'), benefit: '5-15 M€ (New)', time: '48+ Mo', invest: '5.0 M€', priority: t('rec.priority.strategic'), pColor: 'success' },
  ];

  // --- PRENSİPLER ---
  const principles = [
    { title: t('rec.principle.winwin'), desc: t('rec.principle.winwinDesc') },
    { title: t('rec.principle.funding'), desc: t('rec.principle.fundingDesc') },
    { title: t('rec.principle.speed'), desc: t('rec.principle.speedDesc') },
    { title: t('rec.principle.motivation'), desc: t('rec.principle.motivationDesc') },
  ];

  const ActionSection = ({ data }) => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, bgcolor: `${data.color}15`, borderRadius: 1, borderLeft: `6px solid`, borderColor: data.color }}>
        {data.icon}
        <Box sx={{ ml: 2 }}>
           <Typography variant="h6" fontWeight="bold" color={data.color}>{data.title}</Typography>
           <Typography variant="body2" color="text.secondary">{data.subtitle}</Typography>
        </Box>
      </Box>

      {data.sections.map((sec, idx) => (
        <Paper elevation={2} sx={{ mb: 3, p: 2 }} key={sec.id}>
           <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                 {sec.id}. {sec.title}
              </Typography>
              <Typography variant="body2" color="error" gutterBottom>
                 <strong>{t('rec.problem')}:</strong> {sec.problem}
              </Typography>
           </Box>
           
           <TableContainer component={Box} sx={{ mb: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <Table size="small">
                 <TableHead>
                    <TableRow sx={{ bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'grey.100' }}>
                       <TableCell width="10%"><strong>{t('rec.table.code')}</strong></TableCell>
                       <TableCell width="40%"><strong>{t('rec.table.action')}</strong></TableCell>
                       <TableCell width="30%"><strong>{t('rec.table.impact')}</strong></TableCell>
                       <TableCell width="20%"><strong>{t('rec.table.owner')}</strong></TableCell>
                    </TableRow>
                 </TableHead>
                 <TableBody>
                    {sec.rows.map((row, rIdx) => (
                       <TableRow key={rIdx}>
                          <TableCell><Chip label={row.code} size="small" variant="outlined" /></TableCell>
                          <TableCell>{row.action}</TableCell>
                          <TableCell sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.impact}</TableCell>
                          <TableCell>{row.owner}</TableCell>
                       </TableRow>
                    ))}
                 </TableBody>
              </Table>
           </TableContainer>

           <Box sx={{ p: 1, bgcolor: 'success.light', borderRadius: 1, color: 'white' }}>
              <Typography variant="caption" fontWeight="bold">
                 {t('rec.target')}: {sec.target}
              </Typography>
           </Box>
        </Paper>
      ))}
    </Box>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        {t('pages.recommendations.title')}
      </Typography>

      {/* 1. TEMEL YAKLAŞIM */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(2,136,209,0.12)' : '#e3f2fd' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
           <Speed fontSize="large" color="primary" sx={{ fontSize: 50 }} />
           <Box>
              <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
                 {t('rec.approachTitle')}
              </Typography>
              <Typography variant="body1">
                 {t('rec.approachDesc')}
              </Typography>
           </Box>
        </Box>
      </Paper>

      {/* 2. EYLEM PLANLARI */}
      <ActionSection data={urgentActions} />
      <ActionSection data={midTermActions} />
      <ActionSection data={longTermActions} />

      {/* 3. ÖNCELİK VE KAYNAK MATRİSİ */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          {t('rec.matrixTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <TableContainer>
           <Table>
              <TableHead>
                 <TableRow sx={{ bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.10)' : 'grey.200' }}>
                    <TableCell><strong>{t('rec.matrix.col.code')}</strong></TableCell>
                    <TableCell><strong>{t('rec.matrix.col.benefit')}</strong></TableCell>
                    <TableCell><strong>{t('rec.matrix.col.time')}</strong></TableCell>
                    <TableCell><strong>{t('rec.matrix.col.invest')}</strong></TableCell>
                    <TableCell align="center"><strong>{t('rec.matrix.col.priority')}</strong></TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                 {matrixData.map((row, index) => (
                    <TableRow key={index} sx={index < 2 ? { bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(237,108,2,0.12)' : '#fff3e0' } : {}}>
                       <TableCell>
                          <Typography variant="body2" fontWeight="bold">{row.code}</Typography>
                          <Typography variant="caption">{row.name}</Typography>
                       </TableCell>
                       <TableCell sx={{ color: 'success.dark', fontWeight: 'bold' }}>{row.benefit}</TableCell>
                       <TableCell>{row.time}</TableCell>
                       <TableCell>{row.invest}</TableCell>
                       <TableCell align="center">
                          <Chip label={row.priority} color={row.pColor} size="small" />
                       </TableCell>
                    </TableRow>
                 ))}
              </TableBody>
           </Table>
        </TableContainer>
      </Paper>

      {/* 4. UYGULAMA PRENSİPLERİ */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          {t('rec.principlesTitle')}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
           {principles.map((p, index) => (
              <Grid item xs={12} md={6} key={index}>
                 <Box sx={{ display: 'flex', gap: 2, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2, height: '100%' }}>
                    <CheckCircle color="success" />
                    <Box>
                       <Typography variant="subtitle2" fontWeight="bold">{p.title}</Typography>
                       <Typography variant="body2" color="text.secondary">{p.desc}</Typography>
                    </Box>
                 </Box>
              </Grid>
           ))}
        </Grid>
      </Paper>

      {/* 5. SON SÖZ */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: '#263238', color: 'white' }}>
         <Typography variant="h6" gutterBottom sx={{ color: '#ffca28' }}>
            {t('rec.conclusion.title')}
         </Typography>
         <Typography variant="body1" paragraph>
            {t('rec.conclusion.text')}
         </Typography>
         <Alert severity="warning" variant="filled">
            <Typography variant="body2" fontWeight="bold">
               {t('rec.conclusion.call')}
            </Typography>
         </Alert>
      </Paper>

    </Box>
  );
}

export default Recommendations;