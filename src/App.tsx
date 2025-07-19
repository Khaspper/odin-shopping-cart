import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MangaPage from "./pages/MangaPage";
import Cart from "./components/Cart";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "manga/:mangaName",
      element: <MangaPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
