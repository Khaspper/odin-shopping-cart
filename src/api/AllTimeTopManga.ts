import type { TManga } from "../Types";

export default async function AllTimeTopManga(limit = 3) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/manga?limit=${limit}`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} ${response.statusText}`
      );
    }
    const topManga: TManga[] = [];
    const json = await response.json();
    for (const data of json.data) {
      const manga: TManga = {
        titleEnglish: data.title_english,
        titleJapanese: data.title_japanese,
        synopsis: data.synopsis,
        imgWEBP: data.images.webp,
        imgJPG: data.images.jpg,
        authors: data.authors,
      };
      topManga.push(manga);
    }
    console.log(topManga);
    return topManga;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
