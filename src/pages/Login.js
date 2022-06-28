import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
    state = {
      nome: '',
      email: '',
      disabled: true,
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value }, () => this.buttonValidation());
    }

    buttonValidation = () => {
      const { email, nome } = this.state;
      if (email.length > 0 && nome.length > 0) {
        this.setState({ disabled: false });
      }
    }

    getToken = async () => {
      const { history } = this.props;
      const url = 'https://opentdb.com/api_token.php?command=request';
      const token = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.token)
        .catch((error) => console.log(error));
      localStorage.setItem('token', token);
      history.push('/game');
    }

    render() {
      const { nome, email, disabled } = this.state;
      return (
        <div>
          <label htmlFor="nome">
            Nome:
            <input
              id="nome"
              type="text"
              data-testid="input-player-name"
              placeholder="Insira seu nome"
              name="nome"
              value={ nome }
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
            onClick={ () => this.getToken() }
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
