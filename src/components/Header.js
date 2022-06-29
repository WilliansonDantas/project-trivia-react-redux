import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gravatarImg from '../services/gravatar';

class Header extends React.Component {
  render() {
    const { name, gravatarEmail } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ gravatarImg(gravatarEmail) }
          alt="imgGravatar"
        />
        <h3 data-testid="header-player-name">{ name }</h3>
        <h3 data-testid="header-score">0</h3>
      </header>
    );
  }
}

const mapStateToProps = (globalState) => ({
  name: globalState.player.name,
  gravatarEmail: globalState.player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
