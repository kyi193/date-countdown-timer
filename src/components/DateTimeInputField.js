import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

function StartButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="Start-button">Start Timer</button>
    </div>
  )
}

function timeDiffCalc(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  let difference = '';
  if (days > 0) {
    difference += (days === 1) ? `${days} day, ` : `${days} days, `;
  }

  difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

  difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;
  return difference;
}

const DateTimeInputField = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState(null);

  return (
    <div>
      <p>Please enter the end date:</p>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp" fixedHeight={true} />
      <StartButton onClick={timeRemaining ? undefined : () => setTimeRemaining(timeDiffCalc(new Date(`${startDate.getFullYear()}/${startDate.getMonth() + 1}/${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}`), new Date()))} />
      {timeRemaining &&
        (
          <div>
            <h1>{timeRemaining}</h1>
          </div>
        )}
    </div>
  )
}


export default DateTimeInputField
