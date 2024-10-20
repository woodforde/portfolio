import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@routes/root";
import ErrorPage from "@pages/errorPage/errorPage.index";
import HomePage from "@pages/homePage/homePage.index";
import CardListPage from "@pages/cardListPage/cardListPage.index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            { path: "/card-list", element: <CardListPage /> },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
