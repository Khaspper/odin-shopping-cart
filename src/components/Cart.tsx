import type { TManga } from "../Types";

type TMangaPage = {
  chosenManga: TManga[];
  setChosenManga: React.Dispatch<React.SetStateAction<TManga[]>>;
};

export default function Cart({ chosenManga, setChosenManga }: TMangaPage) {
  return (
    <>
      <h1>Cart</h1>
      <div className="sticky right-0 top-0 text-white border-2 border-black bg-green-700">
        Count: {chosenManga.length}
      </div>
      <button
        type="button"
        onClick={() => setChosenManga([])}
        className="border-2 bg-green-400 p-5"
      >
        Click me!
      </button>
    </>
  );
}
