import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRouterPago(props) {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <Redirect to="/" />;
  if (user.tipoRol[0] !== "user") return <Redirect to="/" />;

  return <Route {...props} />;
}
