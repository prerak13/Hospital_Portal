import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import NormalDashboard from "./Components/Dashboard/NormalDashboard";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/NormalDashboard" element={<NormalDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
