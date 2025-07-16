import type { TManga } from "../Types";

type TMangaCard = {
  manga: TManga;
};

export default function MangaCard({ manga }: TMangaCard) {
  console.log(manga);
  return (
    <div className="flex flex-col justify-between grow w-[90px] md:w-[100px] xl:w-[110px] p-3">
      <img
        src={manga.imgJPG}
        alt={`${manga.titleEnglish} manga cover`}
        className="transition delay-100 duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      <p className="truncate text-center text-white">{manga.titleEnglish}</p>
    </div>
  );
}
