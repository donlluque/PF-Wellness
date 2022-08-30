import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute(props) {
  const { user } = useAuth0();
  if (!user) {
    return <Route {...props} />;
  }

  if (user.tipoRol[0] === "admin") return <Redirect to="/admin" />;

  return <Route {...props} />;
}
