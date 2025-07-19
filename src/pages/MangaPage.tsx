import { useParams } from "react-router-dom";
import { mangaData } from "../components/data/MangaData";
import Navbar from "../components/Navbar";
import type { TManga } from "../Types";

type TMangaPage = {
  setChosenManga: React.Dispatch<React.SetStateAction<TManga[]>>;
};

export default function MangaPage({ setChosenManga }: TMangaPage) {
  const { mangaName } = useParams();
  const chosenManga = mangaData.find(
    (manga) => manga.titleEnglish === mangaName
  )!;
  //TODO: change this design for the navbar
  return (
    <div className="h-full lg:h-screen bg-zinc-800 flex flex-col gap-5 items-center px-3 py-5 lg:grid lg:grid-cols-2 ">
      <div className="grid">
        <div>
          <Navbar />
        </div>
        <picture className="flex justify-center">
          <source srcSet={chosenManga.imgWEBP} type="image/webp" />
          <img
            src={chosenManga.imgJPG}
            alt={`Cover manga image for ${chosenManga.titleEnglish}`}
            width={300}
            crossOrigin="anonymous"
          />
        </picture>
      </div>
      <section className="flex flex-col text-white gap-5">
        <div className="text-white p-2 overflow-auto bg-zinc-700 rounded-2xl text-center text-5xl flex flex-col gap-2">
          <h1>{chosenManga.titleEnglish}</h1>
          <h2 className="text-base">{chosenManga.titleJapanese}</h2>
        </div>
        <section className="text-white rounded-2xl grid grid-cols-2 sm:grid-cols-3 gap-2">
          <section className="bg-zinc-700 p-2 rounded-2xl">
            <h1 className="text-2xl">Authors</h1>
            <div className="flex justify-center flex-col overflow-auto gap-1">
              {chosenManga.authors.map((author) => (
                <h2 role="author" key={author}>
                  {author}
                </h2>
              ))}
            </div>
          </section>
          <section className="flex flex-col bg-zinc-700 p-2 rounded-2xl">
            <h1 className="text-2xl">Score</h1>
            <h2 role="score">{chosenManga.score} / 10</h2>
          </section>
          <section className="p-2 bg-zinc-700 rounded-2xl col-span-2 sm:col-span-1">
            <h1 className="text-2xl text-center">Genres</h1>
            <ul className="text-white max-h-[100px] overflow-auto list-disc list-inside">
              {chosenManga.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </section>
        </section>
        <p className="text-white p-2 max-h-[200px] overflow-auto bg-zinc-700 rounded-2xl">
          {chosenManga.synopsis}
        </p>
        <button
          type="button"
          className="bg-zinc-700 container py-5 rounded-full text-white hover:cursor-pointer transition delay-100 duration-300 ease-in-out hover:scale-103 ml-auto mr-auto"
          onClick={() => setChosenManga((oldCart) => [...oldCart, chosenManga])}
        >
          Add to cart
        </button>
      </section>
    </div>
  );
}
