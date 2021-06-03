"use strict";

// Made By Bl4ky113
// Obj to get the Elements by Id, class or tag
var get = {
  id: document.getElementById.bind(document),
  "class": document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
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
  checkValue();
};

function addValue(obj) {
  var value = obj.innerText;

  if (Number.isInteger(value)) {}

  output.innerHTML += value;
}

function delValue(condition) {
  if (condition == false) {
    var deleted = output.innerHTML.slice(0, -1);
    output.innerHTML = deleted;
  } else {
    output.innerHTML = "";
  }
}

function checkValue() {}