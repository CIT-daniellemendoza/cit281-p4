/*
    Danielle Mendoza
    CIT 281 Project 4
*/

//Part 4: Import data into code module
//Add an appropriate require statement to p4-module.js to load the data from p4-data.js, assigned to a constant variable.
const {data} = require('./p4-data.js')

// Part 5: Create and test code module functions

function getQuestions() {
    const array = [];
    for (let i = 0; i < data.length; i ++) { //for the length of data...
        const objectInArray = data[i] // create an object for the first object in the array
        const {question} = objectInArray; // pull the question property and out of the objectinarray variable (indexed object)
        array.push(question); //add question prop to array 
    }
    return array
}

//console.log(getQuestions())

function getAnswers() {
    const array = [];
    for (let i = 0; i < data.length; i ++) { //for the length of data...
        const objectInArray = data[i] // create an object for the first object in the array
        const {answer} = objectInArray; // pull the question property and out of the objectinarray variable (indexed object)
        array.push(answer); //add question prop to array 
    }
    return array
}

function getQuestionsAnswers() {
    const copyOriginalDataArray = [];
    for (const array of data) {
        const object = {};
        for (const param in array) {
            object[param] = array[param]
        }
        copyOriginalDataArray.push(object);
    }
    return copyOriginalDataArray
}

function getQuestion(number = "") {
    const object = {
        question: "",
        number: "", 
        error: ""
    }

    if (typeof(number) === "string") {
        object.error = "Question number must be an interger";
        return object;
    } if (number < 1) {
        object.error = "Question number must be >= 1";
        return object;
    } if (number > data.length) {
        object.error = "Question number must be less than or equal to the number of questions (3)";
        return object;
    } else {
        object.question = `Q${number}`;
        object.number = `${number}`;
        return object;
    }
}

//console.log("getQuestion")
//console.log(getQuestion(number = 3))


function getAnswer(number = "") {
    const object = {
        answer: "", 
        number: "",
        error: ""
    };
    
    if (typeof(number) === "string") {
        object.error = "Answer number must be an integer";
        return object;
    } if (number < 1) {
        object.error = "Answer number must be >= 1";
        return object;
    } if (number > data.length) {
        object.error = "Answer number must be less than or equal to the number of questions (3)";
        return object;
    } else {
        object.answer = `A${number}`;
        object.number = `${number}`;
        return object
    }
}

//console.log("getAnswer")
//console.log(getAnswer(number = 3))

function getQuestionAnswer(number = "") {
    const object = {
        question: "", 
        answer: "", 
        number: "",
        error: ""
    }

    if (typeof(number) === "string") {
        object.error = "Question number must be an interger"
        return object;
    } if (number < 1) {
        object.error = "Question number must be >= 1";
        return object
    } if (number > data.length) {
        object.error = "Question number must be less than or equal to the number of questions (3)";
        return object
    }  else {
        object.question = `Q${number}`;
        object.answer = `A${number}`;
        object.number = `${number}`;
        return object;
    }
}

//console.log("getQuestionAnswer")
//console.log(getQuestionAnswer(number = 3))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


  //PART 6: Export code module functions

  module.exports = {
      getQuestions,
      getAnswers,
      getQuestionsAnswers,
      getQuestion,
      getAnswer,
      getQuestionAnswer
  }
