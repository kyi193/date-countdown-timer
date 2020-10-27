import React from 'react'
import DatePicker from 'react-datepicker'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import "react-datepicker/dist/react-datepicker.css";

function StartButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="Start-button">Start Timer</button>
    </div>
  )
}

class DateTimeInputField extends React.Component {
  state = {
    endDate: new Date(),
    timeRemaining: null
  }

  setEndDate = (date) => {
    this.setState(() => ({
      endDate: date
    }))
  }

  render() {
    const { endDate } = this.state
    const { title } = this.props
    return (
      <div className={"timer-container"} >
        <div>
          <p>Please enter the end date:</p>
          <DatePicker selected={endDate} onSelect={date => this.setEndDate(date)} showTimeSelect dateFormat="Pp" fixedHeight={true} />
          <Link to={{
            pathname: `/`,
            search: `?templateID=${title}&endDate=${endDate.getTime()}`
          }}>
            <StartButton />
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.template
  }
}
export default connect(mapStateToProps)(DateTimeInputField)
