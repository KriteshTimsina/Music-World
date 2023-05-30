import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import getAlbums from "@/lib/getAlbums";
import { usePathname } from "next/navigation";
import { IAlbum } from "@/types/types";

const Albums = ({ albums, title }: { albums: IAlbum[]; title: string }) => {
  const [page, setPage] = useState<number>(2);
  const path = usePathname();

  if (albums.length === 0) {
    const { data } = useQuery({
      queryKey: [page],
      queryFn: () => getAlbums(page),
      initialData: albums,
      keepPreviousData: true,
    });
    albums = data;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-fit">
      <div className="flex items-center self-start ">
        <h2 className="font-semibold">{title} </h2>
        {path === "/" && <AiOutlineFire size={20} color="orange" />}
      </div>
      {albums.length > 0 && (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3  lg:grid-cols-4">
          {albums.map((item: IAlbum) => {
            let album;
            path === "/" ? (album = item.item) : (album = item);
            return (
              <Link
                key={album.id}
                href={`/album/${album.id}`}
                className="flex flex-col items-center gap-3 w-36 sm:w-60 hover:scale-105 hover:transition-all hover:duration-100"
              >
                <img
                  className="w-full rounded-md "
                  src={album.cover_art_thumbnail_url}
                  alt={album.artist.name}
                />
                <h2 className="w-full">{album.artist.name}</h2>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Albums;
