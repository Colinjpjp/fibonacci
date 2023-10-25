const number = document.querySelector(".input");
const button = document.querySelector(".button");
const button2 = document.querySelector(".clear");

function fibonacci(it) {
  let num0 = 0;
  let num1 = 1;
  const array = [num0, num1];
  for (let i = 2; i < it; i++) {
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

function fibonacciNegativo(it) {
  let num0 = 0;
  let num1 = -1;
  const array = [num0, num1];
  for (let i = -2; i > it; i--) {
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

function validator(num) {
  if (num > 1000) throw new Error("Muy alto");
  if (num < -1000) throw new Error("Muy bajo");
  if (num === NaN) throw new Error("No es un numero");
  if (num === undefined) throw new Error("No esta definido");
  if (num < 0) return fibonacciNegativo(Number(number.value));
  return fibonacci(Number(number.value));
}
button.addEventListener("click", () => {
  validator(Number(number.value));
});

function clearList(document) {
  for (let i = 0; i < document.length; i++) {
    document[i].innerHTML = "";
  }
}

button2.onclick = () => {
  clearList(document.querySelectorAll(".name"));
};
