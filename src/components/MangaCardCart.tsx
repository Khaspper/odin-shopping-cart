import { Link } from "react-router-dom";
import type { TManga } from "../Types";

type TMangaCardCart = {
  manga: TManga;
  deleteManga: (manga: TManga) => void;
};

export default function MangaCardCart({ manga, deleteManga }: TMangaCardCart) {
  return (
    <Link to={`/manga/${manga.titleEnglish}`}>
      <h1>{manga.titleEnglish}</h1>
      <div>
        {manga.authors.map((author) => (
          <h3>{author}</h3>
        ))}
      </div>
      <button
        type="button"
        className="border-2 p-5"
        onClick={() => deleteManga(manga)}
      >
        Delete
      </button>
    </Link>
  );
}
