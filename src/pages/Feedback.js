import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends React.Component {
  redirectionLogin = () => {
    const { history } = this.props;
    history.push('/');
  }

  redirectionRanking= () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const numberQuestions = 3;
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        {
          assertions < numberQuestions
            ? <p data-testid="feedback-text">Could be better...</p>
            : <p data-testid="feedback-text">Well Done!</p>
        }
        <p
          data-testid="feedback-total-score"
        >
          { score }
        </p>
        <p
          data-testid="feedback-total-question"
        >
          { assertions }
        </p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.redirectionLogin }
        >
          Play Again
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.redirectionRanking }
        >
          Ranking
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
  assertions: state.player.assertions,

});

Feedback.propTypes = {
  gravatarEmail: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
