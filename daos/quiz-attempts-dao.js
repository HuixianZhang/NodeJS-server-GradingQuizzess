
const quizAttemptsModel = require('../db/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    console.log("the score is:", 100 * numberOfCorrectQuestions / questions.length)
    return 100 * numberOfCorrectQuestions / questions.length }

const findAttemptsForQuiz = (qzid) => quizAttemptsModel.find({quiz: qzid}).populate('quiz', 'title _id')
const createAttempt = (qid, attempt) =>
    // console.log(attempt)
    quizAttemptsModel.create({_id:Math.random()*qid, quiz: qid, answers: attempt, score: scoreQuiz(attempt)}).then(r => r)



module.exports = { createAttempt, findAttemptsForQuiz }

