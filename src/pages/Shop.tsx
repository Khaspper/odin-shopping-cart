import type { TManga } from "../Types";
import Navbar from "../components/Navbar";
import MangaFilter from "../components/MangaFilter";
import { Outlet } from "react-router-dom";

type TStore = {
  chosenManga: TManga[];
};

export default function Shop({ chosenManga }: TStore) {
  return (
    <div className=" bg-stone-900 h-screen">
      <div className="flex justify-start">
        <Navbar chosenManga={chosenManga} />
        <MangaFilter />
      </div>
      <Outlet />
    </div>
  );
}
