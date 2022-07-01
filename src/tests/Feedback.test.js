import React from 'react';
import App from '../App';
import Feedback from '../pages/Feedback';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testes da page Feedback', () => {
    test('Verifica existencia dos elementos e botoes', () => {
        renderWithRouterAndRedux(<Feedback />)

        const feedbackTextEl = screen.getByTestId('feedback-text')
        expect(feedbackTextEl).toBeInTheDocument();

        const feedbackScoreEl = screen.getByTestId('feedback-total-score');
        expect(feedbackScoreEl).toBeInTheDocument();

        const feedbackAccCountEl = screen.getByTestId('feedback-total-question')
        expect(feedbackAccCountEl).toBeInTheDocument();

        const playAgainBtn = screen.getByTestId('btn-play-again');
        expect(playAgainBtn).toBeInTheDocument();

        const rankingBtn = screen.getByTestId('btn-ranking');
        expect(rankingBtn).toBeInTheDocument();
    });

    test('Testa comportamento do botao play again', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        history.push('/feedback');

        const playAgainBtn = screen.getByTestId('btn-play-again');

        userEvent.click(playAgainBtn);
        expect(history.location.pathname).toBe('/');

        const playBtn = screen.getByTestId('btn-play');
        expect(playBtn).toBeInTheDocument();
    });

    test('Testa comportamento do botao ranking', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        history.push('/feedback');

        const rankingBtn = screen.getByTestId('btn-ranking');

        userEvent.click(rankingBtn);
        expect(history.location.pathname).toBe('/ranking');

        const rankingTitleEl = screen.getByTestId('ranking-title');
        expect(rankingTitleEl).toBeInTheDocument();
    })
})