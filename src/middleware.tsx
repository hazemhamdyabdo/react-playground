import { Outlet, useLocation, Navigate } from "react-router";

export function MiddleWare() {
  const tokken = localStorage.getItem("tokken");
  const location = useLocation();
  const to = location.pathname;

  if (!tokken) {
    return <Navigate to="/login" />;
  } else if (tokken && to === "login") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
