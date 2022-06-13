var timerDiv = document.querySelector(".header .timer")
var fullName = document.querySelector(".header .profile")
var finishBtn = document.querySelector(".examStatistics button")
var timeLineMove = document.querySelector(".timeline .timeLineMove")
var stQuestion = document.querySelector(".examStatistics .questions")
var stAnswered = document.querySelector(".examStatistics .answered")
var stMark = document.querySelector(".examStatistics .mark")
var stSkipped = document.querySelector(".examStatistics .skipped")
var questionNumberSpan = document.querySelector(".qTitle span")
var qTitle = document.querySelector(".qTitle p")
var qAnswersText = document.querySelectorAll(".qAnswers p")
var qAnswersDiv = document.querySelectorAll(".qAnswers > div")
var nextBtn = document.querySelector(".movingBtns .next")
var prevBtn = document.querySelector(".movingBtns .prev")
var questionsNumber = document.querySelector(".sideContent .questionsNumber")
var checkContainer = document.querySelector(".checkContainer")
var checkInput = checkContainer.children[0]
var currentQuestionNum = 1;
var durationSecondsConst = 2 * 60;
var durationSeconds = durationSecondsConst;


function Answer(_id, _value) {
  this.id = _id;
  this.value = _value;
}

function Question(_id, _value, _answersId, _rightAnswerId) {
  this.id = _id;
  this.value = _value;
  this.answersId = _answersId;
  this.rightAnswerId = _rightAnswerId;
}

var answers = [
  new Answer(1, "Abstract level"),
  new Answer(2, "Application level"),
  new Answer(3, "Implementation level"),
  new Answer(4, "All of the above"),
  new Answer(5, "Operations"),
  new Answer(6, "Storage Structures"),
  new Answer(7, "Algorithms"),
  new Answer(8, "None of the above"),
  new Answer(9, "Data"),
  new Answer(10, "Both of the above"),
  new Answer(11, "Stacks"),
  new Answer(12, "List"),
  new Answer(13, "Strings"),
  new Answer(14, "Trees"),
  new Answer(15, "Graph"),
  new Answer(16, "Binary tree"),
  new Answer(17, "Stack"),
  new Answer(18, "Dequeue"),
  new Answer(19, "Priority"),
  new Answer(20, "Tree"),
  new Answer(21, "Underflow"),
  new Answer(22, "overflow"),
  new Answer(23, "houseful"),
  new Answer(24, "saturated"),
  new Answer(25, "storage structure"),
  new Answer(26, "Data structure"),
  new Answer(27, "Data relationship"),
  new Answer(28, "Data operation"),
  new Answer(29, "Data arrangement"),
  new Answer(30, "Data configuration"),
  new Answer(31, "Data formation"),
  new Answer(32, "Multidimensional array"),
  new Answer(33, "Linear array"),
  new Answer(34, "Two dimensional array"),
  new Answer(35, "Three dimensional array"),
  new Answer(36, "Straight line array"),
  new Answer(37, "One-dimensional array"),
  new Answer(38, "Vertical array"),
  new Answer(39, "Horizontal array"),
  new Answer(40, "queue"),
  new Answer(41, "linear"),
  new Answer(42, "non linear"),
  new Answer(43, "linked list"),
  new Answer(44, "Arrays"),
  new Answer(45, "Arrays are dense lists and static data structure"),
  new Answer(46, "data elements in linked list need not be stored in adjecent space in memory"),
  new Answer(47, "pointers store the next data element of a list"),
  new Answer(48, "linked lists are collection of the nodes that contain information part and next pointer"),
  new Answer(49, "Bubble sort"),
  new Answer(50, "Insertion sort"),
  new Answer(51, "Quick sort"),
  new Answer(52, "nature of a data structure"),
  new Answer(53, "purpose of a data structure"),
  new Answer(54, "lifetime of a data structure"),
  new Answer(55, "Computing"),
  new Answer(56, "Pseudo code"),
  new Answer(57, "Computer science"),
  new Answer(58, "Logical"),
  new Answer(59, "Mathematical"),
  new Answer(60, "Debugging"),
  new Answer(61, "Computer"),
  new Answer(62, "Information"),
  new Answer(63, "Deletion"),
  new Answer(64, "Insertion"),
  new Answer(65, "Traversing"),
  new Answer(66, "Searching"),
]

