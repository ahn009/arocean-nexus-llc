#!/bin/bash

# Deployment script for Arocean Nexus LLC

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run type check
echo "🔍 Running type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type check failed"
    exit 1
fi

# Run linting
echo "🧹 Running linting..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting warnings found (continuing anyway)"
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Build completed successfully
echo "✅ Build completed successfully!"
echo "📁 Static files are ready in the 'out' directory"
echo ""
echo "🎯 Next steps:"
echo "1. Upload the contents of the 'out' directory to your web server"
echo "2. Configure your web server to serve the static files"
echo "3. Test the deployment by visiting your domain"
echo ""
echo "📚 For deployment guides, check:"
echo "• Vercel: https://vercel.com/docs"
echo "• Netlify: https://docs.netlify.com/"
echo "• AWS S3: https://docs.aws.amazon.com/s3/"
echo ""
echo "🚀 Deployment process completed!"