import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import {ErrorPage, LoginPage, MyBookShelf, SearchPage, SignupPage} from "./pages";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/myBookShelf",
        element: <MyBookShelf />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
