import axios from "axios";

export default async function getAlbumDetails(id: string | null) {
  const options = {
    method: "GET",
    url: process.env.baseURL + "/album/details/",
    params: { id: id?.toString() },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.album;
  } catch (error) {
    console.error(error);
    return {};
  }
}
