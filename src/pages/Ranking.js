import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  redirectionLogin = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
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

export default Ranking;
