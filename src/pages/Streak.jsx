// Unified tab component generation for: Daily, Weekly, Monthly, Yearly, Health
// File: Streak.jsx

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const LOCAL_KEY = 'streak-stats';

export default function Streak() {
  const [stats, setStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    daily: { completed: 0, total: 0 },
    weekly: { completed: 0, total: 0 },
    monthly: { completed: 0, total: 0 },
    yearly: { completed: 0, total: 0 },
    history: []
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (saved) setStats(saved);
  }, []);

  const resetStats = () => {
    const fresh = {
      currentStreak: 0,
      longestStreak: 0,
      daily: { completed: 0, total: 0 },
      weekly: { completed: 0, total: 0 },
      monthly: { completed: 0, total: 0 },
      yearly: { completed: 0, total: 0 },
      history: []
    };
    setStats(fresh);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(fresh));
  };

  const chartData = [
    {
      name: 'Daily',
      value: stats.daily.total === 0 ? 0 : Math.round((stats.daily.completed / stats.daily.total) * 100)
    },
    {
      name: 'Weekly',
      value: stats.weekly.total === 0 ? 0 : Math.round((stats.weekly.completed / stats.weekly.total) * 100)
    },
    {
      name: 'Monthly',
      value: stats.monthly.total === 0 ? 0 : Math.round((stats.monthly.completed / stats.monthly.total) * 100)
    },
    {
      name: 'Yearly',
      value: stats.yearly.total === 0 ? 0 : Math.round((stats.yearly.completed / stats.yearly.total) * 100)
    }
  ];

  return (
    <div className="page-container">
      <div className="welcome-box">
        📊 <strong>Streak & Stats</strong><br />
        Visualize your historical progress!
      </div>

      <div className="profile-card">
        🔥 <strong>Current Streak:</strong> {stats.currentStreak} days<br />
        🏆 <strong>Longest Streak:</strong> {stats.longestStreak} days
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip wrapperStyle={{ fontSize: '12px' }} />
          <Bar dataKey="value" fill="#22d3ee" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <button className="tab-box" onClick={resetStats}>
        🔄 Reset Streak
      </button>
    </div>
  );
}
