import React from 'react';
import { connect } from 'react-redux';

const ONE_SECOND = 1000;
const TIME_LIMIT = 0;

class Timer extends React.Component {
  state = {
    timer: 3,
    // disabledButtons: false,
  }

  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer - 1 }), () => {
        const { timer } = this.state;
        if (timer === TIME_LIMIT) {
          clearInterval(this.intervalId);
          // this.setState({ disabledButtons: true });
        }
      });
    }, ONE_SECOND);
  }

  render() {
    const { timer } = this.state;

    return (
      <div>
        { timer}
      </div>
    );
  }
}

export default connect()(Timer);
