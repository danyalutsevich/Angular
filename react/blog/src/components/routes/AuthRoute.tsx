import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  const [cookies] = useCookies(["token"]);
  const [auth, setAuth] = useState(cookies.token ? true : false);


  return auth ? <Outlet /> : <Navigate to="auth" />;
}

export default AuthRoute;
