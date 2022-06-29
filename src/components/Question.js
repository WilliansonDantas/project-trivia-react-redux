import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { question } = this.props;
    console.log(question.incorrect_answers);
    return (
      <>
        <p data-testid="question-category">
          {`Categoria: ${question.category}`}
        </p>
        <p data-testid="question-text">
          {`Pergunta: ${question.question}`}
        </p>
        <div data-testid="answer-options">
          <button
            type="button"
            data-testid="correct-answer"
          >
            {question.correct_answer}
          </button>
          {/* {
            question.incorrect_answers.map((incorrect) => (
              <li key={ incorrect }>
                <button type="button">{incorrect}</button>
              </li>
            ))
          } */}
          <button
            type="button"
            data-testid={ `wrong-answer-${0}` }
          >
            {[question.incorrect_answers][0]}
          </button>
          <button
            type="button"
            data-testid={ `wrong-answer-${1}` }
          >
            {[question.incorrect_answers][1]}
          </button>
          <button
            type="button"
            data-testid={ `wrong-answer-${2}` }
          >
            {[question.incorrect_answers][2]}
          </button>
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.array,
}.isRequired;

export default Question;
