import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className="text-2xl text-secondary fw-bold text-center">
        You picked {format(date, "PP")}.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} setTreatment={setTreatment} service={service}></Service>
        ))}
      </div>
      {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
