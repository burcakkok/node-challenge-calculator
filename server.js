const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (request, response) => {
  response.send(`Hello World!`);
});

app.get("/add", (request, response) => {
  let num1 = parseInt(request.query.value1);
  let num2 = parseInt(request.query.value2);
  const sum = num1 + num2;
  response.send(`${sum}`);
});

app.get("/substract", (request, response) => {
    let num1 = parseInt(request.query.value1);
    let num2 = parseInt(request.query.value2);
    const sum = num1 - num2;
    response.send(`${sum}`);
});

app.get("/multiply", (request, response) => {
    let num1 = parseInt(request.query.value1);
    let num2 = parseInt(request.query.value2);
    const sum = num1 * num2;
    response.send(`${sum}`);
});

app.get("/divide", (request, response) => {
    let num1 = parseInt(request.query.value1);
    let num2 = parseInt(request.query.value2);
    const sum = num1 / num2;
    response.send(`${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}.`);
});
