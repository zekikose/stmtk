#!/bin/bash

echo "🚀 STMTK Production Deployment Script"
echo "====================================="

# Set environment variables
export NODE_ENV=production
export PORT=5000

echo "📦 Building React app..."
npm run build

echo "🔧 Checking build..."
if [ ! -d "build" ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

echo "🌐 Starting production server..."
echo "📧 Contact: info@ztaak.com"
echo "📱 Phone: +90 (543) 392 0956"
echo "🔗 Domain: https://ztaak.com"

# Start the server
node server/server.js 