// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()

// const uri = process.env.MONGODB_URI;
// const mongoAtlasUri = 'mongodb+srv://GradingQuiz:O7FmSoskBr7JNSZs@cluster0.kvuf3.mongodb.net/whiteboard?retryWrites=true&w=majority'
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whiteboard',
//     {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://GradingQuiz:O7FmSoskBr7JNSZs@cluster0.kvuf3.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});
// try {
//     // Connect to the MongoDB cluster
//     mongoose.connect(
//         mongoAtlasUri,
//         { useNewUrlParser: true, useUnifiedTopology: true },
//         () => console.log(" Mongoose is connected")
//     );
//
// } catch (e) {
//     console.log("could not connect");
// }
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demos = require('./controllers/demos-controller')
demos(app)

// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

const port = process.env.PORT;
// ...
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

// app.listen(4000)