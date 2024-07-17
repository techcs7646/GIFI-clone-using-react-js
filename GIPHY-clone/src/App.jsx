import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import Category from "./pages/category";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/favorites";






const router = createBrowserRouter([
    {
      element: <AppLayout />,
  
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:type/:slug",
          element: <GifPage />,
        },
        {
          path: "/:category",
          element: <Category />,
        },
        {
          path: "/search/:query",
          element: <SearchPage />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  const App = () => {
    return (
     
        <RouterProvider router={router} />
     
    );
  };
  
  export default App;