import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DonorRegistrationPage from "./components/DonorRegistrationPage";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <Router basename="/blood_donation_ui">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonorRegistrationPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
