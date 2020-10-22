import React from 'react'
import DatePicker from 'react-datepicker'
import Timer from './Timer'

import "react-datepicker/dist/react-datepicker.css";

function StartButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="Start-button">Start Timer</button>
    </div>
  )
}

function timeDiffCalc(dateFuture, dateNow) {
  return dateFuture - dateNow
}

const DateTimeInputField = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState(null);

  return (
    <div>
      <p>Please enter the end date:</p>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp" fixedHeight={true} />
      <StartButton onClick={() => setTimeRemaining(timeDiffCalc(new Date(`${startDate.getFullYear()}/${startDate.getMonth() + 1}/${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}`), new Date()))} />
      {timeRemaining &&
        (
          <Timer startDate={startDate} />
        )}
    </div>
  )
}


export default DateTimeInputField
