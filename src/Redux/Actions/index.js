export const LOGIN_INFO = 'LOGIN_INFO';
export const BUTTON_WAS_PRESSED = 'BUTTON_WAS_PRESSED';
export const DISABLED_BUTTONS = 'DISABLED_BUTTONS';
export const TIMEOUT = 'TIMEOUT';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SUM_PONTS = 'SUM_PONTS';
export const NEXT_QUESTION = 'NEXT_QUESTION';

export const saveLoginInfo = (name, email) => ({
  type: LOGIN_INFO,
  payload: {
    name,
    email,
  },
});

export const saveQuestion = (APIresponse) => ({
  type: SAVE_QUESTION,
  payload: APIresponse,
});

export const handleAnswers = () => ({
  type: BUTTON_WAS_PRESSED,
});

export const disableButtons = () => ({
  type: DISABLED_BUTTONS,
});

export const timerAction = () => ({
  type: TIMEOUT,
});

export const sumPoints = (questionPoints) => ({
  type: SUM_PONTS,
  payload: questionPoints,
});

export const goToNext = () => ({
  type: NEXT_QUESTION,
});
