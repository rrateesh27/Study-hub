# StudyHub 📚

A comprehensive student activity and learning management platform designed for high school and college students.

## Features 🌟

### 1. **Student Activity Tracking**
- Schedule management
- Note posting after task completion
- Real-time activity monitoring

### 2. **AI-Powered Assessment**
- Automatic topic completion checking
- "Super A.I" rating system
- Intelligent content validation

### 3. **Learning Analytics**
- Track majority subject studied
- Identify least-read subjects
- Personalized learning insights

### 4. **Weekend Testing (W.E.T)**
- Generate tests based on weekly learning
- Focus on least-studied subjects
- Adaptive difficulty levels

### 5. **Study Streaks & Gamification**
- Continuous study streak tracking
- Achievement badges
- Engagement rewards

### 6. **Email Integration**
- Gmail account linking
- Automated grade reports
- Subject progress updates

### 7. **Google Calendar Sync**
- Attach work/study sessions to calendar
- Visual study timeline
- Automatic event creation from tasks

### 8. **Auto-Grading System**
- Annual grade updates
- Support for high school and college
- Comprehensive performance tracking

## Tech Stack 🛠️

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: Google OAuth 2.0
- **Calendar API**: Google Calendar API
- **Email Service**: Gmail API & Nodemailer

## Project Structure

```
study-hub/
├── frontend/                 # React.js application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── backend/                  # Node.js/Express server
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
├── docs/                     # Documentation
└── .gitignore
```

## Getting Started 🚀

### Prerequisites
- Node.js (v14+)
- MongoDB
- Google API credentials (Calendar + Gmail)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rrateesh27/study-hub.git
   cd study-hub
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Add your MongoDB URI and Google API keys
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm start
   ```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
GMAIL_USER=your_gmail
GMAIL_PASSWORD=your_app_password
PORT=5000
```

### Frontend (.env)
```
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_API_URL=http://localhost:5000
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Google OAuth login
- `POST /api/auth/logout` - Logout user

### Students
- `GET /api/students/:id` - Get student profile
- `PUT /api/students/:id` - Update student profile

### Activities
- `POST /api/activities` - Create activity
- `GET /api/activities/:studentId` - Get student activities
- `PUT /api/activities/:id` - Update activity

### Subjects
- `GET /api/subjects/:studentId` - Get student subjects
- `POST /api/subjects` - Add subject

### Calendar
- `POST /api/calendar/sync` - Sync with Google Calendar
- `GET /api/calendar/events/:studentId` - Get calendar events

### Assessment & Grades
- `POST /api/assessment/check` - AI content check
- `GET /api/grades/:studentId` - Get student grades
- `POST /api/grades/update` - Update grades

### Testing
- `POST /api/tests/generate` - Generate W.E.T
- `POST /api/tests/submit` - Submit test answers
- `GET /api/tests/results/:studentId` - Get test results

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - See LICENSE file for details

## Support

For issues, feature requests, or questions, please open an issue on GitHub.

---

**Built with ❤️ for students everywhere**