import React from 'react';

class Questions extends React.Component {
  state = {
    questions: [],
  }

componentDidMount = async () => {
  const tokenResponse = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await tokenResponse.json();
  const { token } = data;
  const takeFetch = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const data2 = await takeFetch.json();
  this.setState({ questions: data2.results });
}

render() {
  const { questions } = this.state;
  return (
    <>
      { questions.map((element) => {
        
      })}
    </>
  );
}
}

export default Questions;
