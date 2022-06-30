import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswers } from '../Redux/Actions';

class WrongAnswer extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleAnswers());
  }

  getBtnColor = (isAnswered) => (
    isAnswered && '3px solid red');

  render() {
    const { option, index, isAnswered } = this.props;
    return (
      <button
        type="button"
        data-testid={ `wrong-answer-${index}` }
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

WrongAnswer.propTypes = {
  option: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(WrongAnswer);
