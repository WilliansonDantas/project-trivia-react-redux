import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  isAnswered: state.isAnswered,
});

WrongAnswer.propTypes = {
  option: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(WrongAnswer);
