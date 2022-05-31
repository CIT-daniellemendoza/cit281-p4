/*
    CIT 281 Project 4
    Danielle Mendoza
*/

const fastify = require("fastify")();
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
} = require(`./p4-module.js`);      

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

fastify.get("/cit/question", (request, reply) => {
    const allQuestions = {
        error: "", 
        statusCode: "200",
        questions: getQuestions()
    };
    reply 
        .code(200)
        .header("Content-Type", "application.json; charset=utf-8")
        .send(allQuestions);
})

fastify.get("/cit/answer", (request, reply) => {
    const allAnswers = {
        error: "",
        statusCode: "200",
        answers: getAnswers()
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(allAnswers);
});

fastify.get("/cit/questionanswer", (request, reply) => {
    const questionsAnswers = {
        error: "",
        statusCode: "200",
        questions_answers: getQuestionsAnswers()
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(questionsAnswers);
});

fastify.get("/cit/question/:number", (request, reply) => {
    const numberStr = request.params.number;
    const numberNum = parseInt(numberStr);
    const object = getQuestion(numberNum);
    const {error: errorReply, question: questionReply, number: numberReply} = object;
    const question = {
        error: errorReply,
        statusCode: "200",
        question: questionReply,
        number: numberReply
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(question);
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const numberStr = request.params.number;
    const numberNum = parseInt(numberStr);
    const object = getAnswer(numberNum);
    const {error: errorReply, answer: answerReply, number: numberReply} = object;
    const answer = {
        error: errorReply,
        statusCode: "200",
        answer: answerReply,
        number: numberReply
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(answer);
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const numberStr = request.params.number;
    const numberNum = parseInt(numberStr);
    const object = getQuestionAnswer(numberNum);
    const {error: errorReply, question: questionReply, answer: answerReply, number: numberReply} = object;
    const questionAnswer = {
        error: errorReply,
        statusCode: "200",
        question: questionReply,
        answer: answerReply,
        number: numberReply
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(questionAnswer);
});

fastify.get("*", (request, reply) => { 
    const unmatchedRoute = {
        error: "Route not found",
        statusCode: "404"
    };
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(unmatchedRoute);
});


