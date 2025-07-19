import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MangaPage from "./pages/MangaPage";
import Cart from "./components/Cart";
import type { TManga } from "./Types";
import { useState } from "react";

export default function App() {
  //! Look at local storage first
  const [chosenManga, setChosenManga] = useState<TManga[]>([]);

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "manga/:mangaName",
      element: <MangaPage setChosenManga={setChosenManga} />,
    },
    {
      path: "/cart",
      element: (
        <Cart chosenManga={chosenManga} setChosenManga={setChosenManga} />
      ),
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
