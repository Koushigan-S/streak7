import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Daily", path: "/" },
  { label: "Weekly", path: "/weekly" },
  { label: "Monthly", path: "/monthly" },
  { label: "Yearly", path: "/yearly" },
  { label: "Health", path: "/health" },
  { label: "Streak", path: "/streak" },
];

export default function TabMenuDrawer({ show, onClose }) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black/70 z-50 ${show ? "block" : "hidden"}`}>
      <div className="bg-[#1e293b] w-3/4 h-full p-4">
        <h2 className="text-xl text-cyan-400 mb-4 font-bold">Tabs</h2>
        {tabs.map((tab) => (
          <NavLink
            to={tab.path}
            key={tab.path}
            onClick={onClose}
            className="block text-white py-2 px-3 rounded hover:bg-cyan-700"
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
