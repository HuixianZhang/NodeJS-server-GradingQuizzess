

module.exports = (app) => {
    const questionsService = require("../services/questions/questions-service")

    // /api/questions
    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions();
        // res.send(questions)
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const quid = req.params['questionId']
        // const quiz = quizzesService.findQuizById(qid)
        // res.send(quiz)
        questionsService.findQuestionById(quid)
            .then((question) => {
                res.send(question)
            })
    }

    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params['qzid'];
        // const questions = questionsService
        //     .findQuestionsForQuiz(qzid)
        // res.send(questions)
        questionsService.findQuestionsForQuiz(qzid)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);
    app.get('/api/questions/:questionId', findQuestionById)

}
