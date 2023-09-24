import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import ServicePlans from "./components/ServicePlans";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ToDo from "./components/ToDo";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { element } from "prop-types";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/products",
        loader: () => fetch("https://dummyjson.com/products"),
        element: <Products></Products>,
      },
      {
        path: "/product/:productId",
        // loader: ({ params }) => console.log(params.productId),
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.productId}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <ServicePlans></ServicePlans>,
      },
      {
        path: "/todo",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        element: <ToDo></ToDo>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
