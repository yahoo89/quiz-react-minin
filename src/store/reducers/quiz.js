import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  QUIZ_NEXT_QUESTION,
  FINISH_QUIZ,
  QUIZ_RETRY
} from '../actions/actionTypes'

const initialState = {
  quizes: [],
  loading: false,
  error: null,
  results: {}, // {[id]: success error}
  isFinished: false,
  activeQuestion: 0,
  answearStatus: null, // {[id]: success error}
  quiz: null
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state, loading: true
      }
      break;
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state, loading: false, quizes: action.quizes
      }
      break;
    case FETCH_QUIZES_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
      break;
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state, loading: false, quiz: action.quiz
      }
      break;
    case QUIZ_SET_STATE:
      return {
        ...state, answearStatus: action.answearStatus, results: action.results
      }
    case FINISH_QUIZ:
      return {
        ...state, isFinished: true
      }
    case QUIZ_NEXT_QUESTION:
      return {
        ...state, answearStatus: null, activeQuestion: action.number
      }
    case QUIZ_RETRY:
      return {
        ...state,
        activeQuestion: 0,
        answearStatus: null,
        isFinished: false,
        results: {}
      }
    default:
      return state;
  }
}
