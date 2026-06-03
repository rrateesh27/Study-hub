import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📚 StudyHub</h1>
        <p>Student Activity & Learning Management Platform</p>
      </header>
      <main className="App-main">
        <div className="welcome-section">
          <h2>Welcome to StudyHub</h2>
          <p>Your complete learning companion for success</p>
          <div className="features">
            <div className="feature-card">
              <h3>📊 Activity Tracking</h3>
              <p>Track your study schedule and activities</p>
            </div>
            <div className="feature-card">
              <h3>🤖 AI Assessment</h3>
              <p>Get Smart AI evaluation of your work</p>
            </div>
            <div className="feature-card">
              <h3>📅 Calendar Sync</h3>
              <p>Sync with Google Calendar</p>
            </div>
            <div className="feature-card">
              <h3>📈 Analytics</h3>
              <p>View your learning progress</p>
            </div>
            <div className="feature-card">
              <h3>🧪 Weekly Tests</h3>
              <p>Take W.E.T (Weekend Tests)</p>
            </div>
            <div className="feature-card">
              <h3>🔥 Study Streaks</h3>
              <p>Build your daily study streaks</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;