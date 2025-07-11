import { useState } from "react";
import NavbarMobile from "@/components/NavbarMobile";
import TabMenuDrawer from "@/components/TabMenuDrawer";
import WelcomeCard from "@/components/WelcomeCard";
import ProfileCard from "@/components/ProfileCard";
import ProgressCard from "@/components/ProgressCard";

export default function Home() {
  const [showTabs, setShowTabs] = useState(false);

  return (
    <div className="bg-[#0f172a] min-h-screen">
      <NavbarMobile onToggle={() => setShowTabs(true)} />
      <TabMenuDrawer show={showTabs} onClose={() => setShowTabs(false)} />

      <WelcomeCard name="Nova" />
      <ProfileCard />
      <ProgressCard title="Daily Tasks" completed={3} total={5} />
      <ProgressCard title="Weekly Tasks" completed={2} total={4} />
      <ProgressCard title="Monthly Goals" completed={1} total={3} />
    </div>
  );
}
