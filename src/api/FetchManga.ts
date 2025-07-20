import type { TManga } from "../Types";

type TFilter = "" | "publishing" | "bypopularity" | "favorite";

export default async function fetchManga(
  limit: number = 3,
  filter: TFilter = "",
  signal?: AbortSignal
) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/manga?limit=${limit}&${filter}`,
      {
        mode: "cors",
        signal,
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
      const genre: string[] = [];
      for (const genres of data.genres) {
        genre.push(genres.name);
      }

      const manga: TManga = {
        id: crypto.randomUUID(),
        titleEnglish: data.title_english,
        titleJapanese: data.title_japanese,
        synopsis: data.synopsis,
        imgWEBP: data.images.webp.large_image_url,
        imgJPG: data.images.jpg.large_image_url,
        authors: data.authors,
        score: data.score,
        genres: genre,
      };
      mangas.push(manga);
    }
    return mangas;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
