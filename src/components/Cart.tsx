import MangaCardCart from "./MangaCardCart";
import type { TManga } from "../Types";
import Navbar from "./Navbar";
type TMangaPage = {
  chosenManga: TManga[];
  deleteManga: (manga: TManga) => void;
};

export default function Cart({ chosenManga, deleteManga }: TMangaPage) {
  return (
    <>
      <div className="w-screen flex justify-center items-center border-2">
        <Navbar />
      </div>
      <div className="border-2 h-[100%] flex flex-col">
        {chosenManga.map((manga) => (
          <MangaCardCart
            key={manga.id}
            manga={manga}
            deleteManga={deleteManga}
          />
        ))}
      </div>
    </>
  );
}
