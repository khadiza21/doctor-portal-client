import { Route, Routes } from "react-router-dom";
import 'react-day-picker/dist/style.css';
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Login from "./pages/Login/Login/Login";
import Notfound from "./pages/Shared/Notfound/Notfound";
import Appointment from "./pages/Appointments/Appointment";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />     
        <Route path="appointment" element={<Appointment />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
     
    </div>
  );
}

export default App;
