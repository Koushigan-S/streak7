// components/ProgressBar.jsx

export default function ProgressBar({ completed, total }) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center" }}>{percent}% complete</p>
    </div>
  );
}
