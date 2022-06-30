import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAnswers } from '../Redux/Actions';

class Answer extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleAnswers());
  }

  getBtnColor = (isAnswered, borderStyle) => (
    isAnswered && borderStyle);

  render() {
    const { option, isAnswered, borderStyle, id } = this.props;
    return (
      <button
        type="button"
        data-testid={ id }
        style={ { border: this.getBtnColor(isAnswered, borderStyle) } }
        onClick={ this.handleClick }
      >
        {option}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  isAnswered: state.game.isAnswered,
});

Answer.propTypes = {
  option: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Answer);
