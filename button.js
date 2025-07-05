document.addEventListener("DOMContentLoaded",
    function () {
        const botao =
        documentElementById("meuBotao");

        botao.addEventListener("click", function
            () {
                alert("Você clicou no botão!");
            });
    });