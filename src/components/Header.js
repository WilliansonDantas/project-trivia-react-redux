import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravatarImg from '../services/gravatar';

class Header extends React.Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarImg(gravatarEmail) }
          alt="imgGravatar"
        />
        <h3 data-testid="header-player-name">{ name }</h3>
        <h3 data-testid="header-score">{score}</h3>
      </header>
    );
  }
}

const mapStateToProps = (globalState) => ({
  name: globalState.player.name,
  gravatarEmail: globalState.player.gravatarEmail,
  score: globalState.player.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
