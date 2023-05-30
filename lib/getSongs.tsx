import axios from "axios";

export async function getSongs(id: string | null) {
  const options = {
    method: "GET",
    url: process.env.baseURL + "/album/appearances/",
    params: { id: id?.toString(), per_page: "20", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
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
