# STMTK - Proje Yapım Aşamasında

Modern React.js projesi ile Node.js backend sunucusu.

## 🚀 Özellikler

- ⚛️ React.js frontend
- 🖥️ Node.js Express backend
- 📱 Responsive tasarım
- 🌐 API endpoints
- 🎨 Modern UI/UX

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Sadece backend sunucusunu başlat
npm run server

# Production build
npm run build
```

## 🌐 API Endpoints

- `GET /api/status` - Proje durumu
- `GET /api/progress` - Geliştirme ilerlemesi
- `GET /` - React uygulaması

## 🚀 Deployment

### Railway (Önerilen)

1. [Railway.app](https://railway.app) hesabı oluştur
2. GitHub repository'yi bağla
3. Otomatik deployment başlayacak

### Heroku

```bash
# Heroku CLI kur
npm install -g heroku

# Login
heroku login

# App oluştur
heroku create your-app-name

# Deploy
git push heroku main
```

### Vercel

```bash
# Vercel CLI kur
npm install -g vercel

# Deploy
vercel
```

## 📞 İletişim

- **Email:** info@ztaak.com
- **Telefon:** +90 (543) 392 0956

## 📁 Proje Yapısı

```
stmtk/
├── src/                 # React frontend
├── server/             # Node.js backend
├── build/              # Production build
├── public/             # Static files
└── package.json        # Dependencies
```

## 🔧 Environment Variables

```env
PORT=5000
NODE_ENV=production
```

## 📝 Lisans

© 2025 Tüm hakları saklıdır.
