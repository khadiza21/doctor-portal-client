
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
 
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, 'PP')}.</p>;
    }
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt=""
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <DayPicker 
           mode="single"
           selected={date}
           onSelect={setDate}
           footer={footer}
        />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
