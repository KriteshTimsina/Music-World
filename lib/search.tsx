import axios from "axios";

export async function searchAlbums(query: string) {
  const options = {
    method: "GET",
    url: process.env.baseURL + "/search/multi/",
    params: {
      q: query,
      per_page: "5",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);
    let data = await response.data;
    data = data.sections.filter((item: any) => item.type === "album");
    let albums: any[] = [];
    data[0].hits.forEach((hit: any) => {
      albums.push(hit.result);
    });
    return albums;
  } catch (err) {
    console.log(err);
    return [];
  }
}
