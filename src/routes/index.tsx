import { Route, Routes } from "react-router";
import { HomePage } from "../pages";
import { DetailsPage } from "../pages/details";
import { DashboardLayout } from "../layouts/dashboard";
import { AuthLayoute } from "../layouts/auth";
import { LoginPage } from "../pages/login";
import { MiddleWare } from "../middleware";

export const Ruotes = function () {
  return (
    <Routes>
      <Route Component={MiddleWare}>
        <Route Component={DashboardLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/details" Component={DetailsPage} />
        </Route>
      </Route>

      <Route Component={AuthLayoute}>
        <Route path="/login" Component={LoginPage} />
      </Route>
    </Routes>
  );
};
