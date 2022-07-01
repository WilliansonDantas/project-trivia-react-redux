import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswers, sumPoints } from '../Redux/Actions';

class Answer extends React.Component {
  countPoints = () => {
    const { timer, dispatch, questionsList, currentIndex } = this.props;
    const ONE_POINT = 1;
    const TWO_POINTS = 2;
    const THREE_POINTS = 3;
    const MULTIPLIER = 10;
    const { difficulty } = questionsList[currentIndex];
    if (difficulty === 'easy') {
      const totalPoints = MULTIPLIER + (timer * ONE_POINT);
      dispatch(sumPoints(totalPoints));
    }
    if (difficulty === 'medium') {
      const totalPoints = MULTIPLIER + (timer * TWO_POINTS);
      dispatch(sumPoints(totalPoints));
    }
    if (difficulty === 'hard') {
      const totalPoints = MULTIPLIER + (timer * THREE_POINTS);
      dispatch(sumPoints(totalPoints));
    }
  }

  handleClick = ({ target }) => {
    const { dispatch } = this.props;
    console.log(target);
    dispatch(handleAnswers());
    if (target.id === 'yes') {
      this.countPoints();
    }
  }

  getBtnColor = (isAnswered, borderStyle) => (
    isAnswered && borderStyle);

  render() {
    const {
      option, isAnswered, borderStyle, id, disabledButtons, isCorrect } = this.props;
    return (
      <button
        type="button"
        data-testid={ id }
        style={ { border: this.getBtnColor(isAnswered, borderStyle) } }
        onClick={ this.handleClick }
        disabled={ disabledButtons }
        id={ isCorrect }
      >
        {option}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  isAnswered: state.game.isAnswered,
  disabledButtons: state.game.disabledButtons,
  questionsList: state.game.questionsList,
  timer: state.game.timer,
  currentIndex: state.game.currentIndex,
});

Answer.propTypes = {
  option: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Answer);
