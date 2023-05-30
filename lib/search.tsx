import axios from "axios";

export async function searchAlbums(query: string) {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/search/multi/",
    params: {
      q: query,
      per_page: "5",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
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
