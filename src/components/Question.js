import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { question } = this.props;
    const { incorrect_answers: incorrects } = question;
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
          {
            incorrects.map((incorrect, index) => (
              <button
                key={ incorrect }
                data-testid={ `wrong-answer-${index}` }
                type="button"
              >
                {incorrect}
              </button>
            ))
          }
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.array,
}.isRequired;

export default Question;
