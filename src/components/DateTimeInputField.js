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

class DateTimeInputField extends React.Component {
  state = {
    startDate: new Date(),
    timeRemaining: null
  }

  setStartDate = (date) => {
    this.setState(() => ({
      startDate: date
    }))
  }

  setTimeRemaining = (timeRemaining) => {
    this.setState(() => ({
      timeRemaining,
    }))
  }
  render() {
    const { startDate, timeRemaining } = this.state
    const backgroundImg = this.props.location.state.title
    return (
      <div className={"timer-container"} >
        {timeRemaining ?
          (<Timer startDate={startDate} backgroundImg={backgroundImg} />)
          : (<div>
            <p>Please enter the end date:</p>
            <DatePicker selected={startDate} onSelect={date => this.setStartDate(date)} showTimeSelect dateFormat="Pp" fixedHeight={true} />
            <StartButton onClick={() => this.setTimeRemaining(timeDiffCalc(new Date(`${startDate.getFullYear()}/${startDate.getMonth() + 1}/${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}`), new Date()))} />
          </div>
          )}
      </div>
    )
  }
}


export default DateTimeInputField