var questions = [
  new Question(
    5,
    "Which of the following is non-liner data structure?",
    [11, 12, 13, 14],
    14
  ),
  new Question(
    3,
    "...... is not the component of data structure.",
    [5, 6, 7, 8],
    8
  ),
  new Question(
    1,
    "Which of the following is/are the levels of implementation of data structure.",
    [1, 2, 3, 4],
    4
  ),
  new Question(
    2,
    "...... level is where the model becomes compatible executable code.",
    [1, 2, 3, 4],
    3
  ),
  new Question(
    4,
    "Which of the following is not the part of ADT description?",
    [9, 5, 10, 8],
    8
  ),
  new Question(
    6,
    "Which of the following data structure is non linear type?",
    [13, 12, 11, 15],
    15
  ),
  new Question(
    7,
    "Which of the following data structure is linear type?",
    [15, 14, 16, 17],
    17
  ),
  new Question(
    8,
    "To represent hierarchical relationship between elements, Which data structure is suitable?",
    [18, 19, 20, 15],
    20
  ),
  new Question(
    10,
    "When new data are to be inserted into a data structure, but there is not available space; this situation is usually called ......",
    [21, 22, 23, 24],
    22
  ),
  new Question(
    11,
    "The way in which the data item or items are logically related defines ......",
    [25, 26, 27, 28],
    26
  ),
  new Question(
    12,
    "The logical or mathematical model of a particular organization of data is called a ......",
    [26, 29, 30, 31],
    26
  ),
  new Question(
    13,
    "The simplest type of data structure is ......",
    [32, 33, 34, 35],
    33
  ),
  new Question(
    14,
    "Linear arrays are also called ......",
    [36, 37, 38, 39],
    37
  ),
  new Question(
    15,
    "The data structure which is one ended is ......",
    [40, 17, 20, 15],
    17
  ),
  new Question(
    16,
    "A list which displays the relationship of adjacency between elements is said to be",
    [41, 42, 43, 14],
    41
  ),
  new Question(
    17,
    "Which of the following data structure is not linear data structure?",
    [44, 43, 10, 8],
    8
  ),
  new Question(
    18,
    "Which of the following data structure is linear data structure?",
    [14, 15, 44, 8],
    44
  ),
  new Question(
    19,
    "Which of the following statement is false ?",
    [45, 46, 47, 48],
    47
  ),
  new Question(
    20,
    "Which of the following sorting algorithm is of divide-and-conquer type?",
    [49, 50, 51, 4],
    51
  ),
  new Question(
    21,
    "Which of the following can be used as a criterion for classification of data structures used in language processing ?",
    [52, 53, 54, 4],
    4
  ),
  new Question(
    24,
    "...... is neither an algorithm nor a program.",
    [55, 56, 57, 8],
    56
  ),
  new Question(
    26,
    "Which model is used to organize data in the main memory is called data structure?",
    [58, 59, 60, 4],
    4
  ),
  new Question(
    30,
    "What plays an important role in programming?",
    [9, 61, 62, 8],
    9
  ),
  new Question(
    29,
    "What is the process of finding the location of a given data element in the data structure called?",
    [63, 64, 65, 66],
    66
  ),

]

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(questions)

function getAnswerObjById(_id) {
  for (const value of answers) {
    if (value.id === _id) {
      return value
    }
  }
}

//#region - generate Questions firstTime
for (const i in questions) {
  questionsNumber.innerHTML += `<span data-question-number="${parseInt(i) + 1}">${parseInt(i) + 1}</span > `
}
fullName.textContent = `${getCookieValue("fName")} ${getCookieValue("lName")}`
//#endregion

function generateQuestion(_questionNum) {
  questionIndex = _questionNum - 1

  //* Change Question and Answers
  questionNumberSpan.textContent = _questionNum + '.';
  qTitle.textContent = questions[questionIndex].value;
  for (var i = 0; i < 4; i++) {
    qAnswersText[i].textContent = getAnswerObjById(questions[questionIndex].answersId[i]).value
    qAnswersDiv[i].id = getAnswerObjById(questions[questionIndex].answersId[i]).id
  }

  //* add property isShown
  questions[questionIndex].isShown = true;

  //* Change Next and Prev Buttons
  var prevBtnNotAccess = document.querySelector(".movingBtns .prev.notAccess")
  var nextBtnNotAccess = document.querySelector(".movingBtns .next.notAccess")
  if (prevBtnNotAccess) prevBtnNotAccess.classList.remove("notAccess");
  if (nextBtnNotAccess) nextBtnNotAccess.classList.remove("notAccess");
  if (_questionNum === 1) prevBtn.classList.add("notAccess")
  else if (_questionNum === questions.length) nextBtn.classList.add("notAccess")

  //* Clear the Answers and MarkButton
  var activeDiv = document.querySelector(".qAnswers > div.active")
  if (activeDiv) activeDiv.classList.remove("active")
  checkInput.checked = false

  //* Put the Answers and MarkButton
  var hisLastAnsweredId = questions[questionIndex].hisAnsweredId;
  if (hisLastAnsweredId) document.getElementById(`${hisLastAnsweredId}`).classList.add("active")
  if (questions[questionIndex].isMark) checkInput.checked = true

  //* update Questions Numbers Status
  updateQuestionsStatus()
} generateQuestion(1)


