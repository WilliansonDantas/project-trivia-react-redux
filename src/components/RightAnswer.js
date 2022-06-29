import React from 'react';
import PropTypes from 'prop-types';

class RightAnswer extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <button
        type="button"
        data-testid="correct-answer"
      >
        {option}
      </button>
    );
  }
}

RightAnswer.propTypes = {
  option: PropTypes.string,
}.isRequired;

export default RightAnswer;
