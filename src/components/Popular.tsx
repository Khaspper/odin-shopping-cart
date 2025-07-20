import { useEffect, useRef, useState } from "react";
import fetchManga from "../api/FetchManga";
import type { TManga } from "../Types";
import MangaCard from "./MangaCard";
import { mangaData, popularMangas } from "./data/MangaData";

export default function Popular() {
  const [data, setData] = useState<TManga[] | undefined>(undefined);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    const controller = new AbortController();
    if (popularMangas.length > 0) {
      setData(popularMangas);
      return;
    } else {
      const fetchData = async () => {
        try {
          const fetchedData = await fetchManga(
            20,
            "bypopularity",
            controller.signal
          );
          popularMangas.push(...fetchedData!);
          mangaData.push(...popularMangas);
          setData(fetchedData);
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            console.log("Aborted");
            return;
          }
        }
      };
      fetchData();
    }
    return () => controller.abort();
  }, []);

  if (!data) return <p>Loading…</p>;

  return (
    <div className="flex">
      {data.map((manga) => {
        return <MangaCard key={manga.titleEnglish} manga={manga} />;
      })}
    </div>
  );
}
