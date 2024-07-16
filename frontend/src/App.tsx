import React from "react";
import GlobalContextProvider from "./data/GlobalContext";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
  import { ToastContainer } from "react-toastify";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about-us",
      element: <AboutUsPage />,
    },
    {
      path: "/profile/:id",
      element: <div>User Profile</div>,
    },
  ]);

  function App() {
    return (
      <GlobalContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </GlobalContextProvider>
    );
  }

export default App;
