import React, { Component } from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"



class Quiz extends Component {

  state = {
    quiz: [
      {
        answears: [
          { text: 'Question 1' },
          { text: 'Question 2' },
          { text: 'Question 3' },
          { text: 'Question 4' }
        ]
      }
    ]
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear all questions</h1>
          <ActiveQuiz answears={this.state.quiz[0].answears} />
        </div>
      </div>
    )
  }
}

export default Quiz