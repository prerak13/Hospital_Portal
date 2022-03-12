import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
