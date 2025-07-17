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
          <p>{chosenManga.titleEnglish}</p>
          <p className="text-base">{chosenManga.titleJapanese}</p>
        </div>
        <section className="text-white rounded-2xl grid grid-cols-2 gap-2">
          <section className="bg-zinc-700 p-2 rounded-2xl">
            <p>Authors:</p>
            <div className="flex justify-center flex-col overflow-auto gap-1">
              {chosenManga.authors.map((author) => (
                <p key={author}>{author}</p>
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
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-zinc-700 container py-5 rounded-full text-white hover:cursor-pointer transition delay-100 duration-300 ease-in-out hover:scale-103 ml-auto mr-auto"
        >
          Add to cart
        </button>
      </section>
    </div>
  );
}
