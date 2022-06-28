import md5 from 'crypto-js/md5';

const linkImg = (userEmail) => {
  const hashEmail = md5(userEmail).toString();
  return `https://www.gravatar.com/avatar/${hashEmail}`;
};

export default linkImg;
