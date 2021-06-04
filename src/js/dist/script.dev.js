"use strict";

// Made By Bl4ky113
// Obj to get the Elements by Id, class or tag
var get = {
  id: document.getElementById.bind(document),
  "class": document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document),
  query: document.querySelector.bind()
};
/* OutPut */

var output = get.id("screen_output");
/* Normal Buttons */

var btns = get["class"]("buttons");

for (var i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function (info) {
    return addValue(info.target);
  };
}
/* Del Buttons */


var delBtn = get.id("btn_del");

delBtn.onclick = function () {
  return delValue(false);
};

var acBtn = get.id("btn_ac");

acBtn.onclick = function () {
  return delValue(true);
};
/* Check/Calculate/Equals Button */


var calcBtn = get.id("btn_solve");

calcBtn.onclick = function () {
  return checkValue();
};

var operationsArr = [];

function addValue(obj) {
  var value = obj.innerText; // Correct the simbol of EXP

  if (obj.innerText == "[]²") value = "&sup2;"; // Add Value to Operations Arr

  if (Number.isInteger(parseInt(obj.value))) operationsArr.push(parseInt(obj.value));else operationsArr.push(obj.value);
  console.log(operationsArr);
  if (output.innerHTML == "error") output.innerHTML = "";
  output.innerHTML += value;
}

function delValue(condition) {
  if (condition == false) {
    var deleted = output.innerHTML.slice(0, -1);
    operationsArr.pop();
    output.innerHTML = deleted;
  } else {
    operationsArr = [];
    output.innerHTML = "";
  }
}

function search(array, keyword) {
  var search_result = [];
  array.forEach(function (element, index) {
    if (keyword == element) search_result.push(index);
  });
  return search_result;
}

function checkValue() {
  var formula = operationsArr.join(""); // Search and Complete Sqrt functions

  var search_result = search(operationsArr, "Math.sqrt");
  var rootNum = [];

  for (var _i = 0; _i < search_result.length; _i += 1) {
    var rootNum_index = [];
    var index = search_result[_i] + 1;

    while (index < operationsArr.length) {
      var is_operator = operationsArr[index] == "+" || operationsArr[index] == "-" || operationsArr[index] == "*" || operationsArr[index] == "/" || operationsArr[index] == "**";
      operationsArr[index] == "";
      operationsArr[index] == undefined;

      if (is_operator) {
        break;
      }

      rootNum_index.push(operationsArr[index]);
      index += 1;
    }

    rootNum.push(rootNum_index.join(""));
    var toRemplace = "Math.sqrt".concat(rootNum[_i]);
    var replacement = "Math.sqrt(".concat(rootNum[_i], ")");
    formula = formula.replace(toRemplace, replacement);
  } // Calculate the Result


  try {
    var result = eval(formula);
  } catch (error) {
    result = "error";
    operationsArr = [];
  } finally {
    output.innerHTML = result;
  }
}