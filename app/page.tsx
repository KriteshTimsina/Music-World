"use client";

import Albums from "@/components/home/Albums";
import getAlbums from "@/lib/getAlbums";

export default async function Home() {
  const albums = await getAlbums(2);
  return (
    <div className="flex items-center justify-center w-full mb-5">
      <Albums albums={albums} title={"Trending Albums"} />
    </div>
  );
}
