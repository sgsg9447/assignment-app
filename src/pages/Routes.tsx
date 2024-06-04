import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ServicePage from "./ServicePage";
import ErrorPage from "./ErrorPage";
import AuthLayout from "./AuthLayout";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<ServicePage />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </ReactRouterRoutes>
  );
};
