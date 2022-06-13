import React, { Component } from 'react'
import Layout from "./hoc/Layout/Layout"
import { Routes, Route } from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/quiz-creator" element={<QuizCreator />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/" element={<QuizList />} />
          </Routes>
        </Layout>
      </div>
    )
  }
}

export default App