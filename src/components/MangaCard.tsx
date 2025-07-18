import type { TManga } from "../Types";
import { Link } from "react-router-dom";

type TMangaCard = {
  manga: TManga;
};

export default function MangaCard({ manga }: TMangaCard) {
  return (
    <Link
      to={`manga/${manga.titleEnglish}`}
      className="h-full flex flex-col justify-between grow shrink min-w-[60px] max-w-[90px] md:w-[100px] xl:w-[110px] p-3"
    >
      <img
        src={manga.imgJPG}
        alt={`${manga.titleEnglish} manga cover`}
        crossOrigin="anonymous"
        className="transition delay-100 duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
      <p className="truncate text-center text-white">{manga.titleEnglish}</p>
    </Link>
  );
}
