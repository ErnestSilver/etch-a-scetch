const container = document.querySelector("div");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let input = Number(prompt("How many boxes should grid side be made of?"));
  console.log(input);
  if (input > 100) {
    alert("Maximum number of boxes on grid side is 100 ");
    input = 0;
  } else if (isNaN(input)) {
    alert("Invalid input");
  }
  const boxSize = 660 / input;
  for (let i = 0; i < input * input; i++) {
    const gridBox = document.createElement("div");
    gridBox.style.width = boxSize - 2 + "px";
    gridBox.style.height = boxSize - 2 + "px";
    gridBox.style.border = "1px solid black";
    container.appendChild(gridBox);
  }
});
