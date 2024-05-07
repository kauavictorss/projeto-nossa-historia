const botoes = document.querySelectorAll(".botao");
const dias = document.querySelectorAll(".dia");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarDia();

		botao.classList.add("selecionado");
		dias[indice].classList.add("selecionado");
	});
});

function desselecionarDia() {
	const diaSelecionado = document.querySelector(".dia.selecionado");
	diaSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}

const mobilePlayButton = document.getElementById("mobilePlayButton");
const backgroundMusic = document.getElementById("background-music");

mobilePlayButton.addEventListener("click", () => {
    backgroundMusic.play();
    mobilePlayButton.style.display = "none"; // Esconde o botão após a reprodução iniciar
});