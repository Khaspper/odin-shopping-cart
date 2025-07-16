import MangaCard from "./MangaCard";

// const favoriteMangas: string[] = [
//   "Berserk",
//   "Jojo part 5",
//   "witch of atelier",
//   "The Climber",
//   "Otr of the Flame"
// ];

export default function PersonalFavorites() {
  return (
    <div className="border-2 flex m-4 md:m-10 md:self-end">
      {/* Call manga card */}
      <MangaCard id="1" />
      <MangaCard id="2" />
      <MangaCard id="3" />
      <MangaCard id="4" />
      <MangaCard id="5" />
    </div>
  );
}
