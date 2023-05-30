import axios from "axios";

export async function getSongs(id: string | null) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/album/appearances/",
    params: { id: id?.toString(), per_page: "20", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    let songs: any[] = [];
    data.album_appearances.forEach((item: any) => songs.push(item.song));
    return songs;
  } catch (err) {
    console.log(err);
    return [];
  }
}
