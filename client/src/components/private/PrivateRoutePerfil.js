import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoutePerfil(props) {
  var perfil = JSON.parse(localStorage.getItem("user"));

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <Redirect to={`/userProfile/${perfil.id}`} />;
  return <Route {...props} />;
}
