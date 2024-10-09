import React, { useState } from "react";

export default function DateTimePickerComponent() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateTime, setDateTime] = useState(null);

  const handleDate = (e) => {
    setDate(e.target.value);
    conbineDateTime(e.target.value, time);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
    conbineDateTime(date, e.target.value);
  };

  const conbineDateTime = (dateSelected, timeSelected) => {
    if (dateSelected && timeSelected) {
      const [year, month, day] = dateSelected.split("-");
      const [hours, minute] = timeSelected.split(":");
      setDateTime(new Date(year, month - 1, day, hours, minute));
    }
  };

  return (
    <div>
      <div>
        <input type="date" value={date} onChange={handleDate} />
        <input type="time" value={time} onChange={handleTime} />
      </div>
      {dateTime ? dateTime.toString() : "Not a date time"}
    </div>
  );
}
