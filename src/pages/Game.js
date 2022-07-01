import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { saveQuestion } from '../Redux/Actions';

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

render() {
  const { questionsList } = this.props;

  return (
    <>
      <Header />
      {questionsList.length > 1 && <Question question={ { ...questionsList[0] } } />}
      <Timer />
    </>

  );
}
}

const mapStateToProps = (state) => ({
  questionsList: state.game.questionsList,
});

Game.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Game);
