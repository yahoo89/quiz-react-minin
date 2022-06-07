import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswearList from './AnswearList/AnswearList'


const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>2.</strong>&nbsp;
        How are you?
      </span>
      <small>4 from 12</small>
    </p>
    <AnswearList answears={props.answears} />
  </div>
)

export default ActiveQuiz