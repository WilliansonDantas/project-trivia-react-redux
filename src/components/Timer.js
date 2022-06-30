import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { disableButtons, timerAction } from '../Redux/Actions';

const ONE_SECOND = 1000;
const TIME_LIMIT = 0;

class Timer extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    this.intervalId = setInterval(() => {
      dispatch(timerAction());
    }, ONE_SECOND);
  }

  componentDidUpdate = () => {
    const { dispatch, timer } = this.props;
    if (timer === TIME_LIMIT) {
      clearInterval(this.intervalId);
      dispatch(disableButtons());
    }
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        { timer}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.game.timer,
});

Timer.propTypes = {
  dispatch: PropTypes.func,
  timer: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Timer);