import cover from "../assets/img/website-cover.jpg";
import Navbar from "../components/Navbar";
import PersonalFavorites from "../components/PersonalFavorites";
import type { TManga } from "../Types";

type THome = {
  chosenManga: TManga[];
};

export default function Home({ chosenManga }: THome) {
  return (
    <div
      className="h-screen bg-[url('../assets/img/website-cover.jpg')] bg-cover bg-center w-full flex flex-col justify-between relative"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Navbar chosenManga={chosenManga} />
      <PersonalFavorites />
    </div>
  );
}
