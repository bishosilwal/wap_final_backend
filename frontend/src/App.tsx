import React from "react";
import GlobalContextProvider from "./data/GlobalContext";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:id",
    element: <div>User Profile</div>,
  },
]);

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

export default App;
