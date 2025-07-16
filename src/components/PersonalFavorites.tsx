import MangaCard from "./MangaCard";

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
