import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswearList from './AnswearList/AnswearList'


const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answearNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answearNumber} from {props.quizLenght}</small>
    </p>
    <AnswearList
      answears={props.answears}
      onAnswearClick={props.onAnswearClick}
      answearStatus={props.answearStatus}
    />
  </div>
)

export default ActiveQuiz