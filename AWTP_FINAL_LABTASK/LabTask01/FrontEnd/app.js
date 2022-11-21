var nameErr = document.querySelector("#error-name");
var emailErr = document.querySelector("#error-email");
var genderErr = document.querySelector("#error-gender");
var countryErr = document.querySelector("#error-country");

nameErr.innerHTML = "";
genderErr.innerHTML = "";
emailErr.innerHTML = "";
countryErr.innerHTML = "";

document.querySelector(".submit-button").addEventListener("click", function () {
  var name = document.querySelector("#name");
  var email = document.querySelector("#email");
  var male = document.querySelector("#male");
  var female = document.querySelector("#female");
  var country = document.querySelector("#country");

  var flag = true;

  if (name.value === "") {
    nameErr.innerHTML = "[Name can not be empty]";
    flag = false;
  }
  if (male.checked == false && female.checked == false) {
    genderErr.innerHTML = "[Gender can not be empty]";
    flag = false;
  }
  if (email.value === "") {
    emailErr.innerHTML = "[Type a correct email]";
    flag = false;
  }
  if (country.value === "") {
    countryErr.innerHTML = "[Country can not be empty]";
    flag = false;
  }

  if (flag == true) {
    var gender = "";
    if (male.checked == true) gender = "Male";
    else gender = "Female";

    let obj = {
      name: name.value,
      email: email.value,
      gender: gender,
      country: country.value,
    };

    obj = JSON.stringify(obj);

    const url = "http://127.0.0.1:8000/api/submit";
    let xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(obj);

    xhr.onload = function () {
      if (xhr.status === 200) {
        document.querySelector("#response").innerHTML = "Sent Successfully";
      }
    };
  }
});
