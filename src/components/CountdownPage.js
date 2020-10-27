import React from 'react'
import Timer from './Timer'

import "react-datepicker/dist/react-datepicker.css";


class CountdownTimer extends React.Component {
  state = {
    startDate: null,
    backgroundImg: null
  }

  componentDidMount = () => {
    const params = new URLSearchParams(this.props.location.search)
    const backgroundImg = params.get("templateID")
    this.setState(() => ({
      startDate: new Date(parseInt(params.get("endDate"))),
      backgroundImg
    }))
  }

  render() {
    const { startDate, backgroundImg } = this.state
    return (
      <div className={"timer-container"} >
        <Timer startDate={startDate} backgroundImg={backgroundImg} />
      </div>
    )
  }
}


export default CountdownTimer
