import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* TOP NAVBAR */}
      <header className="top-nav">
        <div className="logo-area">
          <span className="logo-text">Terp Connect</span>
        </div>
        <nav className="main-menu">
          <a href="#courses">Courses</a>
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#schedule">Schedule</a>
          <a href="#message">Message</a>
          <a href="#support">Support</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn">
            {/* Search Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="icon-btn">
            {/* Notification Bell Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <div className="user-avatar">
            <img 
              src="https://via.placeholder.com/32" 
              alt="User" 
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashbaord-content">

        {/* LEFT COLUMN: REPLACING THE BAR CHART WITH "UPCOMING STUDY SESSIONS" */}
        <section className="card card-large">
          <div className="card-header">
            <h2>Upcoming Study Sessions</h2>
            <span className="card-header-sub">Next 7 Days</span>
          </div>
          <div className="sessions-list">
            <div className="session-item">
              <div className="session-info">
                <h4>Math Group Review</h4>
                <p>Tomorrow, 10:00 AM - 12:00 PM</p>
                <p>Group: Calculus 101</p>
              </div>
              <button className="session-btn">View Details</button>
            </div>
            <div className="session-item">
              <div className="session-info">
                <h4>English Literature</h4>
                <p>Fri, 2:00 PM - 3:30 PM</p>
                <p>Group: Literature Circle</p>
              </div>
              <button className="session-btn">View Details</button>
            </div>
            <div className="session-item">
              <div className="session-info">
                <h4>Physics Lab Discussion</h4>
                <p>Sat, 1:00 PM - 2:30 PM</p>
                <p>Group: Quantum Basics</p>
              </div>
              <button className="session-btn">View Details</button>
            </div>
          </div>
        </section>

        {/* MIDDLE COLUMN: PROGRESS STATISTICS */}
        <section className="card card-medium">
          <div className="card-header">
            <h2>Progress statistics</h2>
            <span className="card-header-sub">64% Total activity</span>
          </div>
          <div className="stats-container">
            <div className="stats-row">
              <div className="stat-box">
                <h3>8</h3>
                <p>In progress</p>
              </div>
              <div className="stat-box">
                <h3>12</h3>
                <p>Completed</p>
              </div>
              <div className="stat-box">
                <h3>14</h3>
                <p>Upcoming</p>
              </div>
            </div>
            <div className="stats-bar">
              <div className="stats-bar-fill" style={{ width: "64%" }}></div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: RECENT MESSAGES (EXAMPLE) */}
        <section className="card card-medium">
          <div className="card-header">
            <h2>Recent Messages</h2>
          </div>
          <div className="recent-messages">
            <div className="message-item">
              <img 
                src="https://via.placeholder.com/24" 
                alt="User1" 
                className="message-avatar"
              />
              <div className="message-content">
                <p><strong>Anna:</strong> Don’t forget to review chapter 3 before tomorrow’s session!</p>
                <span className="message-time">10 min ago</span>
              </div>
            </div>
            <div className="message-item">
              <img 
                src="https://via.placeholder.com/24" 
                alt="User2" 
                className="message-avatar"
              />
              <div className="message-content">
                <p><strong>Brian:</strong> Shared a new PDF resource for Physics group.</p>
                <span className="message-time">1 hr ago</span>
              </div>
            </div>
            <div className="message-item">
              <img 
                src="https://via.placeholder.com/24" 
                alt="User3" 
                className="message-avatar"
              />
              <div className="message-content">
                <p><strong>Cindy:</strong> Good job on the last test, everyone!</p>
                <span className="message-time">2 hrs ago</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECOND ROW - TASK SUMMARY, RECENT ACTIVITY, PERSONAL ACHIEVEMENTS, QUICK ACTIONS */}
      <div className="secondary-content">
        {/* Task Summary */}
        <section className="card card-small">
          <div className="card-header">
            <h2>Task Summary</h2>
          </div>
          <div className="task-summary-content">
            <div className="task-line">
              <p>Complete Chapter 4 Reading</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }}></div>
              </div>
              <span>70%</span>
            </div>
            <div className="task-line">
              <p>Submit Essay Draft</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "30%" }}></div>
              </div>
              <span>30%</span>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="card card-small">
          <div className="card-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="recent-activity-list">
            <div className="activity-item">
              <span className="dot"></span>
              <p>Joined “Biology Study Group”</p>
            </div>
            <div className="activity-item">
              <span className="dot"></span>
              <p>Uploaded “Week2_Notes.pdf” to “English Literature”</p>
            </div>
            <div className="activity-item">
              <span className="dot"></span>
              <p>Completed “Chapter 2 Quiz” with 85%</p>
            </div>
          </div>
        </section>

        {/* Personal Achievements */}
        <section className="card card-small">
          <div className="card-header">
            <h2>Personal Achievements</h2>
          </div>
          <div className="achievements-content">
            <div className="achievement-badge">
              <img 
                src="https://via.placeholder.com/50" 
                alt="Badge1"
              />
              <p>Grammar Guru</p>
            </div>
            <div className="achievement-badge">
              <img 
                src="https://via.placeholder.com/50" 
                alt="Badge2"
              />
              <p>Quiz Master</p>
            </div>
            <div className="achievement-badge">
              <img 
                src="https://via.placeholder.com/50" 
                alt="Badge3"
              />
              <p>Resource Sharer</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="card card-small">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <button className="quick-btn">Create Study Group</button>
            <button className="quick-btn secondary">Join Study Group</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
