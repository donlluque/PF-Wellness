import React from 'react';
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
import UserProfile from "./components/UserProfile";
import Turnos from "./components/Turnos";
import Calendar from "./components/Calendar";
import MakePayments from "./components/MakePayments";
import FormTestimonial from "./components/FormTestimonal";
import AdminProfile from "./components/admin/AdminProfile";
import { Context } from "./components/Context";

export default function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [mostrar, setMostrar] = React.useState(true);
  return (
    <BrowserRouter>
    <Context.Provider value={{mostrar, setMostrar}}>
      <Route path="/">
        {mostrar && <NavBar />}
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
        <Route exact path="/turnos">
          <Turnos />
        </Route>

        <Route exact path="/userProfile/:id">
          <UserProfile />
        </Route>
        <Route exact path="/calendar/:idDoctor">
          <Calendar />
        </Route>
        <Route exact path="/admin">
          <AdminProfile />
        </Route>
        <Route exact path="/payments">
          <MakePayments />
        </Route>
        <Route exact path="/testimonials">
          <FormTestimonial />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}
