// --- Updated Weekly.jsx ---
import { useEffect, useState } from 'react';
import { weeklyGoals } from '../goals';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const LOCAL_KEY = 'weekly-progress';
const RESET_INTERVAL = 'weekly';

const getResetTime = () => {
  const now = new Date();
  const day = now.getDay();
  now.setDate(now.getDate() - day);
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

export default function Weekly() {
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(LOCAL_KEY)) || { done: {}, lastReset: 0 };
    const now = Date.now();
    if (stored.lastReset < getResetTime()) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify({ done: {}, lastReset: now }));
      setCompleted({});
    } else {
      setCompleted(stored.done || {});
    }
  }, []);

  const toggleTask = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ done: updated, lastReset: Date.now() }));
  };

  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / weeklyGoals.length) * 100
  );

  const progressData = [
    { name: 'Weekly', value: progress },
  ];

  return (
    <div className="page-container">
      <div className="welcome-box">
        📆 <strong>Weekly Focus:</strong><br />
        Complete your weekly missions by Sunday.
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={progressData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#7c3aed" />
        </BarChart>
      </ResponsiveContainer>

      {weeklyGoals.map((task, i) => (
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
    </div>
  );
}