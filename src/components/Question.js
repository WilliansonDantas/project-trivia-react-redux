import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

class Question extends React.Component {
  points = () => {}

  wrongAnswer = () => null

  render() {
    const { question } = this.props;
    const {
      incorrect_answers: incorrects,
      correct_answer: correct,
    } = question;
    const generateWrongAnswers = incorrects.map((incorrect, index) => (
      <Answer
        option={ incorrect }
        key={ incorrect }
        id={ `wrong-answer-${index}` }
        borderStyle="3px solid red"
        points={ this.wrongAnswer }
        isCorrect="no"
      />));
    const generateCorrectAnswer = (<Answer
      option={ correct }
      key={ correct }
      id="correct-answer"
      borderStyle="3px solid rgb(6, 240, 15)"
      points={ this.points }
      isCorrect="yes"
    />);
    const answersList = [
      generateCorrectAnswer,
      ...generateWrongAnswers,
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
          {answersList.sort(() => Math.random() - half).map((answer) => answer)}
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.array,
}.isRequired;

export default Question;
