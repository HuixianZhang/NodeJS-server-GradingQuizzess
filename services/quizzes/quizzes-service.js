// const quizzes = require('./quizzes.json')

// const quizzesModel = require("../../db/quizzes/quizzes-model")
//
// // TODO: Node.js Assignment this week
// const findAllQuizzes = () => {
//     return quizzesModel.find()
//     // return quizzes
// }
// const findQuizById = (qid) => {
//     return quizzesModel
//         .findById(qid)
//         .populate("questions")
//         .exec()
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // })
// }
//
// // console.log(findAllQuizzes())
// // console.log(findQuizById('123'))
//
// // TODO: MongoDB Assignment next week
// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findQuizById, findAllQuizzes,
//     updateQuiz, deleteQuiz
// }
const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }
