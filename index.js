const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const imageElement1 = document.querySelector(".img1");
imageElement1.setAttribute("src", `/images/dice${randomNumber1}.png`);

const imageElement2 = document.querySelector(".img2");
imageElement2.setAttribute("src", `/images/dice${randomNumber2}.png`);

const titleElement = document.querySelector(".title");

if (randomNumber1 > randomNumber2) {
  titleElement.textContent = "Player 1 Wins";
} else if (randomNumber1 === randomNumber2) {
  titleElement.textContent = "Draw";
} else {
  titleElement.textContent = "Player 2 Wins";
}
