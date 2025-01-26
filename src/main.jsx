import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import PanchangPage from "./Components/PanchangPage/PanchangPage.jsx";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store.js";
const createRouter = createHashRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/panchang",
        element: <PanchangPage />,
      },
      {
        path:"*",
        element:<h1>Page Not Found</h1>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createRouter}></RouterProvider>
  </StrictMode>
);
