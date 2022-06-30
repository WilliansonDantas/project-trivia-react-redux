import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswers } from '../Redux/Actions';

class RightAnswer extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleAnswers());
  }

  getBtnColor = (isAnswered) => (
    isAnswered ? '3px solid rgb(6, 240, 15)' : '3px solid black');

  render() {
    const { option, isAnswered } = this.props;
    console.log(isAnswered);
    return (
      <button
        type="button"
        data-testid="correct-answer"
        style={ { border: this.getBtnColor(isAnswered) } }
        onClick={ this.handleClick }
      >
        {option}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  isAnswered: state.game.isAnswered,
});

RightAnswer.propTypes = {
  option: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(RightAnswer);
