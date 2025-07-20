import { useEffect, useState } from "react";
import fetchManga from "../api/FetchManga";
import type { TManga } from "../Types";

export default function Popular() {
  const [data, setData] = useState<TManga[] | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const fetchedData = await fetchManga(3, "", controller.signal);
        setData(fetchedData);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);

  if (data === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>{data[0].titleEnglish}</div>
    </>
  );
}
