import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Especialidades from "./components/Especialidades";
import Prestaciones from "./components/Prestaciones";
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
          <Especialidades />
        </Route>
        <Route exact path="/prestaciones">
          <Prestaciones />
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
