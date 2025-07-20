import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MangaPage from "./pages/MangaPage";
import Cart from "./components/Cart";
import type { TManga } from "./Types";
import { useState } from "react";
import Shop from "./pages/Shop";
import Popular from "./components/Popular";
import OnGoing from "./components/OnGoing";
import CommunityFavorites from "./components/CommunityFavorites";

export default function App() {
  //! Look at local storage first
  const [chosenManga, setChosenManga] = useState<TManga[]>([]);
  function handleDeleteManga(mangaToDelete: TManga) {
    const newMangaList = chosenManga.filter(
      (manga) => manga.titleEnglish !== mangaToDelete.titleEnglish
    );
    setChosenManga(newMangaList);
  }

  function handleAddManga(mangaToAdd: TManga) {
    if (!chosenManga.includes(mangaToAdd)) {
      console.log(`Manga to add: ${mangaToAdd.titleEnglish}`);
      console.log(chosenManga);
      setChosenManga([...chosenManga, mangaToAdd]);
    }
  }

  const routes = [
    {
      path: "/",
      element: <Home chosenManga={chosenManga} />,
    },
    {
      path: "manga/:mangaName",
      element: <MangaPage addManga={handleAddManga} mangaList={chosenManga} />,
    },
    {
      path: "/cart",
      element: (
        <Cart chosenManga={chosenManga} deleteManga={handleDeleteManga} />
      ),
    },
    {
      path: "/shop",
      element: <Shop chosenManga={chosenManga} />,
      children: [
        {
          path: "/shop/popular",
          element: <Popular />,
        },
        {
          path: "/shop/ongoing",
          element: <OnGoing />,
        },
        {
          path: "/shop/community-favorite",
          element: <CommunityFavorites />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
