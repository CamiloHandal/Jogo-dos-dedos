//--------------------------------------Musica--------------------------------------------------------------------
// Executa o código apenas após o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
            
    // Variável para controlar o estado da música
    let musicaAtiva = true;
    let imagemmusica = document.getElementById("imagemmusica");
    const audio = document.getElementById("musica");
    const source = document.getElementById("sourceMusica");
    // Lista de músicas
    const musicas = [
        "/src/aud/lobby-classic-game.mp3",
        "/src/aud/answer_30sec.mp3",
        "/src/aud/alt02-answer_030sec.mp3",
        "/src/aud/alt03-answer_030sec.mp3",
        "/src/aud/alt02-answer_060sec.mp3"
    ];

    // Índice atual da música
    let indiceMusica = Math.floor(Math.random() * 4) + 0;
    source.src = musicas[indiceMusica];
    audio.load();
    audio.play();
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
function disablebutton(botao) {
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
disablebutton(botaomao1)
disablebutton(botaomao2)
disablebutton(botaomao3)
disablebutton(botaomao4)


let avisojogada = document.getElementById("avisojogada")
let avisojogada2 = document.getElementById("avisojogada2")


//Declaração de valores e imagens para os dedos
let dedos = {
    dedos1:1,
    dedos2:1,
    dedos3:1,
    dedos4:1,
}
let proxydedos = new Proxy(dedos, {
    set(target, name, value){
    console.log("Mudando", target);
    fimdejogo
    target[name] = value
    }
})

let skinhiro = ["/src/img/dedo 0 hiro.png","/src/img/dedo 1 hiro.png","/src/img/dedo 2 hiro.png","/src/img/dedo 3 hiro.png","/src/img/dedo 4 hiro.png","/src/img/dedo 5 hiro.png"]

let skin = skinhiro

let imagem1 = document.getElementById("imgmao1");

let imagem2 = document.getElementById("imgmao2");

let imagem3 = document.getElementById("imgmao3");

let imagem4 = document.getElementById("imgmao4");

//função para verificar a quantidade de dedos e alterar a imagem
function verificarDedos() {
if (proxydedos.dedos1 == 1) {
mudarImagem(imagem1, skin[1]);
}
if(proxydedos.dedos1 == 2) {
mudarImagem(imagem1, skin[2]);
}
if(proxydedos.dedos1 == 3) {
mudarImagem(imagem1, skin[3]);
}
if(proxydedos.dedos1 == 4) {
mudarImagem(imagem1, skin[4]);
}
if(proxydedos.dedos1 >= 5) {
disablebutton(botaomao1)
mudarImagem(imagem1, skin[5]);
setTimeout(() => {
proxydedos.dedos1 = 0
}, 750);

}
if(proxydedos.dedos1 == 0) {
mudarImagem(imagem1, skin[0]);
}

if (proxydedos.dedos2 == 1) {
mudarImagem(imagem2, skin[1]);
}
if(proxydedos.dedos2 == 2) {
mudarImagem(imagem2, skin[2]);
}
if(proxydedos.dedos2 == 3) {
mudarImagem(imagem2, skin[3]);
}
if(proxydedos.dedos2 == 4) {
mudarImagem(imagem2, skin[4]);
}
if(proxydedos.dedos2 >= 5) {
disablebutton(botaomao2)
mudarImagem(imagem2, skin[5]);
setTimeout(() => {
    proxydedos.dedos2 = 0
    
}, 750);
}
if(proxydedos.dedos2 == 0) {
mudarImagem(imagem2, skin[0]);
}

if (proxydedos.dedos3 == 1) {
mudarImagem(imagem3, skin[1]);
}
if(proxydedos.dedos3 == 2) {
mudarImagem(imagem3, skin[2]);
}
if(proxydedos.dedos3 == 3) {
mudarImagem(imagem3, skin[3]);
}
if(proxydedos.dedos3 == 4) {
mudarImagem(imagem3, skin[4]);
}
if(proxydedos.dedos3 >= 5) {
disablebutton(botaomao3)
mudarImagem(imagem3, skin[5])
setTimeout(() => {
proxydedos.dedos3 = 0

}, 750);
}
if(proxydedos.dedos3 == 0) {
mudarImagem(imagem3, skin[0]);
}

if (proxydedos.dedos4 == 1) {
mudarImagem(imagem4, skin[1]);
}
if(proxydedos.dedos4 == 2) {
mudarImagem(imagem4, skin[2]);
}
if(proxydedos.dedos4 == 3) {
mudarImagem(imagem4, skin[3]);
}
if(proxydedos.dedos4 == 4) {
mudarImagem(imagem4, skin[4]);
}
if(proxydedos.dedos4 >= 5) {
disablebutton(botaomao4)
mudarImagem(imagem4, skin[5])
setTimeout(() => {
proxydedos.dedos4 = 0
}, 750);
}
if(proxydedos.dedos4 == 0) {
mudarImagem(imagem4, skin[0]);
}
}

// Define o turno aleatoriamente entre 1 ou 2
let turno = Math.floor(Math.random() * 2) + 1;
console.log("Turno inicial: " + turno);
let avisoturno = document.getElementById("avisoturno")
// Função para configurar os eventos e habilitações baseadas no turno
function configurarTurno(turnoAtual) {
//função para desabilitar os botões
function disablebutton(botao) {
botao.disabled = true
}
//função para habilitar botões
function ablebutton(botao) {
    botao.disabled = false
}

// Limpa todos os botões antes de configurar o novo turno
disablebutton(botaomao1);
disablebutton(botaomao2);
disablebutton(botaomao3);
disablebutton(botaomao4);

fimdejogo

if (turnoAtual === 1) {
// Limpa todos os botões antes de configurar o novo turno
disablebutton(botaomao1);
disablebutton(botaomao2);
disablebutton(botaomao3);
disablebutton(botaomao4);
avisojogada2.textContent = ""
botaomao3.removeEventListener("click", mao3selecionar)
botaomao4.removeEventListener("click", mao4selecionar)
botaomao3.style.border = "none"
botaomao4.style.border = "none"
botaomao3.removeEventListener("click", preeação3);
botaomao4.removeEventListener("click", preeação4);
// Habilitar botões do player 1 no turno 1
if (proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", preeação1);
} else {
    disablebutton(botaomao1);
}
if (proxydedos.dedos1 == 0){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preeação1)
}

if (proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", preeação2);
} else {
    disablebutton(botaomao2);
}
if (proxydedos.dedos2 == 0){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preeação1)
}
avisoturno.textContent = "É a vez do de baixo!";



}

