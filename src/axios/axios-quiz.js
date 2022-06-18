import axios from "axios"

export default axios.create({
  baseURL: 'https://react-quiz-e6e8a-default-rtdb.europe-west1.firebasedatabase.app/'
})