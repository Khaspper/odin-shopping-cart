import type { TManga } from "../Types";

type TFilter = "" | "publishing" | "upcoming" | "bypopularity" | "favorite";

export default async function fetchManga(
  limit: number = 3,
  filter: TFilter = ""
) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/manga?limit=${limit}&${filter}`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} ${response.statusText}`
      );
    }
    const mangas: TManga[] = [];
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
      mangas.push(manga);
    }
    console.log(mangas);
    return mangas;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
