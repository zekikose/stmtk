const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && !req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  
  next();
});

// Middleware
app.use(cors({
  origin: ['https://ztaak.com', 'http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

// API Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'Proje Yapım Aşamasında',
    progress: 75,
    domain: 'https://ztaak.com',
    contact: {
      email: 'info@ztaak.com',
      phone: '+90 (543) 392 0956'
    }
  });
});

app.get('/api/progress', (req, res) => {
  res.json({
    progress: 75,
    status: 'Geliştirme devam ediyor',
    domain: 'https://ztaak.com'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    domain: 'https://ztaak.com',
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes should come before the catch-all route
app.get('/api/*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'API endpoint bulunamadı'
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
  console.log(`🌐 Production URL: https://ztaak.com`);
  console.log(`📧 İletişim: info@ztaak.com`);
  console.log(`📱 Telefon: +90 (543) 392 0956`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
}); 