function updateQuestionsStatus() {
  var currSpan = questionsNumber.querySelector('span.current')
  if (currSpan) currSpan.classList.remove("current")
  for (let i = 0; i < questions.length; i++) {
    //* answered
    if (questions[i].hisAnsweredId) {
      questionsNumber.children[i].classList.add("answered");
    } else {
      if (questionsNumber.children[i].classList.contains("answered")) questionsNumber.children[i].classList.remove("answered");
    }

    //* skipped
    if (questions[i].isShown && !questions[i].isChecked) {
      questionsNumber.children[i].classList.add("skipped");
    }
    else {
      if (questionsNumber.children[i].classList.contains("skipped")) questionsNumber.children[i].classList.remove("skipped");
    }

    //* current
    if (currentQuestionNum - 1 === i) {
      questionsNumber.children[i].classList.add("current");
    }

    // * mark, remove mark
    if (questions[i].isMark) {
      questionsNumber.children[i].classList.add("mark");
    }
    else {
      if (questionsNumber.children[i].classList.contains("mark")) questionsNumber.children[i].classList.remove("mark");
    }
  }
}

function examStatistics() {
  var stAnsweredVal = 0;
  var stMarkVal = 0;
  var stSkippedVal = 0;
  for (const value of questions) {
    if (value.hisAnsweredId) stAnsweredVal++;
    if (value.isMark) stMarkVal++;
    if (!value.hisAnsweredId) stSkippedVal++;
  }
  stQuestion.textContent = questions.length;
  stAnswered.textContent = stAnsweredVal;
  stMark.textContent = stMarkVal;
  stSkipped.textContent = stSkippedVal;
} examStatistics()


var digitalTimer = setInterval(function () {
  if (durationSeconds < 1) clearInterval(digitalTimer)
  min = parseInt(durationSeconds / 60)
  sec = parseInt(durationSeconds % 60)
  timerDiv.textContent = `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`
  timeLineMove.style.width = `${((durationSecondsConst - durationSeconds) / durationSecondsConst).toFixed(3) * 100}%`;
  durationSeconds--;
}, 1000);

setTimeout(finishTheExam, durationSecondsConst * 1000)
finishBtn.addEventListener("click", finishTheExam)


function finishTheExam() {
  localStorage.setItem("questions", JSON.stringify(questions));
  localStorage.setItem("answers", JSON.stringify(answers));
  window.location.replace("results.html")
}

//#region - logic of click on answers
qAnswersDiv.forEach(function (div) {
  div.addEventListener("click", function () {
    var activeDiv = document.querySelector(".qAnswers > div.active")
    if (activeDiv) {
      activeDiv.classList.remove("active")
    }
    div.classList.add("active")
    questions[currentQuestionNum - 1].hisAnsweredId = parseInt(div.id)
    examStatistics()
  })
})
//#endregion


//#region - got to another question
//* next 
nextBtn.addEventListener("click", function () {
  if (currentQuestionNum !== questions.length) {
    generateQuestion(++currentQuestionNum)
    examStatistics()
  }
})
//* prev 
prevBtn.addEventListener("click", function () {
  if (currentQuestionNum !== 1) {
    generateQuestion(--currentQuestionNum)
  }
})
//* click on Question Number
questionsNumber.querySelectorAll("span").forEach(function (ele) {
  ele.addEventListener('click', function () {
    currentQuestionNum = ele.dataset.questionNumber
    generateQuestion(ele.dataset.questionNumber)
  })
})
//#endregion


//#region - logic mark for review
checkContainer.addEventListener("click", function () {
  questions[currentQuestionNum - 1].isMark = checkInput.checked
  examStatistics()
})
//#endregion


function setCookie(key, value, date) {
  if (date.setHours(0, 0, 0, 0) >= Date.now()) {
    if (key && value) {
      document.cookie = key + "=" + value + "; expires=" + date;
    }
    else {
      throw ("Invalid Key or Value")
    }
  }
  else {
    throw ("Can't use expire date to set Cookie")
  }
}
function getCookieValue(key) {
  if (key) {
    if (hasCookie(key)) {
      var myValue
      var arrayOfCookies = allCookieList();
      arrayOfCookies.forEach(function (ele) {
        if (ele[0] === key) {
          myValue = ele[1]
        }
      })
    } else {
      throw ("This Key Not Exit")
    }
  }
  else {
    throw ("Invalid Key")
  }
  return myValue
}
function hasCookie(key) {
  var isExit = false;
  var arrayOfCookies = allCookieList();
  arrayOfCookies.forEach(function (ele) {
    if (ele[0] === key) {
      isExit = true
    }
  })
  return isExit
}
function allCookieList() {
  var arrayOfCookies = []
  document.cookie.split("; ").forEach(function (ele) {
    arrayOfCookies.push(ele.split("="))
  })
  return arrayOfCookies
}
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
