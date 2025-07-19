import { Link } from "react-router-dom";
import type { TManga } from "../Types";

type TMangaCardCart = {
  manga: TManga;
  deleteManga: (manga: TManga) => void;
};

export default function MangaCardCart({ manga, deleteManga }: TMangaCardCart) {
  return (
    <div className="flex grow shrink p-5 gap-10 max-w-[450px] text-white">
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
          <h1 className=" border-white text-wrap max-w-[200px]">
            {manga.titleEnglish}
          </h1>
        </Link>
        <div>
          <Link to={`/manga/${manga.titleEnglish}`}>
            {manga.authors.map((author) => (
              <h3 className=" border-white" key={author}>
                {author}
              </h3>
            ))}
          </Link>
        </div>
      </div>
      <button
        type="button"
        className=" p-5 ml-auto self-start cursor-pointer border-2 rounded-full"
        onClick={() => deleteManga(manga)}
      >
        Delete
      </button>
    </div>
  );
}
