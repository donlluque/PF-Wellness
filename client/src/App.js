import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Staff from "./components/pages/Staff";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Specialties from "./components/pages/Specialties";
import Prepaid from "./components/pages/Prepaid";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Turnos from "./components/pages/Turnos";
import Calendar from "./components/Calendar";
import MakePayments from "./components/MakePayments";
import PrivateRouteAdmin from "./components/private/PrivateRouteAdmin";
import PrivateRoutePerfil from "./components/private/PrivateRoutePerfil";
// import PrivateRouterPago from "./components/private/PrivateRoutePago";
import PrivateRouterCalendario from "./components/private/PrivateRouterCalendario";
import PrivateRoute from "./components/private/PrivateRoute";

import AdminProfile from "./components/admin/AdminProfile";
import DoctorProfile from "./components/doctor/DoctorProfile";
import FormTestimonial from "./components/FormTestimonal";
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
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
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
        <PrivateRouterCalendario exact path="/turnos">
          <Turnos />
        </PrivateRouterCalendario>
        <PrivateRoutePerfil exact path="/userProfile/:id">
          <UserProfile />
        </PrivateRoutePerfil>
        <PrivateRouterCalendario exact path="/calendar/:idDoctor">
          <Calendar />
        </PrivateRouterCalendario>
        <PrivateRouteAdmin exact path="/admin">
          <AdminProfile />
        </PrivateRouteAdmin>
        <Route exact path="/doctor">
          <DoctorProfile />
        </Route>
        <Route exact path="/payments">
          <MakePayments />
        </PrivateRouterPago>
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
