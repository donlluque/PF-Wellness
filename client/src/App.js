import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Staff from "./components/Staff";
import Error from "./components/Error";
import Home from "./components/Home";
import Specialties from "./components/Specialties";
import Prepaid from "./components/Prepaid";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FormUserRegistration from "./components/FormUserRegistration";

export default function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <BrowserRouter>
      <Route path="/">
        {pathname === "/about" ||
        pathname === "/especialidades" ||
        pathname === "/prestaciones" ||
        pathname === "/staff" ||
        pathname === "/" ? (
          <NavBar />
        ) : (
          false
        )}
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/especialidades">
          <Specialties />
        </Route>
        <Route exact path="/prestaciones">
          <Prepaid />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="/crearcuenta">
          <FormUserRegistration />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
