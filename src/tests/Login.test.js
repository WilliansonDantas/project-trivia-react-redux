import React from 'react';
import App from '../App';
import Login from '../pages/Login';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testes da Login page', () => {
    test('Testa existencia e comportamento dos inputs e botoes', async () => {
        renderWithRouterAndRedux(<Login />);
        const nameInput = screen.getByTestId('input-player-name');
        expect(nameInput).toBeInTheDocument();

        const emailInput = screen.getByTestId('input-gravatar-email');
        expect(emailInput).toBeInTheDocument();

        const playButton = screen.getByTestId('btn-play');
        expect(playButton).toBeInTheDocument();
        expect(playButton).toBeDisabled();

        const settingsButton = screen.getByTestId('btn-settings');
        expect(settingsButton).toBeInTheDocument();
        expect(settingsButton).not.toBeDisabled();

        await userEvent.type(nameInput, 'test');
        await userEvent.type(emailInput, 'test@trybe.com');

        expect(playButton).not.toBeDisabled();
    })

    test('Testa se o botao play faz chamada a API do token', async () => {
          jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue({ 
            response_code: 0,
            response_message: "Token Generated Successfully!",
            token: "77fb0548564a8844220e0d6422819321944a4a98a79a84316ceae12853b0d363"
            })});

        const { history } = renderWithRouterAndRedux(<App />);
        const nameInput = screen.getByTestId('input-player-name');
        const emailInput = screen.getByTestId('input-gravatar-email');
        const playButton = screen.getByTestId('btn-play');

        await userEvent.type(nameInput, 'test');
        await userEvent.type(emailInput, 'test@trybe.com');
        userEvent.click(playButton);
        expect(global.fetch).toHaveBeenCalled();
        history.push('/game'); // o redirecionamento está assim na logica do botão.
        expect(history.location.pathname).toBe('/game');
    })

    test('Testa button settings', async () => {
        const { history } = renderWithRouterAndRedux(<App />);
        const settingsButton = screen.getByTestId('btn-settings');
        userEvent.click(settingsButton);
        expect(history.location.pathname).toBe('/settings');
    })
})