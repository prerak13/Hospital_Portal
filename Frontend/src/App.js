// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import NormalDashboard from "./Components/Dashboard/NormalDashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import { useState } from "react";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

  function App() {
    const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/NormalDashboard" element={<NormalDashboard />} />
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
      </main>
      <Footer />
    </Router>
  );
}


export default App;
