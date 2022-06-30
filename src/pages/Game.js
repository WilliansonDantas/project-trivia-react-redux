import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';

class Game extends React.Component {
  state = {
    questions: [],
    // currentIndex: 0,
  }

componentDidMount = async () => {
  const { history } = this.props;
  const errorResponseCode = 3;
  const token = localStorage.getItem('token');
  const APIresponse = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const results = await APIresponse.json();
  if (results.response_code === 0) {
    this.setState({ questions: results.results });
  }
  if (results.response_code === errorResponseCode) {
    history.push('/');
  }
}

render() {
  const { questions } = this.state;

  return (
    <>
      <Header />
      {questions.length > 1 && <Question question={ { ...questions[0] } } />}
      <Timer />
    </>

  );
}
}

Game.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect()(Game);
