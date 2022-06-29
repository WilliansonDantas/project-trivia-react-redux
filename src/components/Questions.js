import React from 'react';

class Questions extends React.Component {
  state = {
    questions: [],
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
  console.log(questions);
  return (
    <ul>
      {questions.map((question) => (
        <li key={ question.question }>
          <p data-testid="question-category">
            Categoria:
            {question.category}
          </p>
          <p data-testid="question-text">
            Pergunta:
            {question.question}
          </p>
        </li>
      ))}
    </ul>
  );
}
}

export default Questions;
