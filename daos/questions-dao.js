
const questionsModel = require('../db/questions/questions-model')
const quizzesModel = require('../db/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
// const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
//     .populate('questions').then(quiz => quiz.questions)
const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId:qzid})
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

