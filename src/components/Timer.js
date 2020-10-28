import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };
  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    const { article } = this.props
    if (expired) {
      return (
        <div className={`timer-${this.props.backgroundImg}`}>
          <div className="expired">IT'S TIME!</div>
          <Link to={{
            pathname: "/home",
          }}>
            Go Back
                </Link>
        </div>
      )
    }
    return (
      <div className={`timer-${this.props.backgroundImg}`}>
        <div className={`timer-header-${this.props.backgroundImg}`}>
          Countdown until {article} {this.props.backgroundImg}:
        </div>
        <div className="layer">
          <div className="timer">
            <div>
              {days}
              <span>Days</span>
            </div>
            <div>
              {hours}
              <span>Hours</span>
            </div>
            <div>
              {minutes}
              <span>Min</span>
            </div>
            <div className="seconds">
              {seconds}
              <span>Sec</span>
            </div>
          </div>
          <div className="go-back">
            <Link to={{
              pathname: "/home",
            }}>
              Go Back
                </Link>
          </div>
        </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}
export default connect(mapStateToProps)(Timer);
