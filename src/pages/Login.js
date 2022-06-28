import React from 'react';

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
          >
            Play
          </button>
        </div>
      );
    }
}

export default Login;
