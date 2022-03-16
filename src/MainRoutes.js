import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreditCard from "./components/Credit/CreditCard";
import Login from "./components/Login/Login";
import EditTour from "./components/Product/EditTour";
import Hero from "./components/Slider/Hero";
import { useAuth } from "./contexts/AuthContext";
import { ADMIN } from "./helpers/consts";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import TourDetailsPage from "./pages/TourDetailsPage";
import TourPage from "./pages/TourPage";
import Car from "../src/components/Car/Car";
import CreditCardPage from "../src/components/CreditCard/CreditCardPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/contact",
      element: <ContactsPage />,
      id: 4,
    },
    {
      link: "/products",
      element: <TourPage />,
      id: 5,
    },
    {
      link: "/login",
      element: <Login />,
      id: 6,
    },
    {
      link: "/slide",
      element: <Hero />,
      id: 7,
    },
    {
      link: "/products/:id",
      element: <TourDetailsPage />,
      id: 8,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 9,
    },
    {
      link: "/credit",
      element: <CreditCard />,
      id: 10,
    },
    {
      link: "/car",
      element: <Car />,
      id: 11,
    },
    {
      link: "/buy",
      element: <CreditCardPage />,
      id: 12,
    },
  ];
  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditTour />,
      id: 2,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
