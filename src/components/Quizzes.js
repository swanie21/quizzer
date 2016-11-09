import React, { Component } from 'react';
import axios from 'axios';
import '../Quizzes.css';
import Question from './Question';

export default class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      selectedAnswers: [null, null, null, null]
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
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

  postScore(sumOfScores) {
    axios.post('/scores', {
      'score': sumOfScores
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
    });
  }

  setScores(index, score) {
    let selectedAnswersArray = this.state.selectedAnswers;
    selectedAnswersArray[index] = score;
    this.setState({ selectedAnswers: selectedAnswersArray });
  }

  addScores() {
    let sumOfScores = 0;
    this.state.selectedAnswers.map((score) => {
      sumOfScores += score;
    });
    this.postScore(sumOfScores);
  }

  render() {
    return (
      this.state.quizzes ?
        <div>
          <h1 className="pageTitle">{this.state.quizzes[0].title}</h1>
          <section>
            {this.state.quizzes[0].questions.map((question, index) =>
              <Question
                className="questionContainer"
                key={question.id}
                id={index}
                title={question.title}
                answers={question.answers}
                setScores={this.setScores.bind(this)}
              /> )}
          </section>
          <button onClick={() => this.addScores()}>Submit Scores</button>
        </div>
      : <h1>No Quizzes</h1>
    );
  }
}
