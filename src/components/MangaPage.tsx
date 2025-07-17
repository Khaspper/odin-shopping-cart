import { useParams } from "react-router-dom";
import { MangaData } from "./data/MangaData";
import Navbar from "./Navbar";

export default function MangaPage() {
  const { mangaName } = useParams();
  const chosenManga = MangaData.find(
    (manga) => manga.titleEnglish === mangaName
  )!;
  //TODO: change this design for the navbar
  return (
    <div className="h-full bg-zinc-800 flex flex-col gap-5 items-center px-3 py-5">
      <Navbar />
      <picture>
        <source srcSet={chosenManga.imgWEBP} type="image/webp" />
        <img
          src={chosenManga.imgJPG}
          alt={`Cover manga image for ${chosenManga.titleEnglish}`}
          width={300}
          crossOrigin="anonymous"
        />
      </picture>
      <section className="flex flex-col text-white gap-2">
        <p className="text-white p-2 overflow-auto bg-zinc-700 rounded-2xl text-center text-5xl flex flex-col gap-2">
          {chosenManga.titleEnglish}
          <br />
          <p className="text-base">{chosenManga.titleJapanese}</p>
        </p>
        <section className="text-white rounded-2xl grid grid-cols-2 gap-2">
          <section className="bg-zinc-700 p-2 rounded-2xl">
            <p>Authors:</p>
            <div className="flex justify-center flex-col overflow-auto gap-1">
              {chosenManga.authors.map((author) => (
                <p>{author}</p>
              ))}
            </div>
          </section>
          <section className="flex flex-col justify-around bg-zinc-700 p-2 rounded-2xl">
            <p>Score:</p>
            <p>{chosenManga.score} / 10</p>
          </section>
        </section>
        <p className="text-white p-2 max-h-[200px] overflow-auto bg-zinc-700 rounded-2xl">
          {chosenManga.synopsis}
        </p>
        <ul className="text-white p-2 max-h-[100px] overflow-auto bg-zinc-700 rounded-2xl list-disc list-inside">
          {chosenManga.genre.map((genre) => (
            <li>{genre}</li>
          ))}
        </ul>
      </section>
      <button
        type="button"
        className="bg-zinc-700 container py-5 rounded-full text-white hover:cursor-pointer transition delay-100 duration-300 ease-in-out hover:scale-103"
      >
        Add to cart
      </button>
    </div>
  );
}
