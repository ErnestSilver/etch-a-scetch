const container = document.querySelectorAll("div")[1];

const button = document.querySelector("button");
const buttonClassic = document.querySelectorAll("button")[2];
const buttonRainbow = document.querySelectorAll("button")[3];
const buttonDarker = document.querySelectorAll("button")[4];
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

    buttonClassic.addEventListener("click", () => {
      gridBox.addEventListener("mouseover", () => {
        gridBox.style.backgroundColor = "black";
      });
    });

    buttonRainbow.addEventListener("click", () => {
      gridBox.addEventListener("mouseover", () => {
        const random1 = Math.floor(Math.random() * 256);
        const random2 = Math.floor(Math.random() * 256);
        const random3 = Math.floor(Math.random() * 256);
        gridBox.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
      });
    });

    buttonDarker.addEventListener("click", () => {
      let opacity = 10;
      for (let i = 0; i < input * input; i++) {
        gridBox.style.backgroundColor = "transparent";
      }
      gridBox.addEventListener("mouseover", () => {
        gridBox.style.background = `rgb(0 0 0 / ${opacity}%)`;
        opacity = opacity + 10;
      });
    });

    reset.addEventListener("click", () => {
      for (let i = 0; i < input * input; i++) {
        gridBox.style.backgroundColor = "transparent";
      }
    });
  }
});
