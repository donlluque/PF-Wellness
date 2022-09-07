import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

export default function PrivateRouteAdmin(props) {
  const { isAuthenticated } = useAuth0();
  const usuarioOS = useSelector(
    (state) => state.user.prepaid_healths?.[0].name
  );

  console.log(usuarioOS, "usuarioOS");

  if (!isAuthenticated) return <Redirect to="/" />;
  if (usuarioOS !== "Wellness") return <Redirect to="/" />;

  return <Route {...props} />;
}
