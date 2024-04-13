const container = document.querySelectorAll("div")[1];

const button = document.querySelector("button");
const reset = document.querySelectorAll("button")[1];

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
    gridBox.classList.add("grid-box");
    container.appendChild(gridBox);
    button.addEventListener("click", () => {
      for (let i = 0; i < input * input; i++) {
        container.removeChild(gridBox);
      }
    });

    gridBox.addEventListener("mouseover", () => {
      gridBox.style.backgroundColor = "black";
    });

    reset.addEventListener("click", () => {
      for (let i = 0; i < input * input; i++) {
        gridBox.style.backgroundColor = "transparent";
      }
    });
  }
});
