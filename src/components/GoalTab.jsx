import { useEffect, useState } from 'react';

export default function GoalTab({ title, goals, localKey, resetInterval, focusMsg }) {
  const [completed, setCompleted] = useState({});

  const getResetTime = () => {
    const now = new Date();
    if (resetInterval === 'daily') {
      now.setHours(0, 0, 0, 0);
    } else if (resetInterval === 'weekly') {
      const day = now.getDay();
      now.setDate(now.getDate() - day);
      now.setHours(0, 0, 0, 0);
    } else if (resetInterval === 'monthly') {
      now.setDate(1);
      now.setHours(0, 0, 0, 0);
    } else if (resetInterval === 'yearly') {
      now.setMonth(0, 1);
      now.setHours(0, 0, 0, 0);
    }
    return now.getTime();
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(localKey)) || { done: {}, lastReset: 0 };
    const now = Date.now();

    if (stored.lastReset < getResetTime()) {
      localStorage.setItem(localKey, JSON.stringify({ done: {}, lastReset: now }));
      setCompleted({});
    } else {
      setCompleted(stored.done || {});
    }
  }, [localKey]);

  const toggleTask = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem(localKey, JSON.stringify({ done: updated, lastReset: Date.now() }));
  };

  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / goals.length) * 100
  );

  return (
    <div className="page-container">
      <div className="welcome-box">
        {focusMsg}
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {goals.map((task, i) => (
        <div key={i} className="task-card">
          <input
            type="checkbox"
            className="task-checkbox"
            checked={completed[i] || false}
            onChange={() => toggleTask(i)}
          />
          <div className="task-content">
            <h3>{task.title}</h3>
            <p>{task.time} • <strong>{task.difficulty}</strong></p>
          </div>
        </div>
      ))}

      <div className="welcome-box">
        🚀 <strong>AI Suggestions Coming Soon:</strong><br />
        You’ll get smart goal recs based on your progress!
      </div>
    </div>
  );
}
