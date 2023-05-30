import React, { useState } from "react";
import { BsPlay } from "react-icons/bs";
const SongDisplay = ({
  songs,

  handlePlayMusic,
}: {
  songs: any;

  handlePlayMusic: any;
}) => {
  return (
    <table className="  w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-900 uppercase ">
        <tr>
          <th scope="col" className=" px-6  py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Artist
          </th>
          <th scope="col" className="px-6 py-3">
            Release
          </th>
        </tr>
      </thead>
      {songs &&
        songs.map((song: any, index: number) => {
          return (
            <tbody key={song.id} className="">
              <tr
                onClick={(e) => handlePlayMusic(e)}
                className="bg-white cursor-pointer hover:bg-gray-100 group border-b-[1px]"
              >
                <td className="pr-10  px-2 py-4">{index + 1}</td>
                <th
                  scope="row "
                  className="px-2 py-4 font-medium  flex items-center gap-3"
                >
                  <div className="relative">
                    <img
                      className="rounded-full group-hover:brightness-75 max-w-[40px]"
                      src={song.header_image_thumbnail_url}
                      alt={song.title}
                    />
                    <BsPlay
                      size={25}
                      className="hidden group-hover:inline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-washed rounded-full p-1  text-white"
                    />
                  </div>
                  {song.title}
                </th>
                <td className="px-6 py-4">{song.artist_names}</td>
                <td className="px-6 py-4 ">
                  {song.release_date_for_display
                    ? song.release_date_for_display
                    : "-"}
                </td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
};

export default SongDisplay;
