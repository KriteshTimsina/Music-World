"use client";
import { getSongs } from "@/lib/getSongs";
import React, { useEffect, useState } from "react";
import SongDisplay from "./SongDisplay";
import { BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { RxLoop } from "react-icons/rx";

const Details = ({ data }: { data: any }) => {
  const [showMusicBar, setShowMusicBar] = useState<boolean>(false);
  const [songs, setSongs] = useState<any>([]);
  useEffect(() => {
    async function getDetails() {
      const result = await getSongs(data.id);
      setSongs(result);
    }
    getDetails();
  }, []);

  function handlePlayMusic(e: any) {
    e.preventDefault();
    setShowMusicBar(true);
  }
  return (
    <div className="flex flex-col items-center md:items-start px-10">
      <div className="flex gap-4 items-center justify-center flex-col md:flex-row">
        <div>
          <img
            src={data.cover_art_thumbnail_url}
            alt={data.full_title}
            className="rounded-md w-96"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-6 ">
          <h2 className=" text-base md:text-xl  font-semibold order-2 md:order-1">
            {data.name} | {data.artist.name}
          </h2>
          <h1 className="text-xl md:text-3xl font-bold order-3 md:order-2">
            {data.name}
          </h1>

          <ul className="list-disc flex  gap-5 text-washed text-sm order-4 md:order-3">
            <li className="list-none">{data.artist.name}</li>
            <li>{data.release_date_components.year}</li>
          </ul>

          <div className="order-1 md:order-4">
            <button
              onClick={(e) => handlePlayMusic(e)}
              className="rounded-full flex justify-center bg-primary hover:bg-amber-600 transition-all  text-white p-2 items-center w-full md:w-40"
            >
              Play All
            </button>
          </div>
        </div>
      </div>

      <div className="m-10 w-[90vw] md:w-[50vw] mb-20">
        <SongDisplay songs={songs} handlePlayMusic={handlePlayMusic} />
      </div>
      {showMusicBar && (
        <div className="cursor-pointer fixed bottom-0 md:ml-10 bg-slate-100 flex gap-4 w-screen md:w-[50vw] justify-center h-16 items-center">
          <BsShuffle />
          <BiSkipPrevious size={30} />

          <BsFillPauseCircleFill size={50} />

          <BiSkipNext size={30} />
          <RxLoop />
        </div>
      )}
    </div>
  );
};

export default Details;
