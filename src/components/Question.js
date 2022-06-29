import React from 'react';
import PropTypes from 'prop-types';
import RightAnswer from './RightAnswer';
import WrongAnswer from './WrongAnswer';

class Question extends React.Component {
  render() {
    const { question } = this.props;
    const { incorrect_answers: incorrects } = question;
    const generateWrongAnswer = incorrects.map((incorrect, index) => (
      <WrongAnswer option={ incorrect } index={ index } key={ index } />));
    const answers = [
      <RightAnswer option={ question.correct_answer } key={ 5 } />,
      ...generateWrongAnswer,
    ];
    const half = 0.5;
    return (
      <>
        <p data-testid="question-category">
          {`Categoria: ${question.category}`}
        </p>
        <p data-testid="question-text">
          {`Pergunta: ${question.question}`}
        </p>
        <div data-testid="answer-options">
          {/* Referência para algoritmo de randomização: https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html */}
          {answers.sort(() => Math.random() - half).map((answer) => answer)}
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.array,
}.isRequired;

export default Question;
