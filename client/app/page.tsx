import { Post } from "@/components/post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LikeIt",
  description:
    "LikeIt is a decentralized social platform that combines image-style content sharing with NFTs and tokens. Posts are minted as NFTs, likes are represented by tokens, and both creators and collectors earn from engagement and resale",
};

export default function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <main className="grid place-items-center gap-6 mt-4 w-full">
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
}
