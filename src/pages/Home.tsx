import cover from "../assets/img/website-cover.jpg";
import Navbar from "../components/Navbar";
import PersonalFavorites from "../components/PersonalFavorites";

export default function Home() {
  return (
    <div
      className="h-screen bg-[url('../assets/img/website-cover.jpg')] bg-cover bg-center w-full flex flex-col justify-between md:grid md:grid-cols-2"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <Navbar />
      <PersonalFavorites />
    </div>
  );
}
