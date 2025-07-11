export default function ProgressCard({ title, completed, total }) {
  const percent = Math.round((completed / total) * 100);
  return (
    <div className="bg-[#1e293b] text-white p-4 m-4 rounded-lg border border-cyan-600 shadow">
      <h3 className="text-md font-bold mb-2">{title}</h3>
      <div className="w-full bg-gray-800 rounded h-2 mb-1">
        <div
          className="bg-cyan-400 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs">{completed} of {total} tasks complete ({percent}%)</p>
    </div>
  );
}
