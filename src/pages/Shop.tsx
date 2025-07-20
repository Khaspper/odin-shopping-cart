import type { TManga } from "../Types";

type TStore = {
  chosenManga: TManga[];
};

export default function Shop({ chosenManga }: TStore) {
  return (
    <>
      <h1>Store: {chosenManga.length > 0 && chosenManga[0].titleEnglish}</h1>
    </>
  );
}
