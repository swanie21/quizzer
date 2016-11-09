import React from 'react';
import Answers from './Answers';

const Questions = (props) => {
  const {title, id, answers } = props;

return (
    <section key={id} className="questionContainer">
      <h3 className="questionTitle">{title}</h3>
        {answers.map((answer, index) =>
        <Answers
          key={index}
          id={id}
          title={answer.title}
        />)}
    </section>
  );
}


export default Questions;
