// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import NormalDashboard from "./Components/Dashboard/NormalDashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import { useState } from "react";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import BookAppointmentScreen from "./Screens/AppointmentScreen/BookAppointmentScreen";
import ViewAppointmentScreen from "./Screens/AppointmentScreen/ViewAppointmentScreen";
import RescheduleAppointmentScreen from "./Screens/AppointmentScreen/RescheduleAppointmentScreen";
import Chatbot from "./Components/Chatbot/Chatbot";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <Chatbot />
      <main className="App">
        <Route path="/" element={AdminDashboard} />
        <Route path="/AdminDashboard" component={AdminDashboard} />
        <Route path="/NormalDashboard" component={NormalDashboard} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/appointment" component={BookAppointmentScreen} />
        <Route path="/viewappointment" component={ViewAppointmentScreen} />
        <Route
          path="/rescheduleappointment"
          component={RescheduleAppointmentScreen}
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
