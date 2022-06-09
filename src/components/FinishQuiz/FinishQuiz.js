import React from "react";
import classes from "./FinishQuiz.module.css"

const FinishQuiz = props => {
  return (
    <div className={classes.FinishQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          how are you ?
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>1. </strong>
          how are you ?
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>Right answears 4 from 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  )
}

export default FinishQuiz