import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Sidebar />
      <DiscussionForum />
      <MarketStories />
    </main>
  );
}
