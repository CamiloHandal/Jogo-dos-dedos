document.addEventListener('DOMContentLoaded', function() {
            
    // Variável para controlar o estado da música
    let musicaAtiva = true;
    let imagemmusica = document.getElementById("imagemmusica");
    const audio = document.getElementById("musica");

    // Lista de músicas
    const musicas = [
        "./src/aud/lobby-classic-game.mp3",
        "./src/aud/answer_30sec.mp3",
        "./src/aud/alt02-answer_030sec.mp3",
        "./src/aud/alt03-answer_030sec.mp3",
        "./src/aud/alt02-answer_060sec.mp3"
    ];

    // Índice atual da música
    let indiceMusica = 0;

    // Função para controlar a música (ligar/desligar)
    document.getElementById("volume-change_btn").addEventListener("click", function() {
        if (musicaAtiva) {
            audio.pause();
            imagemmusica.src = "https://www.svgrepo.com/show/532521/volume-xmark.svg";  // Ícone de mudo
        } else {
            audio.play();
            imagemmusica.src = "https://www.svgrepo.com/show/532519/volume-max.svg";  // Ícone de som
        }

        musicaAtiva = !musicaAtiva;
    });

    // Função para trocar a música
    document.getElementById("music-change_btn").addEventListener("click", function() {
        const source = document.getElementById("sourceMusica");

        // Incrementa o índice da música, voltando ao início quando necessário
        indiceMusica = (indiceMusica + 1) % musicas.length;

        // Atualiza o source da música e reinicia a reprodução
        source.src = musicas[indiceMusica];
        audio.load();
        audio.play();
    });

});

//------------------------------------------------------------------------------------------------------
//função para descer pro jogo
function scrollToGame() {
    document.querySelector('#Game').scrollIntoView();
}
//função para descer pras regras
function scrollToRules() {
    document.querySelector('#Rules').scrollIntoView();
}
//função para desabilitar os botões
function disablebbutton(botao) {
botao.disabled = true
}
//função para habilitar botões
function ablebutton(botao) {
    botao.disabled = false
}

//Declaração doss elementos e desabilitando botões
let botaomao1 = document.getElementById("mao1")
let botaomao2 = document.getElementById("mao2")
let botaomao3 = document.getElementById("mao3")
let botaomao4 = document.getElementById("mao4")
disablebbutton(botaomao1)
disablebbutton(botaomao2)
disablebbutton(botaomao3)
disablebbutton(botaomao4)

// Define o turno aleatoriamente entre 1 ou 2
let turno = Math.floor(Math.random() * 2) + 1;
console.log(turno);

//Declaração de valores e imagens para os dedos
let dedos1 = 2; //teste
let imagem1 = document.getElementById("imgmao1");

let dedos2 = 1;
let imagem2 = document.getElementById("imgmao2");

let dedos3 = 1;
let imagem3 = document.getElementById("imgmao3");

let dedos4 = 1;
let imagem4 = document.getElementById("imgmao4");

//função para verificar a quantidade de dedos e alterar a imagem
function verificarDedos() {
if (dedos1 == 1) {
mudarImagem(imagem1, "https://media.istockphoto.com/id/139378228/photo/finger-number-1.jpg?s=612x612&w=0&k=20&c=wg6ZmkR3TJkUpQd6TCIHJk5fxXCXfKtz0nHTdB9a09k=");

}}

//chama a função de verificar em um intervalo de 500ms
let intervalo = setInterval(verificarDedos, 500);


dedos1=1 //outro teste de valor

//habilitar botões do player 1 no turno 1
if (turno==1) {
    ablebutton(botaomao1)
    ablebutton(botaomao2)
    // alert("selecione sua mao")
}
//habilitar botões do player 2 no turno 2
if (turno==2) {
    ablebutton(botaomao3)
    ablebutton(botaomao4)
    // alert("selecione sua mao")
}

//função para mudar imagens
function mudarImagem(elemento, novaImagem) {
    elemento.src = novaImagem;
}

//habilita olheiros para os botoes e quando clicados alertar na tela
botaomao1.addEventListener("click", () => {
alert("Clicou!") 
})
botaomao2.addEventListener("click", () => {
alert("Clicou!")
})
botaomao3.addEventListener("click", () => {
alert("Clicou!")
})
botaomao4.addEventListener("click", () => {
alert("Clicou!")
})





























// útil? - alterar cor do botão de música para branco no footer

// const volumeChangeBtn = document.getElementById('volume-change_btn');
// const musicChangeBtn = document.getElementById('music-change_btn');
// const rules = document.getElementById('Rules'); // Corrigido aqui

// function changeButtonColors() {
//     const rulesRect = rules.getBoundingClientRect();
//     const volumeChangeRect = volumeChangeBtn.getBoundingClientRect();
//     const musicChangeRect = musicChangeBtn.getBoundingClientRect();

//     console.log("Volume Button:", volumeChangeRect, "Music Button:", musicChangeRect, "Rules:", rulesRect); // Adicionado para debug

//     // Verifica se o botão de volume está dentro da div de regras
//     if (
//         volumeChangeRect.top < rulesRect.bottom &&
//         volumeChangeRect.bottom > rulesRect.top &&
//         volumeChangeRect.left < rulesRect.right &&
//         volumeChangeRect.right > rulesRect.left
//     ) {
//         volumeChangeBtn.style.backgroundColor = 'white';
//         volumeChangeBtn.style.color = 'black';
//     } else {
//         volumeChangeBtn.style.backgroundColor = 'transparent';
//         volumeChangeBtn.style.color = 'black';
//     }

//     // Verifica se o botão de música está dentro da div de regras
//     if (
//         musicChangeRect.top < rulesRect.bottom &&
//         musicChangeRect.bottom > rulesRect.top &&
//         musicChangeRect.left < rulesRect.right &&
//         musicChangeRect.right > rulesRect.left
//     ) {
//         musicChangeBtn.style.backgroundColor = 'white';
//         musicChangeBtn.style.color = 'black';
//     } else {
//         musicChangeBtn.style.backgroundColor = 'transparent';
//         musicChangeBtn.style.color = 'black';
//     }
// }

// // Inicializa as cores dos botões
// changeButtonColors();

// // Adiciona um intervalo para verificar constantemente a posição dos botões
// setInterval(changeButtonColors, 100); // Verifica a cada 100ms