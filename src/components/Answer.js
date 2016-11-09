import React from 'react';

const Answer = (props) => {
  const { title, id } = props;

  return (
    <article className="quizOptions">
      <label>
        <input type="radio" name={id} />
        {title}
      </label>
    </article>
  )
}

export default Answer;
