import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Prepaid from "./components/Prepaid";
import Staff from "./components/Staff";
import Error from "./components/Error";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
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
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
