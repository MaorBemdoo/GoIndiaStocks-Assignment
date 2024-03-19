import ResponsiveTab from "@/components/ResponsiveTab";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="max-w-full overflow-hidden flex">
      <Sidebar />
      <ResponsiveTab />
    </main>
  );
}
