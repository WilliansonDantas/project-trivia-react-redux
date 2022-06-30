import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  isAnswered: state.isAnswered,
});

RightAnswer.propTypes = {
  option: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(RightAnswer);
