// Yearly.jsx
import { useEffect, useState } from 'react';
import { yearlyGoals } from '../goals';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LOCAL_KEY = 'yearly-progress';
const RESET_INTERVAL = 'yearly';

const getResetTime = () => {
  const now = new Date();
  now.setMonth(0, 1);
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

export default function Yearly() {
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

  const progress = Math.round((Object.values(completed).filter(Boolean).length / yearlyGoals.length) * 100);

  const chartData = [
    { name: 'Progress', value: progress },
    { name: 'Remaining', value: 100 - progress }
  ];

  return (
    <div className="page-container">
      <div className="welcome-box">
        🎯 <strong>Yearly Focus:</strong><br />
        Milestone targets. Big wins.
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" hide />
          <YAxis hide domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="value" fill="#22d3ee" barSize={30} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {yearlyGoals.map((task, i) => (
        <div key={i} className="task-card">
          <input
            type="checkbox"
            className="task-checkbox"
            checked={completed[i] || false}
            onChange={() => toggleTask(i)}
          />
          <div className="task-content">
            <h3>{task.title}</h3>
            <p>
              {task.time} • <strong>{task.difficulty}</strong>
            </p>
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