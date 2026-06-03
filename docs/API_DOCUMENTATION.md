# StudyHub API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All endpoints (except login) require JWT token in header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth

#### POST /auth/login
Google OAuth login

**Response:**
```json
{
  "token": "jwt_token",
  "student": { ... }
}
```

### Students

#### GET /students/:id
Get student profile

#### PUT /students/:id
Update student profile

### Activities

#### POST /activities
Create new activity

**Body:**
```json
{
  "title": "Math Chapter 5",
  "subject": "subject_id",
  "type": "study",
  "description": "...",
  "duration": 60
}
```

#### GET /activities/:studentId
Get student activities

#### PUT /activities/:id
Update activity

### Subjects

#### POST /subjects
Add new subject

**Body:**
```json
{
  "name": "Mathematics",
  "color": "#FF5733"
}
```

#### GET /subjects/:studentId
Get student subjects

### Calendar

#### POST /calendar/sync
Sync with Google Calendar

#### GET /calendar/events/:studentId
Get calendar events

### Assessment

#### POST /assessment/check
AI content assessment

**Body:**
```json
{
  "content": "Student answer/notes",
  "topic": "topic_name"
}
```

### Grades

#### GET /grades/:studentId
Get student grades

#### POST /grades/update
Update grades

### Tests

#### POST /tests/generate
Generate W.E.T (Weekend Test)

#### POST /tests/submit
Submit test answers

#### GET /tests/results/:studentId
Get test results

## Response Format

Success:
```json
{
  "success": true,
  "data": { ... }
}
```

Error:
```json
{
  "error": "Error message"
}
```