const container = document.querySelector("div");

for (let i = 0; i < 256; i++) {
  const gridBox = document.createElement("div");
  gridBox.style.width = "40px";
  gridBox.style.height = "40px";
  gridBox.style.border = "1px solid black";
  container.appendChild(gridBox);
}
