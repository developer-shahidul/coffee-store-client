import { StrictMode } from "react";
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
import Users2 from "./Components/Users/Users2.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App />,
        loader: async () => {
          const res = await fetch(
            "https://coffee-store-server-rho-eight.vercel.app/coffee"
          );
          if (!res.ok) {
            throw new Response("Failed to load coffees", {
              status: res.status,
            });
          }
          return res.json(); // অবশ্যই res.json() — না করলে map error আসবে
        },
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://coffee-store-server-rho-eight.vercel.app/coffee/${params.id}`
          );
          if (!res.ok) {
            throw new Response("Coffee not found", { status: 404 });
          }
          return res.json();
        },
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
        element: <Users />,
        loader: async () => {
          const res = await fetch(
            "https://coffee-store-server-rho-eight.vercel.app/users"
          );
          if (!res.ok) {
            throw new Response("Failed to load users", { status: res.status });
          }
          return res.json();
        },
      },
      {
        path: "/users2",
        element: <Users2></Users2>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
