import App from "../App";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "test/:id",
    element: <App />,
  },
];
