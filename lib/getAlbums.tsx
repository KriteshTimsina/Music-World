import axios from "axios";

export default async function getAlbums(page: number) {
  const options = {
    method: "GET",
    url: process.env.baseURL + "/chart/albums/",
    params: {
      per_page: "10",
      page: page.toString(),
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data.chart_items;
  } catch (error) {
    console.error(error);
  }
}
