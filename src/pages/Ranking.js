import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gravatarImg from '../services/gravatar';
import { resetGame } from '../Redux/Actions';

class Ranking extends React.Component {
  state = {
    ranking: [],
  }

  componentDidMount() {
    const playersList = JSON.parse(localStorage.getItem('player'));
    // Referência de uso da função sort: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const COMPARISON_OPERATOR = -1;
    const rankedPlayers = playersList.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return COMPARISON_OPERATOR;
      }
      return 0;
    });
    this.setState({ ranking: rankedPlayers });
  }

  redirectionLogin = () => {
    const { history, dispatch } = this.props;
    dispatch(resetGame());
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    return (
      <>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <ul>
          { ranking.length >= 1
            && ranking.map((player, index) => (
              <li key={ index }>
                <img
                  src={ gravatarImg(player.gravatarEmail) }
                  alt="imgGravatar"
                />
                <h3 data-testid={ `player-name-${index}` }>{player.name}</h3>
                <p data-testid={ `player-score-${index}` }>{player.score}</p>
              </li>
            ))}
        </ul>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.redirectionLogin }
        >
          Início
        </button>
      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect()(Ranking);
