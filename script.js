const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif1 = document.querySelector(".gif-1"); // Seleciona o gif

let noBtnActive = true;

yesBtn.addEventListener("click", () => {
  noBtnActive = false; // Desativar o botão "No"
  question.innerHTML = "Eu te amo Alaskinha";

  // Mudar o gif para o novo gif quando clicar no "Yes"
  gif1.src = "https://giphy.com/embed/SYo1DFS8NLhhqzzjMU"; // Novo GIF

  noBtn.style.display = "none"; // Esconde o botão "No"
});

noBtn.addEventListener("mouseover", () => {
  if (!noBtnActive) return; // Se o botão "No" estiver desativado, não faz nada

  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
