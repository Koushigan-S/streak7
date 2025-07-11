export default function WelcomeCard({ name = "Nova" }) {
  return (
    <div className="bg-[#1e293b] text-white p-4 m-4 rounded-lg shadow-lg border border-cyan-600">
      <p className="text-md">Howdy <span className="font-bold">@{name}</span>! How are you feeling?</p>
    </div>
  );
}
