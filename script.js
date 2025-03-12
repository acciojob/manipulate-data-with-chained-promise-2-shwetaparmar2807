// script.js
function manipulateArray() {
  const array = [1, 2, 3, 4];
  const outputDiv = document.getElementById("output");

  // Initial promise resolving with array after 3 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
    .then((data) => {
      // First transformation: Filter even numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = data.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Second transformation: Multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.textContent = multipliedNumbers.join(",");
          resolve(multipliedNumbers);
        }, 2000);
      });
    });
}

manipulateArray();