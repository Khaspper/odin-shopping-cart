import MangaCardCart from "./MangaCardCart";
import type { TManga } from "../Types";
import Navbar from "./Navbar";
type TMangaPage = {
  chosenManga: TManga[];
  deleteManga: (manga: TManga) => void;
};

export default function Cart({ chosenManga, deleteManga }: TMangaPage) {
  return (
    <div className="min-h-[100vh] bg-zinc-800">
      <div className="flex justify-center items-center border-2">
        <Navbar chosenManga={chosenManga} />
      </div>
      <div className="h-[100%] flex flex-wrap gap-4">
        {chosenManga.map((manga) => (
          <MangaCardCart
            key={manga.id}
            manga={manga}
            deleteManga={deleteManga}
          />
        ))}
      </div>
    </div>
  );
}
