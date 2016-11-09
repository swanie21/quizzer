import React from 'react';
import Answer from './Answer';

const Question = (props) => {
  const {title, id, answers } = props;

return (
    <section key={id} className="questionContainer">
      <h3 className="questionTitle">{title}</h3>
        {answers.map((answer, index) =>
        <Answer
          key={index}
          id={id}
          title={answer.title}
        />)}
    </section>
  );
}


export default Question;
