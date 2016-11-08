import React, { Component } from 'react';
import axios from 'axios';
import '../QuizData.css';

export default class QuizData extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      questions: [],
    };
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes,
          questions: response.data.quizzes[0].questions
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.quizzes.map((quiz) => {
          return (
            <section key={quiz.id}>
              <h1 className="pageTitle">{quiz.title}</h1>
            </section>
          );
        })}
        {this.state.questions.map((quiz) => {
          return (
            <section key={quiz.id} className="questionContainer">
              <h3 className="questionTitle">{quiz.title}</h3>
              {quiz.answers.map((quiz, unique) =>
                <ul key={unique}>
                  <li>{quiz.title}</li>
                </ul>
              )}
            </section>
           );
        })}
      </div>
    );
  }
}
