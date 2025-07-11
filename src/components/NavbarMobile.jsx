import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center p-4 bg-[#0f172a] text-white shadow-md">
        <div>
          <h1 className="text-2xl font-extrabold text-cyan-400">STREAK7</h1>
          <h3 className="text-sm font-bold text-slate-300 tracking-wide">
            STAY CONSISTENT🚀
          </h3>
        </div>
        <button onClick={handleToggle} aria-label="Menu">
          <Menu size={28} />
        </button>
      </nav>

      {/* Dropdown Tabs */}
      {menuOpen && (
        <div className="bg-[#1e293b] text-white p-4 space-y-2 shadow-md">
          <Link to="/daily" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            📅 Daily
          </Link>
          <Link to="/weekly" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            📈 Weekly
          </Link>
          <Link to="/monthly" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            📅 Monthly
          </Link>
          <Link to="/yearly" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            🎯 Yearly
          </Link>
          <Link to="/health" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            🧬 Health
          </Link>
          <Link to="/streak" className="block rounded-md border border-cyan-500 px-3 py-2 hover:bg-cyan-500 hover:text-[#0f172a] font-medium transition">
            🔥 Streak
          </Link>
        </div>
      )}
    </>
  );
}
