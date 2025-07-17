import Home from "../pages/Home";
import MangaPage from "../components/MangaPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "test/:mangaName",
    element: <MangaPage />,
  },
];