if (turnoAtual === 2) {
// Limpa todos os botões antes de configurar o novo turno
disablebutton(botaomao1);
disablebutton(botaomao2);
disablebutton(botaomao3);
disablebutton(botaomao4);
avisojogada.textContent = ""
botaomao1.removeEventListener("click", mao1selecionar)
botaomao2.removeEventListener("click", mao2selecionar)
botaomao1.style.border = "none"
botaomao2.style.border = "none"
botaomao1.removeEventListener("click", preeação1);
botaomao2.removeEventListener("click", preeação2);
// Habilitar botões do player 2 no turno 2
if (proxydedos.dedos3 > 0){
    ablebutton(botaomao3);
    botaomao3.addEventListener("click", preeação3);
} else {
    disablebutton(botaomao3);
}
if (proxydedos.dedos4 > 0 ){
    ablebutton(botaomao4);
    botaomao4.addEventListener("click", preeação4);
} else {
    disablebutton(botaomao4);
}
avisoturno.textContent = "É a vez do de cima!";

}
}

// Proxy para interceptar a alteração do turno
let proxyTurno = new Proxy({ valor: turno }, {
set(obj, prop, novoValor) {
obj[prop] = novoValor;
console.log("Turno alterado para: " + novoValor);
configurarTurno(novoValor); // Chama a função que configura os eventos do turno
return true;
}
});

// Configura o turno inicial
configurarTurno(proxyTurno.valor);


//chama a função de verificar em um intervalo de 500ms
let intervalo = setInterval(verificarDedos, 500);
function preeação1() {
botaomao1.removeEventListener("click", preeação1)
avisojogada.textContent = "Selecione seu alvo!"
botaomao1.style.border = "solid red"
    if(proxydedos.dedos3 > 0){
    ablebutton(botaomao3);
    botaomao3.addEventListener("click", ação1pra3);}
    if(proxydedos.dedos4 > 0){
    ablebutton(botaomao4);
    botaomao4.addEventListener("click", ação1pra4);}
    ablebutton(botaomao1)
    botaomao1.addEventListener("click", mao1selecionar)
        
    
}
function mao1selecionar() {
botaomao3.removeEventListener("click", ação1pra3)
        botaomao4.removeEventListener("click", ação1pra4)
        botaomao1.removeEventListener("click", mao1selecionar)
        botaomao1.style.border = "none"
        avisojogada.textContent = ""
        botaomao1.addEventListener("click",preeação1)
}

