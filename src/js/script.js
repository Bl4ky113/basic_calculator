// Made By Bl4ky113

// Obj to get the Elements by Id, class or tag
const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
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
calcBtn.onclick = () => {
  checkValue();
}

function addValue (obj) {
  let value = obj.innerText;
  if (Number.isInteger(value)) {
    
  }

  output.innerHTML += value;
}

function delValue (condition) {
  if (condition == false) {
    let deleted = output.innerHTML.slice(0, -1);
    output.innerHTML = deleted;
  } else {
    output.innerHTML = "";
  }
}

function checkValue () {
  
}