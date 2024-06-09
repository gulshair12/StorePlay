import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
