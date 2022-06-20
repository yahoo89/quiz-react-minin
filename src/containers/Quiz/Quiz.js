import React, { Component } from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import axios from "../../axios/axios-quiz"
import Loader from "../../components/UI/Loader/Loader"
import { useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    return <Component {...props} params={params} />
  }
  return ComponentWithRouter
}

class Quiz extends Component {
  state = {
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answearStatus: null, // {[id]: success error}
    quiz: [],
    loading: true
  }

  onAnswearClickHandler = (answearId) => {
    if (this.state.answearStatus) {
      const key = Object.keys(this.state.answearStatus)[0]
      if (this.state.answearStatus[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results


    if (question.rightAnswearID === answearId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answearStatus: { [answearId]: 'success' },
        results
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
      results[question.id] = 'error'
      this.setState({
        answearStatus: { [answearId]: 'error' },
        results // results: results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answearStatus: null,
      isFinished: false,
      results: {}
    })
  }

  async componentDidMount() {
    console.log(this.props.params.id)
    try {
      const response = await axios.get(`/quizes/${this.props.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear all questions</h1>

          {
            this.state.loading
              ? <Loader />
              : this.state.isFinished
                ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
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

export default withRouter(Quiz)