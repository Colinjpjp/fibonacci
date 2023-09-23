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
  function createElement() {
    const newElement = document.createElement("p");
    newElement.setAttribute("class", "fib");
    newElement.textContent = array;
    document.querySelector(".example").appendChild(newElement);
  }
  createElement();
}

function validation() {
  const value2 = parseInt(number.value);
  if (typeof value2 !== "number") throw new Error("No es un numero!");
  if (value2 === 0) throw new Error("Ponga un numero mayor que cero");
  if (value2 > 200) throw new Error("ponga un numero menor que '200'");
  return fibonacci();
}

button.onclick = validation;
