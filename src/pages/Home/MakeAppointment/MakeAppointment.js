import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-24"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
          <h3 className="text-xl text-primary font-bold">Appointment</h3>
          <h2 className="text-3xl text-white">Make an Appointment Today</h2>
          <p className=" text-white">
          The dentist will remove the plaque along the gum line of the tooth and smoothen the tooth to reattach to the gums. Teeth scaling makes the tooth cavity-free and healthier for a longer duration.The dentist will remove the plaque along the gum line of the tooth and smoothen the tooth to reattach to the gums. Teeth scaling makes the tooth cavity-free and healthier for a longer duration.
          </p>
          <PrimaryButton props={'Get Appointment'}></PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
