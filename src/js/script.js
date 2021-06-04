// Made By Bl4ky113

// Obj to get the Elements by Id, class or tag
const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document),
  query: document.querySelector.bind()
};

/* OutPut */
let output = get.id("screen_output");

/* Normal Buttons */
const btns = get.class("buttons");
for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = (info) => addValue(info.target);
}

/* Del Buttons */
const delBtn = get.id("btn_del");
delBtn.onclick = () => delValue(false);

const acBtn = get.id("btn_ac");
acBtn.onclick = () => delValue(true);

/* Check/Calculate/Equals Button */
const calcBtn = get.id("btn_solve");
calcBtn.onclick = () => checkValue();

var operationsArr = [];

function addValue (obj) {
  var value = obj.innerText;
  
  // Correct the simbol of EXP
  if (obj.innerText == "[]²") value = "&sup2;";

  // Add Value to Operations Arr
  if (Number.isInteger(parseInt(obj.value))) operationsArr.push(parseInt(obj.value));
  else operationsArr.push(obj.value);

  if (output.innerHTML == "error" || output.innerHTML == "undefined") output.innerHTML = "";

  output.innerHTML += value;
}

function delValue (condition) {
  if (condition == false) {
    let deleted = output.innerHTML.slice(0, -1);
    operationsArr.pop();
    output.innerHTML = deleted;
  } else {
    operationsArr = [];
    output.innerHTML = "";
  }
}

function search (array, keyword) {
  let search_result = [];
  array.forEach( (element, index) => {
    if (keyword == element) search_result.push(index);
  });
  return search_result;
}

function checkValue () {
  var formula = operationsArr.join("");

  // Search and Complete Sqrt functions
  let search_result = search(operationsArr, "Math.sqrt");
  let rootNum = [];
  for (let i = 0; i < search_result.length; i += 1) {
    let rootNum_index = [];
    let index = search_result[i] + 1;

    while (index < operationsArr.length) {
      let is_operator = operationsArr[index] == "+" ||
                        operationsArr[index] == "-" ||
                        operationsArr[index] == "*" ||
                        operationsArr[index] == "/" ||
                        operationsArr[index] == "**";
                        operationsArr[index] == "";
                        operationsArr[index] == undefined;
      if (is_operator) {break;}

      rootNum_index.push(operationsArr[index]);
      index += 1;
    }
    rootNum.push(rootNum_index.join(""));

    let toRemplace = `Math.sqrt${rootNum[i]}`;
    let replacement = `Math.sqrt(${rootNum[i]})`;
    formula = formula.replace(toRemplace, replacement);
  }
  
  // Calculate the Result
  try {
    var result = eval(formula);
  } catch (error) {
    result = "error";
    operationsArr = [];
  } finally {
    output.innerHTML = result;
  }
}