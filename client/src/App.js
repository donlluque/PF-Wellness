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

import AdminProfile from "./components/admin/AdminProfile";
import DoctorProfile from "./components/doctor/DoctorProfile";

export default function App() {
  const { pathname } = useLocation();
  console.log(pathname);
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
          <Specialties />
        </Route>
        <Route exact path="/prestaciones">
          <Prepaid />
        </Route>
        <Route exact path="/staff">
          <Staff />
        </Route>
        {/*PROTEGER*/}
        <Route exact path="/turnos">
          <Turnos />
        </Route>
        {/*PROTEGER*/}
        <Route exact path="/userProfile/:id">
          <UserProfile />
        </Route>
        <Route exact path="/calendar/:idDoctor">
          <Calendar />
        </Route>
        {/*PROTEGER*/}
        <Route exact path="/admin">
          <AdminProfile />
        </Route>
        {/*PROTEGER*/}
        <Route exact path="/doctor">
          <DoctorProfile />
        </Route>
        {/*PROTEGER*/}
        <Route exact path="/payments">
          <MakePayments />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
