import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Usuario() {
  const { user } = useAuth0();
  console.log(user, "usario");

  let usuario = "";

  if (user.localhost === "admin") {
    usuario = "http://localhost:3000/admin";
  } else {
    usuario = "http://localhost:3000/";
  }

  return usuario;
}
