import React, { Component } from 'react';
import axios from 'axios';
import '../Quizzes.css';
import Question from './Question';

export default class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes,
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      this.state.quizzes ?
        <div>
          <h1 className="pageTitle">{this.state.quizzes[0].title}</h1>
          <section>
            {this.state.quizzes[0].questions.map(question =>
              <Question
                className="questionContainer"
                key={question.id}
                id={question.id}
                title={question.title}
                answers={question.answers}
              /> )}
            </section>
        </div>
      : <h1>No Quizzes</h1>
    );
  }
}
