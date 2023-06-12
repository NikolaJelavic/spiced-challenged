// import getRandomColor from "../../utils/randomColor.js";
import getRandomColor from "../";


export default function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}