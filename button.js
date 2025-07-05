function click() {
  let botao = document.querySelector("meuBotao");
  let h2 = document.createElement("h2");
  let text = "A vida é como andar de bicicleta. Para se manter equilibrado, é preciso seguir em frente. - Albert Einstein.";

  h2.innerHTML = "";

  botao.addEventListener("click", () => {
    if (h2.innerHTML != "") {
      h2.innerHTML = "";
    } else {
      h2.textContent = text;
      botao.parentElement.insertBefore(h2, botao.nextElementSibling);
    }
  });
}

click();
