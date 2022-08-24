import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <>
      <div w="100vw">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          //dayClassName={(date) =>
          // getDate(date) < Math.random() * 31 ? "random" : undefined
          // }
          showTimeSelect
          isClearable
          dateFormat="MMMM d, yyyy h:mm aa"
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        />
      </div>
    </>
  );
}

export default Calendar;
