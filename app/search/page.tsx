"use client";
import Albums from "@/components/home/Albums";
import { searchAlbums } from "@/lib/search";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
const page = () => {
  const [query, setQuery] = useState<string>("");
  const [searchedData, setSearchedData] = useState<string>("");
  const [albums, setAlbums] = useState<any>([]);

  function getSearchedQuery(e: any): void {
    e.preventDefault();
    setSearchedData(query);
  }

  useEffect(() => {
    async function getAlbums() {
      const data = await searchAlbums(searchedData);
      setAlbums(data);
    }

    getAlbums();
  }, [searchedData]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[300px] md:w-[500px] border-[1px] flex items-center h-14 rounded-md gap-2">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search albums,artists or songs"
          className="border-none outline-none indent-1 w-[90%]  h-full focus:rounded-md focus:outline-primary focus:outline-1"
        />
        <BiSearch
          onClick={(e) => getSearchedQuery(e)}
          size={25}
          className="hover:text-primary  cursor-pointer"
        />
      </div>
      <div>
        {albums.length === 0 ? (
          <div className="mt-10">No albums to display</div>
        ) : (
          <div className="mb-5">
            <Albums albums={albums} title={"Search Results"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
