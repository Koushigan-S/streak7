// utils/taskUtils.js

// --- Helper to get storage key by tab ---
const getKey = (tab) => `streak7-${tab}-tasks`;

// --- Save Task Status ---
export function saveTaskStatus(tab, tasks) {
  localStorage.setItem(getKey(tab), JSON.stringify(tasks));
}

// --- Load Task Status ---
export function loadTaskStatus(tab) {
  const stored = localStorage.getItem(getKey(tab));
  return stored ? JSON.parse(stored) : null;
}

// --- Auto Reset Logic ---
export function shouldReset(tab) {
  const key = `streak7-${tab}-lastCheck`;
  const lastCheck = localStorage.getItem(key);
  const now = new Date();
  let should = false;

  if (!lastCheck) {
    should = true;
  } else {
    const then = new Date(lastCheck);
    if (tab === "daily" && then.toDateString() !== now.toDateString()) should = true;
    if (tab === "weekly" && getWeek(then) !== getWeek(now)) should = true;
    if (tab === "monthly" && then.getMonth() !== now.getMonth()) should = true;
    if (tab === "yearly" && then.getFullYear() !== now.getFullYear()) should = true;
  }

  if (should) {
    localStorage.removeItem(getKey(tab));
  }

  localStorage.setItem(key, now.toISOString());
}

// --- Week Number Helper ---
function getWeek(date) {
  const firstDay = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - firstDay) / 86400000 + firstDay.getDay() + 1) / 7);
}
