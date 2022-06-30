export const LOGIN_INFO = 'LOGIN_INFO';
export const BUTTON_WAS_PRESSED = 'BUTTON_WAS_PRESSED';

export const saveLoginInfo = (name, email) => ({
  type: LOGIN_INFO,
  payload: {
    name,
    email,
  },
});

export const handleAnswers = () => ({
  type: BUTTON_WAS_PRESSED,
});
