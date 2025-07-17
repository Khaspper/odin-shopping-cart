import { useParams } from "react-router-dom";

export default function MangaPage() {
  const { mangaName } = useParams();
  console.log(mangaName);
  return (
    <div className="h-screen bg-zinc-800">
      <p className="text-white">Hi: {mangaName}</p>
    </div>
  );
}
