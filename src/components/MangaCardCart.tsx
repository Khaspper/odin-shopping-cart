import { Link } from "react-router-dom";
import type { TManga } from "../Types";

type TMangaCardCart = {
  manga: TManga;
  deleteManga: (manga: TManga) => void;
};

export default function MangaCardCart({ manga, deleteManga }: TMangaCardCart) {
  return (
    <div className="flex grow shrink p-5 gap-10 text-white border-t-2 w-screen h-[250px] items-center">
      <Link to={`/manga/${manga.titleEnglish}`}>
        <img
          src={manga.imgJPG}
          alt={`manga cover`}
          crossOrigin="anonymous"
          width={100}
          className="transition delay-100 duration-300 ease-in-out hover:scale-110 cursor-pointer  border-white sm:w-[150px]"
        />
      </Link>
      <div>
        <Link to={`/manga/${manga.titleEnglish}`}>
          <h1 className=" border-white text-wrap max-w-[700px] sm:text-5xl">
            {manga.titleEnglish}
          </h1>
        </Link>
        <div className="flex sm:text-xl mt-2">
          <Link to={`/manga/${manga.titleEnglish}`} className="flex">
            {manga.authors.map((author) => (
              <h3 key={author}>{author}&nbsp;</h3>
            ))}
          </Link>
        </div>
      </div>
      <button
        type="button"
        className="ml-auto self-start cursor-pointer rounded-full text-2xl"
        onClick={() => deleteManga(manga)}
      >
        X
      </button>
    </div>
  );
}
