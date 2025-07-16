import type { TManga } from "../Types";

type TMangaCard = {
  manga: TManga;
};

export default function MangaCard({ manga }: TMangaCard) {
  console.log(manga);
  return (
    <div className="border-2">
      <img src={manga.imgJPG} alt={`${manga.titleEnglish} manga cover`} />
      <p>{manga.titleEnglish}</p>
    </div>
  );
}
