import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Login from "./pages/Login/Login/Login";
import Contact from "./pages/Contact/Contact";
import Reviews from "./pages/Reviews/Reviews/Reviews";
import Appointments from "./pages/Appointments/Appointments/Appointments";
import Footer from "./pages/Shared/Footer/Footer";
import Notfound from "./pages/Shared/Notfound/Notfound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Reviews />} />
        <Route path="appointment" element={<Appointments />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
