import React from "react";
//import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimoial from "../Testimonial/Testimoial";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimoial></Testimoial>
     <Contact prop={'Submit'}></Contact>
    </div>
  );
};

export default Home;
