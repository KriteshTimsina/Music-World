"use client";

import React from "react";
import getAlbumDetails from "@/lib/getAlbumDetails";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import Details from "@/components/albums/Details";
import Loading from "@/app/loading";

const page = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: [id],
    queryFn: () => getAlbumDetails(id),
  });

  if (isLoading) return <Loading />;
  return <div>{data && <Details data={data} />}</div>;
};

export default page;
