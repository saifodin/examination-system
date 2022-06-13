
//* Validation for design only
document.querySelectorAll('input').forEach(function (ele) {
  ele.addEventListener("focusout", function () {
    if (!ele.value) {
      addInputEmptyError(ele.id)
    }
    else {
      if (ele.id === "fName" || ele.id === "lName") {
        ManageInputErrors(/^[a-z]+$/i.test(ele.value), ele.id)
      }
      else if (ele.id === "email") {
        ManageInputErrors(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ele.value), ele.id)
      }
      else if (ele.id === "password") {
        ManageInputErrors(ele.value.length >= 8, ele.id)
      }
      else if (ele.id === "rePassword") {
        ManageInputErrors(ele.value === document.querySelector("div.password input#password").value, ele.id)
      }
    }
  })
})

//* Validation for Submit the data
document.querySelector('.formContainer > button').addEventListener("click", function (e) {

  var fNameValue = document.querySelector("input#fName").value;
  var LNameValue = document.querySelector("input#lName").value;
  var emailValue = document.querySelector("input#email").value;
  var passValue = document.querySelector("input#password").value;
  var rePassValue = document.querySelector("input#rePassword").value;
  if (
    fNameValue && /^[a-z]+$/i.test(fNameValue) &&
    LNameValue && /^[a-z]+$/i.test(LNameValue) &&
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue) &&
    passValue.length >= 8 &&
    rePassValue === passValue
  ) {
    submitTheFrom(fNameValue, LNameValue, emailValue, passValue)
  }
  else {
    document.querySelectorAll('input').forEach(function (ele) { ele.focus(); })
    e.target.focus();
  }
})

function ManageInputErrors(_condition, _containerClassName) {
  if (_condition) removeAllInputErrors(_containerClassName)
  else addInputValidError(_containerClassName)
}

function addInputEmptyError(_containerClassName) {
  removeAllInputErrors(_containerClassName)
  var emptyInputError = document.querySelector("body > .emptyValid.forJsOnly").cloneNode(true);
  emptyInputError.style.display = "block"
  document.querySelector(`.formContainer div.${_containerClassName}`).appendChild(emptyInputError)
  document.querySelector(`.formContainer div.${_containerClassName} input`).classList.add("error")
}

function removeInputEmptyError(_containerClassName) {
  var inputEmptyError = document.querySelector(`.formContainer div.${_containerClassName} span.emptyValid`)
  if (inputEmptyError) inputEmptyError.remove()
  document.querySelector(`.formContainer div.${_containerClassName} input`).classList.remove("error")
}

function addInputValidError(_containerClassName) {
  removeInputEmptyError(_containerClassName)
  document.querySelector(`.formContainer div.${_containerClassName} span`).style.display = "block"
  document.querySelector(`.formContainer div.${_containerClassName} input`).classList.add("error")
}

function removeInputValidError(_containerClassName) {
  document.querySelector(`.formContainer div.${_containerClassName} span.validation`).style.display = "none"
  document.querySelector(`.formContainer div.${_containerClassName} input`).classList.remove("error")
}

function removeAllInputErrors(_containerClassName) {
  removeInputEmptyError(_containerClassName);
  removeInputValidError(_containerClassName);
}

function submitTheFrom(fNameValue, LNameValue, emailValue, passValue) {
  var expireDate = new Date("1/1/3000");
  setCookie("fName", fNameValue, expireDate)
  setCookie("lName", LNameValue, expireDate)
  setCookie("email", emailValue, expireDate)
  setCookie("password", passValue, expireDate)
  window.location.replace("pages/login.html")
}

//* go to the login page without signup
document.querySelector(".header button").addEventListener("click", function () {
  window.location.replace("pages/login.html")
})


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