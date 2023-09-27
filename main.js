const number = document.querySelector(".input");
const button = document.querySelector(".button");

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
        list.innerHTML += `<li>${element}</li>`;
      });
    };
  }

  const addElementsToMyList = addElements(myList);
  addElementsToMyList(array);
}

function validation() {
  const value2 = parseInt(number.value);
  if (typeof value2 !== "number") throw new Error("No es un numero!");
  if (value2 === 0) throw new Error("Ponga un numero mayor que cero");
  return fibonacci();
}

button.onclick = validation;
