import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { useAuth } from "./contexts/AuthContext";
import { ADMIN } from "./helpers/consts";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";

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
      link: "/service",
      element: <ServicePage />,
      id: 5,
    },
    {
      link: "/login",
      element: <Login />,
      id: 6,
    },
  ];
  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
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
