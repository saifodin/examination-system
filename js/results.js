var fullName = document.querySelector(".header .profile")
var stQuestion = document.querySelector(".examStatistics .questions")
var stAnswered = document.querySelector(".examStatistics .answered")
var stSkipped = document.querySelector(".examStatistics .skipped")
var rightAnswersNumber = 0;

var questions = JSON.parse(localStorage.getItem("questions") || "[]");
var answers = JSON.parse(localStorage.getItem("answers") || "[]");


function getAnswerValueById(_id) {
  for (const value of answers) {
    if (value.id === _id) {
      return value.value
    }
  }
}

for (let i = 0; i < questions.length; i++) {
  if (questions[i].rightAnswerId === questions[i].hisAnsweredId) rightAnswersNumber++
  var rightOrWrong = questions[i].rightAnswerId === questions[i].hisAnsweredId ? "right" : "wrong";
  var qAnswers = "";
  var abcd = ["A", "B", "C", "D"];
  for (var j = 0; j < 4; j++) {
    var wrightAnswer = questions[i].rightAnswerId === questions[i].answersId[j] ? "right" : ""
    var hisAnswer = questions[i].hisAnsweredId === questions[i].answersId[j] ? "hisAnswer" : ""
    qAnswers +=
      `
    <div class=${wrightAnswer} ${hisAnswer}>
      <span>${abcd[j]}</span>
      <p>${getAnswerValueById(questions[i].answersId[j])}</p>
    </div>
    `
  }
  document.querySelector(".bodyContent .container").innerHTML += (
    `
      <div class="questionContainer ${rightOrWrong}">
        <div class="qTitle">
          <span class="questionNumber">${i + 1}. </span>
          <p>${questions[i].value}</p>
        </div>
        <div class="qAnswers">
          ${qAnswers}
        </div>
      </div>
    `
  )
}

fullName.textContent = `${getCookieValue("fName")} ${getCookieValue("lName")}`
stQuestion.textContent = questions.length;
stAnswered.textContent = rightAnswersNumber;
stSkipped.textContent = questions.length - rightAnswersNumber;


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
