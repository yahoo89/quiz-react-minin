import React, { Component } from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishQuiz from "../../components/FinishQuiz/FinishQuiz";



class Quiz extends Component {

  state = {
    isFinished: true,
    activeQuestion: 0,
    answearStatus: null,
    quiz: [
      {
        question: 'What color is the sky ?',
        rightAnswearID: 2,
        id: 1,
        answears: [
          { text: 'Red', id: 1 },
          { text: 'Blue', id: 2 },
          { text: 'Black', id: 3 },
          { text: 'Green', id: 4 }
        ]
      },
      {
        question: 'When was the city of Lviv founded ?',
        rightAnswearID: 3,
        id: 2,
        answears: [
          { text: '1356', id: 1 },
          { text: '1526', id: 2 },
          { text: '1256', id: 3 },
          { text: '1156', id: 4 }
        ]
      }
    ]
  }

  onAnswearClickHandler = (answearId) => {

    if (this.state.answearStatus) {
      const key = Object.keys(this.state.answearStatus)[0]
      if (this.state.answearStatus[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswearID === answearId) {

      this.setState({
        answearStatus: { [answearId]: 'success' }
      })

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answearStatus: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000);


    } else {
      this.setState({
        answearStatus: { [answearId]: 'error' }
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear all questions</h1>

          {
            this.state.isFinished
              ? <FinishQuiz />
              : <ActiveQuiz
                answears={this.state.quiz[this.state.activeQuestion].answears}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswearClick={this.onAnswearClickHandler}
                quizLenght={this.state.quiz.length}
                answearNumber={this.state.activeQuestion + 1}
                answearStatus={this.state.answearStatus}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz