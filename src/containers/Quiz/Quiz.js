import React, { Component } from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import Loader from "../../components/UI/Loader/Loader"
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchQuizById, quizAnswearClick, retryQuiz } from '../../store/actions/quiz'

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    return <Component {...props} params={params} />
  }
  return ComponentWithRouter
}

class Quiz extends Component {

  componentDidMount() {
    this.props.fetchQuizById(this.props.params.id) // PARAMS
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answear all questions</h1>

          {
            this.props.loading || !this.props.quiz
              ? <Loader />
              : this.props.isFinished
                ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.props.retryQuiz}
                />
                : <ActiveQuiz
                  answears={this.props.quiz[this.props.activeQuestion].answears}
                  question={this.props.quiz[this.props.activeQuestion].question}
                  onAnswearClick={this.props.quizAnswearClick}
                  quizLenght={this.props.quiz.length}
                  answearNumber={this.props.activeQuestion + 1}
                  answearStatus={this.props.answearStatus}
                />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results, // {[id]: success error}
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answearStatus: state.quiz.answearStatus, // {[id]: success error}
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswearClick: answearId => dispatch(quizAnswearClick(answearId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Quiz))