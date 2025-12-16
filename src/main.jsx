import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Layout from "./Components/Layout.jsx";
import Error from "./Components/Error/Error.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./Components/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("coffee-management-server.vercel.app/coffee"),
      },
      {
        path: "/coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`coffee-management-server.vercel.app/coffee/${params.id}`),
      },

      {
        path: "/error",
        element: <Error></Error>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("coffee-management-server.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
