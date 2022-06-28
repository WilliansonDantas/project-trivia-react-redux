import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveLoginInfo } from '../Redux/Actions';

class Login extends React.Component {
    state = {
      name: '',
      email: '',
      disabled: true,
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value }, () => this.buttonValidation());
    }

    buttonValidation = () => {
      const { email, name } = this.state;
      if (email.length > 0 && name.length > 0) {
        this.setState({ disabled: false });
      }
    }

    playBtn = async () => {
      const { history, dispatch } = this.props;
      const { name, email } = this.state;
      const url = 'https://opentdb.com/api_token.php?command=request';
      const token = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.token)
        .catch((error) => console.log(error));
      localStorage.setItem('token', token);
      dispatch(saveLoginInfo(name, email));
      history.push('/game');
    }

    render() {
      const { name, email, disabled } = this.state;
      return (
        <div>
          <label htmlFor="nome">
            Nome:
            <input
              id="name"
              type="text"
              data-testid="input-player-name"
              placeholder="Insira seu nome"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              id="email"
              type="email"
              data-testid="input-gravatar-email"
              placeholder="Insira seu e-mail"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ disabled }
            onClick={ this.playBtn }
          >
            Play
          </button>
          <hr />
          <Link
            to="/settings"
          >
            <button
              type="button"
              data-testid="btn-settings"
            >
              Configurações
            </button>
          </Link>
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect()(Login);
