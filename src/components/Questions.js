import React from 'react';
import Question from './Question';

class Questions extends React.Component {
  state = {
    questions: [],
    // currentIndex: 0,
  }

componentDidMount = async () => {
  // BUSCAR TOKEN DO LOCAL STORAGE feito
  // APLICAR TOKEN NA URL QUE FIZER O FETCH DAS PERGUNTAS
  // CRIAR LÓGICA DE LOGOUT SE VIER TOKEN INVÁLIDO (CHAVE "response_code": "3" DA RESOSTA DA API)
  const token = localStorage.getItem('token');
  const APIresponse = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const results = await APIresponse.json();
  const questions = await results.results;
  this.setState({ questions });
}

render() {
  const { questions } = this.state;
  console.log(questions[0]);
  return (
    <Question question={ { ...questions[0] } } />
  );
}
}

export default Questions;
