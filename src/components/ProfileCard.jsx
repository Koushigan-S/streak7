export default function ProfileCard() {
  return (
    <div className="bg-[#1e293b] text-white p-4 m-4 rounded-lg border border-cyan-600 shadow">
      <div className="text-center">
        <img
          src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Nova"
          alt="avatar"
          className="w-16 h-16 mx-auto rounded-full mb-2"
        />
        <h2 className="text-lg font-bold">Nova</h2>
        <p className="text-sm text-purple-300">Level 1 • Bronze Rank</p>
      </div>
      <div className="mt-3 text-sm space-y-1">
        <p>🔥 1 Day Streak</p>
        <p>🏅 60 XP</p>
        <p>🎖️ 1 Badge</p>
      </div>
    </div>
  );
}
