const number = document.querySelector(".input");
const button = document.querySelector(".button");
const button2 = document.querySelector(".clear");

function fibonacci() {
  let num0 = 0;
  let num1 = 1;
  const array = [num0, num1];
  for (let i = 2; i < parseInt(number.value); i++) {
    let num2 = num0 + num1;
    array.push(num2);
    num0 = num1;
    num1 = num2;
  }
  const myList = document.querySelector(".example");
  function addElements(list) {
    return function (elements) {
      elements.forEach((element) => {
        list.innerHTML += `<li class="name">${element}</li>`;
      });
    };
  }

  const addElementsToMyList = addElements(myList);
  addElementsToMyList(array);
}

function validation() {
  const value2 = parseInt(number.value);
  if (typeof value2 !== "number") throw new Error("No es un numero!");
  if (parseInt(number.value) > 1000)
    throw new Error("Pon un Numero menor que 1000");
  return fibonacci();
}

button.onclick = validation;

function clear() {
  const li = document.querySelectorAll(".name");
  for (let j = 0; j < li.length; j++) {
    li[j].textContent = "";
  }
}

button2.onclick = clear;
