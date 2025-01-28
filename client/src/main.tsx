// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { fecthCupcakes } from "./services/cupcakeService";
/* ************************************************************************* */

import App from "./App";

import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

// Define the router with routes and loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: async () => {
          const cupcakes = await fecthCupcakes(); // Corrected function name
          return cupcakes;
        },
      },
    ],
  },
]);

// Main application entry point
export default function MainApp() {
  return <RouterProvider router={router} />;
}

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <MainApp /> {/* Use the MainApp component */}
  </StrictMode>,
);
