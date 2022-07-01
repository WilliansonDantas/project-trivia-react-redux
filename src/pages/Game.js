import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { saveQuestion, goToNext } from '../Redux/Actions';

class Game extends React.Component {
componentDidMount = async () => {
  const { history, dispatch } = this.props;
  const errorResponseCode = 3;
  const token = localStorage.getItem('token');
  const APIresponse = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const results = await APIresponse.json();
  const questionsList = await results.results;
  if (results.response_code === 0) {
    dispatch(saveQuestion(questionsList));
  }
  if (results.response_code === errorResponseCode) {
    history.push('/');
  }
}

getNextQuestion = () => {
  const MAX_INDEX = 3;
  const { dispatch, currentIndex, history } = this.props;
  if (currentIndex > MAX_INDEX) {
    history.push('/feedback');
  }
  dispatch(goToNext());
}

render() {
  const { questionsList, currentIndex, isAnswered } = this.props;

  return (
    <>
      <Header />
      {
        questionsList.length > 1 && (
          <Question question={ { ...questionsList[currentIndex] } } />
        )
      }
      { isAnswered && (
        <button
          type="button"
          data-testid="btn-next"
          onClick={ this.getNextQuestion }
        >
          Next
        </button>)}
      <Timer />
    </>

  );
}
}

const mapStateToProps = (state) => ({
  questionsList: state.game.questionsList,
  currentIndex: state.game.currentIndex,
  isAnswered: state.game.isAnswered,
});

Game.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Game);
