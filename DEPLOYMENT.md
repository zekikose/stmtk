# Deployment Guide

## Heroku Deployment

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Open App**
   ```bash
   heroku open
   ```

## Railway Deployment

1. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will automatically detect the Node.js app

2. **Environment Variables**
   - Set `NODE_ENV=production`
   - Set `PORT` (Railway will set this automatically)

## Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Production Server**
   ```bash
   npm run server
   ```

## API Endpoints

- `GET /api/status` - Get project status
- `GET /api/progress` - Get development progress
- `GET /` - Serve React app

## Environment Variables

Create a `.env` file in the root directory:
```
PORT=5000
NODE_ENV=production
``` 