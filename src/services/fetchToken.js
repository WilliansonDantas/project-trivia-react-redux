const fetchToken = async (url) => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  const { token } = responseJSON;
  return token;
};

export default fetchToken;
