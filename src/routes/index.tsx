import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Players from "../pages/players/Players";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/jugadores",
    element: <Players />,
  },
];

export const router = createBrowserRouter(routes);
