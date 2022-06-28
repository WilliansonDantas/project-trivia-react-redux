export const LOGIN_INFO = 'LOGIN_INFO';

export const saveLoginInfo = (name, email) => ({
  type: LOGIN_INFO,
  payload: {
    name,
    email,
  },
});
