import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Specialities from "./components/Specialities";
import Prepaid from "./components/Prepaid";
import Staff from "./components/Staff";
import Error from "./components/Error";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/especialidades">
          <Specialities />
        </Route>
        <Route exact path="/prestaciones">
          <Prepaid />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
