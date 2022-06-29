import React from 'react';
import PropTypes from 'prop-types';

class WrongAnswer extends React.Component {
  render() {
    const { option, index } = this.props;
    return (
      <button
        type="button"
        data-testid={ `wrong-answer-${index}` }
      >
        {option}
      </button>
    );
  }
}

WrongAnswer.propTypes = {
  option: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default WrongAnswer;
