const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

// API Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'Proje Yapım Aşamasında',
    progress: 75,
    contact: {
      email: 'info@ztaak.com',
      phone: '+90 (543) 392 0956'
    }
  });
});

app.get('/api/progress', (req, res) => {
  res.json({
    progress: 75,
    status: 'Geliştirme devam ediyor'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Sunucu hatası oluştu'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server çalışıyor: http://localhost:${PORT}`);
  console.log(`📧 İletişim: info@ztaak.com`);
  console.log(`📱 Telefon: +90 (543) 392 0956`);
}); 