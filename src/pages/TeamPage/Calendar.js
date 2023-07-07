import React, { useState } from "react";
import CalendarComponent from "react-calendar";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar">
      <CalendarComponent onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
