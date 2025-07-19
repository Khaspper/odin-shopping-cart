import type { TManga } from "../Types";
import Navbar from "./Navbar";
type TMangaPage = {
  chosenManga: TManga[];
  setChosenManga: React.Dispatch<React.SetStateAction<TManga[]>>;
};

export default function Cart({ chosenManga, setChosenManga }: TMangaPage) {
  return (
    <>
      <div className="w-screen flex justify-center items-center border-2">
        <Navbar />
      </div>
      <div className="border-2 h-[100%] flex flex-col"></div>
    </>
  );
}
