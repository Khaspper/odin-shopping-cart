import MangaCard from "./MangaCard";
import { favoriteMangas } from "../assets/FavoriteManga";

export default function PersonalFavorites() {
  return (
    <div className="flex m-4 md:m-10 self-end gap-3.5 bg-black/50 backdrop-blur-sm rounded-xl flex-col w-fit h-[min(50vw,200px)] items-center md:w-[max(450px,25vw)] md:h-[200px]">
      <p className="text-white text-center p-1">My Favorite Manga</p>
      <div className="flex flex-wrap truncate justify-center items-">
        {favoriteMangas.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </div>
  );
}
