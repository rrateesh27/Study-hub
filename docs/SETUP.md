# StudyHub Setup Guide

## Prerequisites

- Node.js v14+ installed
- MongoDB account (MongoDB Atlas recommended)
- Google API credentials (Gmail + Calendar APIs)
- Git installed

## Step 1: Set Up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Copy your connection string

## Step 2: Get Google API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Calendar API
4. Enable Gmail API
5. Create OAuth 2.0 credentials (Web application)
6. Copy Client ID and Client Secret

## Step 3: Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and add:
- MongoDB URI
- Google credentials
- JWT Secret
- Gmail credentials

```bash
npm run dev
```

## Step 4: Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
```

Edit `.env` and add:
- Google Client ID
- API URL

```bash
npm start
```

## Verification

- Backend: http://localhost:5000/api/health
- Frontend: http://localhost:3000

## Troubleshooting

### MongoDB Connection Error
- Check connection string
- Whitelist your IP in MongoDB Atlas

### Google API Issues
- Verify credentials are enabled
- Check OAuth consent screen configuration

### CORS Issues
- Ensure backend CORS is configured
- Check frontend API URL matches backend