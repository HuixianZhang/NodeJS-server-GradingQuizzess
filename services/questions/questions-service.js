// const questions = require('./questions.json');
// const questionsModel = require("../../db/questions/questions-model")
//
// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}
//
// const findAllQuestions = () => {
//     // return  questions;
//     return questionsModel.find()
// }
// const findQuestionsForQuiz = (qzid) => {
//     return questionsModel.find({quizId: qzid})
//     // return questions.filter((question) => {
//     //     return question.quizId === qzid;
//     // })
// }
//
// const findQuestionById = (quid) => {
//     return questionsModel.findById(quid)
//     // return questions.find((question) => {
//     //     return question._id === quid;
//     // });
// }
//
// const updateQuestion = () => {}
// const deleteQuestion = () => {}
//
// module.exports = {
//     createQuestionForQuiz,
//     createQuestion, findQuestionsForQuiz,
//     findAllQuestions, findQuestionById,
//     updateQuestion, deleteQuestion
// }

const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qzid) => questionsDao.findQuestionsForQuiz(qzid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

