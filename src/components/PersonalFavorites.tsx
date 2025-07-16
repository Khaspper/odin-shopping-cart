import MangaCard from "./MangaCard";
import { favoriteMangas } from "../assets/FavoriteManga";

export default function PersonalFavorites() {
  return (
    <div className="border-2 flex m-4 md:m-10 md:self-end">
      {favoriteMangas.map((manga) => (
        <MangaCard key={manga.id} manga={manga} />
      ))}
    </div>
  );
}
