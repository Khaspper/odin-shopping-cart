import Home from "../pages/Home";
import MangaPage from "../pages/MangaPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "manga/:mangaName",
    element: <MangaPage />,
  },
];