function preeação2() {
botaomao2.removeEventListener("click", preeação2)
avisojogada.textContent = "Selecione seu alvo!"
botaomao2.style.border = "solid red"
if(proxydedos.dedos3 > 0){
    ablebutton(botaomao3);
    botaomao3.addEventListener("click", ação2pra3);}
    if(proxydedos.dedos4 > 0){
    ablebutton(botaomao4);
    botaomao4.addEventListener("click", ação2pra4);}
    ablebutton(botaomao2)
    botaomao2.addEventListener("click", mao2selecionar)
}
function mao2selecionar() {
botaomao3.removeEventListener("click", ação2pra3)
        botaomao4.removeEventListener("click", ação2pra4)
        botaomao2.removeEventListener("click", mao2selecionar)
        botaomao2.style.border = "none"
        avisojogada.textContent = ""
        botaomao2.addEventListener("click",preeação2)
}


function preeação3() {
botaomao3.removeEventListener("click", preeação3)
botaomao3.style.border = "solid red"
avisojogada2.textContent = "Selecione seu alvo!"
if(proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", ação3pra1);}
    if(proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", ação3pra2);}
    ablebutton(botaomao3)
    botaomao3.addEventListener("click", mao3selecionar)
}
function mao3selecionar() {
botaomao1.removeEventListener("click", ação3pra1)
        botaomao2.removeEventListener("click", ação3pra2)
        botaomao3.removeEventListener("click", mao3selecionar)
        botaomao3.style.border = "none"
        avisojogada2.textContent = ""
        botaomao3.addEventListener("click",preeação3)
}

function preeação4() {
botaomao4.removeEventListener("click",preeação4)
botaomao4.style.border = "solid red"
avisojogada2.textContent = "Selecione seu alvo!"
if(proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", ação4pra1);}
    if(proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", ação4pra2);}
    ablebutton(botaomao4)
    botaomao4.addEventListener("click", mao4selecionar)
}
function mao4selecionar() {
botaomao1.removeEventListener("click", ação4pra1)
        botaomao2.removeEventListener("click", ação4pra2)
        botaomao4.removeEventListener("click", mao4selecionar)
        botaomao4.style.border = "none"
        avisojogada2.textContent = ""
        botaomao4.addEventListener("click",preeação4)
}

function ação1pra3() {
proxydedos.dedos3 = proxydedos.dedos1 + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação1pra3)
            botaomao4.removeEventListener("click", ação1pra4)
}
function ação1pra4() {
proxydedos.dedos4 = proxydedos.dedos1 + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação1pra3)
            botaomao4.removeEventListener("click", ação1pra4)
}

function ação2pra3() {
proxydedos.dedos3 = proxydedos.dedos2 + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação2pra3)
            botaomao4.removeEventListener("click", ação2pra4)
}
function ação2pra4() {
proxydedos.dedos4 = proxydedos.dedos2 + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação2pra3)
            botaomao4.removeEventListener("click", ação2pra4)
}

function ação3pra1() {
proxydedos.dedos1 = proxydedos.dedos1 + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação3pra1)
            botaomao2.removeEventListener("click", ação3pra2)
        }
function ação3pra2() {
proxydedos.dedos2 = proxydedos.dedos2 + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação3pra1)
            botaomao2.removeEventListener("click", ação3pra2)
        }

function ação4pra1() {
proxydedos.dedos1 = proxydedos.dedos1 + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação4pra1)
            botaomao2.removeEventListener("click", ação4pra2)
}
function ação4pra2() {
proxydedos.dedos2 = proxydedos.dedos2 + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação4pra1)
            botaomao2.removeEventListener("click", ação4pra2)
}



//função para mudar imagens
function mudarImagem(elemento, novaImagem) {
    elemento.src = novaImagem;
}

function fimdejogo() {
    if (proxydedos.dedos1 == 0 & proxydedos.dedos2 ==0){
        alert("Fim de jogo \nPlayer 2 venceu!")
        window.location.reload()
    }
    if(proxydedos.dedos3 == 0 & proxydedos.dedos4 == 0){
        alert("Fim de jogo \nPlayer 1 venceu!")
        window.location.reload()
    }
}

let intervalofim = setInterval(fimdejogo, 2000);

//habilita olheiros para os botoes e quando clicados alertar na tela