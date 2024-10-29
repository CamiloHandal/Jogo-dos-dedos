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
        "../audi/lobby-classic-game.mp3",
        "../audi/answer_30sec.mp3",
        "../audi/alt03-answer_030sec.mp3",
        "../audi/alt02-answer_030sec.mp3",
        "../audi/alt02-answer_060sec.mp3"
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
//Background
let main = document.getElementById("Game")
// let botaobackground = document.getElementById("backgroundbutton")
let cor = document.getElementById("cor")
// backgroundaberto = false
// botaobackground.addEventListener("click", function () {
//     if (backgroundaberto == false) {
//         cor.disabled = false
//         cor.hidden = false
//         backgroundaberto = true
//     }
//     else if (backgroundaberto == true){
//         cor.disabled = true
//         cor.hidden = true
//         backgroundaberto = false
//     }
// })
cor.addEventListener("input", function () {
    main.style.backgroundColor = cor.value
    botaomao1.style.backgroundColor = cor.value
    botaomao2.style.backgroundColor = cor.value
    botaomao3.style.backgroundColor = cor.value
    botaomao4.style.backgroundColor = cor.value
    vestiario.style.backgroundColor = cor.value
})
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
let divjogada = document.getElementById("divjogada")
let divjogada2 = document.getElementById("divjogada2")
let avisojogada2 = document.getElementById("avisojogada2")

let vidas1 = 1
let vidas2 = 1
let vidas3 = 1
let vidas4 = 1


//Declaração de valores e imagens para os dedos
let dedos = {
    dedos1:2,
    dedos2:2,
    dedos3:2,
    dedos4:2,
}
let proxydedos = new Proxy(dedos, {
    set(target, name, value){
    console.log("Mudando", target);
    fimdejogo
    target[name] = value
    verificarDedos()
    }
})

let skinhiro = ["https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%200%20hiro.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%201%20hiro.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%202%20hiro.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%203%20hiro.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%204%20hiro.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%205%20hiro.png"]

let skincamilo = ["https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%200%20camilo.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%201%20camilo.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%202%20camilo.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%203%20camilo.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%204%20camilo.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%205%20camilo.png"]

let skinbilibio = ["https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%200%20bilibio.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%201%20bilibio.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%202%20bilibio.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%203%20bilibio.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%204%20bilibio.png","https://raw.githubusercontent.com/CamiloHandal/Jogo-dos-dedos/refs/heads/main/src/img/dedo%205%20bilibio.png"]

let skins = [skinhiro, skinbilibio, skincamilo]

let skin1 = skins[Math.floor(Math.random() * 3)]

let skin2 = skins[Math.floor(Math.random() * 3)]

let imagem1 = document.getElementById("imgmao1");

let imagem2 = document.getElementById("imgmao2");

let imagem3 = document.getElementById("imgmao3");

let imagem4 = document.getElementById("imgmao4");

let botaotransferir1 = document.getElementById("botaotransferir1")
let botaotransferir2 = document.getElementById("botaotransferir2")
let botaotransferir3 = document.getElementById("botaotransferir3")
let botaotransferir4 = document.getElementById("botaotransferir4")

let botaotransferir21 = document.getElementById("botaotransferir2-1")
let botaotransferir22 = document.getElementById("botaotransferir2-2")
let botaotransferir23 = document.getElementById("botaotransferir2-3")
let botaotransferir24 = document.getElementById("botaotransferir2-4")


//função para verificar a quantidade de dedos e alterar a imagem
function verificarDedos() {
if (proxydedos.dedos1 == 1) {
mudarImagem(imagem1, skin1[1]);
}
if(proxydedos.dedos1 == 2) {
mudarImagem(imagem1, skin1[2]);
}
if(proxydedos.dedos1 == 3) {
mudarImagem(imagem1, skin1[3]);
}
if(proxydedos.dedos1 == 4) {
mudarImagem(imagem1, skin1[4]);
}
if(proxydedos.dedos1 >= 5) {
    mudarImagem(imagem1, skin1[5])
    if (vidas1 == 1){
        dedos.dedos1 = 5
        vidas1 = 0
    }
    else if(vidas1 == 0){
        if (proxydedos.dedos1 > 5){
disablebutton(botaomao1)
botaomao1.removeEventListener("click", preação1)
if (proxydedos.dedos1 >= 5){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preação1)
}
setTimeout(() => {
proxydedos.dedos1 = 0
}, 750);
}
    }
}
if(proxydedos.dedos1 == 0) {
mudarImagem(imagem1, skin1[0]);
if (proxydedos.dedos1 == 0){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preação1)
}
}


if (proxydedos.dedos2 == 1) {
mudarImagem(imagem2, skin1[1]);
}
if(proxydedos.dedos2 == 2) {
mudarImagem(imagem2, skin1[2]);
}
if(proxydedos.dedos2 == 3) {
mudarImagem(imagem2, skin1[3]);
}
if(proxydedos.dedos2 == 4) {
mudarImagem(imagem2, skin1[4]);
}
if(proxydedos.dedos2 >= 5) {
    mudarImagem(imagem2, skin1[5])
    if (vidas2 == 1){
        dedos.dedos2 = 5
        vidas2 = 0
    }
    else if(vidas2 == 0){
        if (proxydedos.dedos2 > 5){
disablebutton(botaomao2)
botaomao2.removeEventListener("click", preação2)
if (proxydedos.dedos2 >= 5){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preação2)
}
setTimeout(() => {
    proxydedos.dedos2 = 0
}, 750);
    }
}
}

if(proxydedos.dedos2 == 0) {
mudarImagem(imagem2, skin1[0]);
if (proxydedos.dedos2 == 0){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preação2)
}
}

if (proxydedos.dedos3 == 1) {
mudarImagem(imagem3, skin2[1]);
}
if(proxydedos.dedos3 == 2) {
mudarImagem(imagem3, skin2[2]);
}
if(proxydedos.dedos3 == 3) {
mudarImagem(imagem3, skin2[3]);
}
if(proxydedos.dedos3 == 4) {
mudarImagem(imagem3, skin2[4]);
}
if(proxydedos.dedos3 >= 5) {
    mudarImagem(imagem3, skin2[5])
    if (vidas3 == 1){
        dedos.dedos3 = 5
        vidas3 = 0
    }
    else if(vidas3 == 0){
         if (proxydedos.dedos3 > 5){
disablebutton(botaomao3)
botaomao3.removeEventListener("click", preação3)
if (proxydedos.dedos3 >= 5){
    disablebutton(botaomao3)
    botaomao3.removeEventListener("click", preação3)
}
setTimeout(() => {
proxydedos.dedos3 = 0
}, 750);
    }
}
}
if(proxydedos.dedos3 == 0) {
mudarImagem(imagem3, skin2[0]);
if (proxydedos.dedos3 == 0){
    disablebutton(botaomao3)
    botaomao3.removeEventListener("click", preação3)
}
}

if (proxydedos.dedos4 == 1) {
mudarImagem(imagem4, skin2[1]);
}
if(proxydedos.dedos4 == 2) {
mudarImagem(imagem4, skin2[2]);
}
if(proxydedos.dedos4 == 3) {
mudarImagem(imagem4, skin2[3]);
}
if(proxydedos.dedos4 == 4) {
mudarImagem(imagem4, skin2[4]);
}
if(proxydedos.dedos4 >= 5) {
    mudarImagem(imagem4, skin2[5])
    if (vidas4 == 1){
        dedos.dedos4 = 5
        vidas4 = 0
    }
    else if(vidas4 == 0){
        if (proxydedos.dedos4 > 5){
disablebutton(botaomao4)
botaomao4.removeEventListener("click", preação4)
if (proxydedos.dedos4 >= 5){
    disablebutton(botaomao4)
    botaomao4.removeEventListener("click", preação4)
}
setTimeout(() => {
proxydedos.dedos4 = 0
}, 750);
}
    }
}
if(proxydedos.dedos4 == 0) {
mudarImagem(imagem4, skin2[0]);
if (proxydedos.dedos4 == 0){
    disablebutton(botaomao4)
    botaomao4.removeEventListener("click", preação4)
}
}
}

verificarDedos()

let skinh1 = document.getElementById("skinh1") 

let skinb1 = document.getElementById("skinb1") 

let skinc1 = document.getElementById("skinc1") 

let skinh2 = document.getElementById("skinh2") 

let skinb2 = document.getElementById("skinb2") 

let skinc2 = document.getElementById("skinc2") 

skinh1.addEventListener("click", function (){
    skin1 = skinhiro
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

skinb1.addEventListener("click", function (){
    skin1 = skinbilibio
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

skinc1.addEventListener("click", function (){
    skin1 = skincamilo
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

skinh2.addEventListener("click", function (){
    skin2 = skinhiro
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

skinb2.addEventListener("click", function (){
    skin2 = skinbilibio
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

skinc2.addEventListener("click", function (){
    skin2 = skincamilo
    proxydedos.dedos1 = proxydedos.dedos1
    proxydedos.dedos2 = proxydedos.dedos2
    proxydedos.dedos3 = proxydedos.dedos3
    proxydedos.dedos4 = proxydedos.dedos4
    console.log(skin)
})

let cima = document.getElementById("cima")
let baixo = document.getElementById("baixo")

let vestiario = document.getElementById("vestiario")
vestiarioaberto = false
vestiario.addEventListener("click", function () {
    if (vestiarioaberto == false){
        ablebutton(skinh1)
        ablebutton(skinh2)
        ablebutton(skinb1)
        ablebutton(skinb2)
        ablebutton(skinc1)
        ablebutton(skinc2)
        cima.hidden = false
        baixo.hidden = false
        skinh1.hidden = false
        skinh2.hidden = false
        skinb1.hidden = false
        skinb2.hidden = false
        skinc1.hidden = false
        skinc2.hidden = false
    }
    if (vestiarioaberto == true) {
        disablebutton(skinh1)
        disablebutton(skinh2)
        disablebutton(skinb1)
        disablebutton(skinb2)
        disablebutton(skinc1)
        disablebutton(skinc2)
        cima.hidden = true
        baixo.hidden = true
        skinh1.hidden = true
        skinh2.hidden = true
        skinb1.hidden = true
        skinb2.hidden = true
        skinc1.hidden = true
        skinc2.hidden = true
    }
    if (vestiarioaberto == false) {
        vestiarioaberto = true
    }
    else if (vestiarioaberto == true) {
        vestiarioaberto = false
    }
})

// Define o turno aleatoriamente entre 1 ou 2
let turno = Math.floor(Math.random() * 2) + 1;
console.log("Turno inicial: " + turno);
let avisoturno = document.getElementById("avisoturno")
let divturno = document.getElementById("divturno")
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
divjogada2.hidden = true
avisojogada2.textContent = ""
botaomao1.removeEventListener("click", mao1selecionar)
botaomao2.removeEventListener("click", mao2selecionar)
botaomao3.removeEventListener("click", mao3selecionar)
botaomao4.removeEventListener("click", mao4selecionar)
botaomao3.style.border = "none"
botaomao4.style.border = "none"
botaomao1.removeEventListener("click", preação1);
botaomao2.removeEventListener("click", preação2);
botaomao3.removeEventListener("click", preação3);
botaomao4.removeEventListener("click", preação4);
// Habilitar botões do player 1 no turno 1
if (proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", preação1);
} else {
    disablebutton(botaomao1);
}
if (proxydedos.dedos1 == 0){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preação1)
}

if (proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", preação2);
} else {
    disablebutton(botaomao2);
}
if (proxydedos.dedos2 == 0){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preação2)
}
avisoturno.textContent = "É a vez do de baixo!";



}

if (turnoAtual === 2) {
// Limpa todos os botões antes de configurar o novo turno
disablebutton(botaomao1);
disablebutton(botaomao2);
disablebutton(botaomao3);
disablebutton(botaomao4);
divjogada.hidden = true
avisojogada.textContent = ""
botaomao1.removeEventListener("click", mao1selecionar)
botaomao2.removeEventListener("click", mao2selecionar)
botaomao3.removeEventListener("click", mao3selecionar)
botaomao4.removeEventListener("click", mao4selecionar)
botaomao1.style.border = "none"
botaomao2.style.border = "none"
botaomao1.removeEventListener("click", preação1);
botaomao2.removeEventListener("click", preação2);
botaomao3.removeEventListener("click", preação3);
botaomao4.removeEventListener("click", preação4);
// Habilitar botões do player 2 no turno 2
if (proxydedos.dedos3 > 0){
    ablebutton(botaomao3);
    botaomao3.addEventListener("click", preação3);
} else {
    disablebutton(botaomao3);
}
if (proxydedos.dedos4 > 0 ){
    ablebutton(botaomao4);
    botaomao4.addEventListener("click", preação4);
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
desabilitarTransferencia();
console.log("Turno alterado para: " + novoValor);
configurarTurno(novoValor); // Chama a função que configura os eventos do turno
return true;
}
});

// Configura o turno inicial
configurarTurno(proxyTurno.valor);


// Variáveis globais para armazenar as funções dos event listeners
let listener1, listener2, listener3, listener4;

// Função para transferir dedos entre as mãos
function transferirEntreMaos(maoOrigem, maoDestino, numDedos) {
    let tempOrigem = proxydedos[maoOrigem];
    let tempDestino = proxydedos[maoDestino];
    
    proxydedos[maoOrigem] -= numDedos;
    proxydedos[maoDestino] += numDedos*2;

    // Verificação de jogada inválida
    if (proxydedos[maoOrigem] === tempDestino && proxydedos[maoDestino] === tempOrigem) {
        alert("JOGADA INVÁLIDA!\nJogadas de 'passar a vez' sem mudar os dedos não são permitidas!");
        proxydedos[maoOrigem] = tempOrigem; // Reverte o estado
        proxydedos[maoDestino] = tempDestino;
        return false; // Retorna falso se a jogada for inválida
    }
    return true; // Retorna verdadeiro se a jogada for válida
}

// Função para desabilitar os botões de transferência após a jogada
function desabilitarTransferencia() {
    // Remove listeners das ações de mão
    botaomao1.removeEventListener("click", preação1);
    botaomao2.removeEventListener("click", preação2);
    botaomao3.removeEventListener("click", ação1pra3);
    botaomao4.removeEventListener("click", ação1pra4);
    botaomao3.removeEventListener("click", ação2pra3);
    botaomao4.removeEventListener("click", ação2pra4);

    botaomao3.removeEventListener("click", preação3);
    botaomao4.removeEventListener("click", preação4);
    botaomao1.removeEventListener("click", ação3pra1);
    botaomao2.removeEventListener("click", ação3pra2);
    botaomao1.removeEventListener("click", ação4pra1);
    botaomao2.removeEventListener("click", ação4pra2);

    botaomao1.removeEventListener("click", transferir2pra1)
    botaomao2.removeEventListener("click", tranferir1pra2)

    botaomao3.removeEventListener("click", transferir4pra3)
    botaomao4.removeEventListener("click", transferir3pra4)

    disablebutton(botaotransferir1);
    botaotransferir1.hidden = true;
    if (listener1) {
        botaotransferir1.removeEventListener("click", listener1);
    }

    disablebutton(botaotransferir2);
    botaotransferir2.hidden = true;
    if (listener2) {
        botaotransferir2.removeEventListener("click", listener2);
    }

    disablebutton(botaotransferir3);
    botaotransferir3.hidden = true;
    if (listener3) {
        botaotransferir3.removeEventListener("click", listener3);
    }

    disablebutton(botaotransferir4);
    botaotransferir4.hidden = true;
    if (listener4) {
        botaotransferir4.removeEventListener("click", listener4);
    }
    
    


    disablebutton(botaotransferir21);
    botaotransferir21.hidden = true;
    if (listener1) {
        botaotransferir21.removeEventListener("click", listener1);
    }

    disablebutton(botaotransferir22);
    botaotransferir22.hidden = true;
    if (listener2) {
        botaotransferir22.removeEventListener("click", listener2);
    }

    disablebutton(botaotransferir23);
    botaotransferir23.hidden = true;
    if (listener3) {
        botaotransferir23.removeEventListener("click", listener3);
    }

    disablebutton(botaotransferir24);
    botaotransferir24.hidden = true;
    if (listener4) {
        botaotransferir24.removeEventListener("click", listener4);
    }
}

function tranferir1pra2() {
    if (proxydedos.dedos1 >= 1) {
        divjogada.hidden = false
        avisojogada.textContent = "Selecione a quantidade de dedos:"
        botaotransferir1.hidden = false;
        ablebutton(botaotransferir1);
        listener1 = function () {
            if (transferirEntreMaos("dedos1", "dedos2", 1)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir1.addEventListener("click", listener1);
    }

    if (proxydedos.dedos1 >= 2) {
        if (proxydedos.dedos1 == 3 && proxydedos.dedos2 == 4 || proxydedos.dedos1 == 2 && proxydedos.dedos2 == 4){
            botaotransferir2.hidden = true;
        disablebutton(botaotransferir2);
        } else {
        botaotransferir2.hidden = false;
        ablebutton(botaotransferir2);
    }
        listener2 = function () {
            if (transferirEntreMaos("dedos1", "dedos2", 2)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir2.addEventListener("click", listener2);
    }

    if (proxydedos.dedos1 >= 3) {
        if (proxydedos.dedos1 == 3 && proxydedos.dedos2 == 3 || proxydedos.dedos1 == 3 && proxydedos.dedos2 == 4 || proxydedos.dedos1 == 4 && proxydedos.dedos2 == 3){
            botaotransferir3.hidden = true;
        disablebutton(botaotransferir3);
        } else {
        botaotransferir3.hidden = false;
        ablebutton(botaotransferir3);
    }
        listener3 = function () {
            if (transferirEntreMaos("dedos1", "dedos2", 3)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir3.addEventListener("click", listener3);
    }

    if (proxydedos.dedos1 == 4) {
        if (proxydedos.dedos1 == 4 && proxydedos.dedos2 == 4 || proxydedos.dedos1 == 4 && proxydedos.dedos2 == 3 || proxydedos.dedos1 == 4 && proxydedos.dedos2 == 2){
            botaotransferir4.hidden = true;
        disablebutton(botaotransferir4);
        } else {
        botaotransferir4.hidden = false;
        ablebutton(botaotransferir4);
    }
        listener4 = function () {
            if (transferirEntreMaos("dedos1", "dedos2", 4)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir4.addEventListener("click", listener4);
    }
}

function transferir2pra1() {
    if (proxydedos.dedos2 >= 1) {
        divjogada.hidden = false
        avisojogada.textContent = "Selecione a quantidade de dedos:"
        botaotransferir1.hidden = false;
        ablebutton(botaotransferir1);
        listener1 = function () {
            if (transferirEntreMaos("dedos2", "dedos1", 1)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir1.addEventListener("click", listener1);
    }

    if (proxydedos.dedos2 >= 2) {
        if (proxydedos.dedos1 == 4 && proxydedos.dedos2 == 3 || proxydedos.dedos1 == 4 && proxydedos.dedos2 == 2){
            botaotransferir2.hidden = true;
        disablebutton(botaotransferir2);
        } else {
        botaotransferir2.hidden = false;
        ablebutton(botaotransferir2);
    }
        listener2 = function () {
            if (transferirEntreMaos("dedos2", "dedos1", 2)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir2.addEventListener("click", listener2);
    }

    if (proxydedos.dedos2 >= 3) {
        if (proxydedos.dedos2 == 3 && proxydedos.dedos1 == 3 || proxydedos.dedos2 == 3 && proxydedos.dedos1 == 4 || proxydedos.dedos2 == 4 && proxydedos.dedos1 == 3){
            botaotransferir3.hidden = true;
        disablebutton(botaotransferir3);
        } else {
        botaotransferir3.hidden = false;
        ablebutton(botaotransferir3);
    }
        listener3 = function () {
            if (transferirEntreMaos("dedos2", "dedos1", 3)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir3.addEventListener("click", listener3);
    }

    if (proxydedos.dedos2 == 4) {
        if (proxydedos.dedos2 == 4 && proxydedos.dedos1 == 4 || proxydedos.dedos2 == 4 && proxydedos.dedos1 == 3 || proxydedos.dedos2 == 4 && proxydedos.dedos1 == 2){
            botaotransferir4.hidden = true;
        disablebutton(botaotransferir4);
        } else {
        botaotransferir4.hidden = false;
        ablebutton(botaotransferir4);
    }
        listener4 = function () {
            if (transferirEntreMaos("dedos2", "dedos1", 4)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 2; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir4.addEventListener("click", listener4);
    }
}

function transferir3pra4() {
    if (proxydedos.dedos3 >= 1) {
        divjogada2.hidden = false
        avisojogada2.textContent = "Selecione a quantidade de dedos:"
        botaotransferir21.hidden = false;
        ablebutton(botaotransferir21);
        listener1 = function () {
            if (transferirEntreMaos("dedos3", "dedos4", 1)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir21.addEventListener("click", listener1);
    }

    if (proxydedos.dedos3 >= 2) {
        if (proxydedos.dedos3 == 3 && proxydedos.dedos4 == 4 || proxydedos.dedos3 == 2 && proxydedos.dedos4 == 4){
            botaotransferir22.hidden = true;
        disablebutton(botaotransferir22);
        } else {
        botaotransferir22.hidden = false;
        ablebutton(botaotransferir22);
    }
        listener2 = function () {
            if (transferirEntreMaos("dedos3", "dedos4", 2)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir22.addEventListener("click", listener2);
    }

    if (proxydedos.dedos3 >= 3) {
        if (proxydedos.dedos3 == 3 && proxydedos.dedos4 == 3 || proxydedos.dedos3 == 3 && proxydedos.dedos4 == 4 || proxydedos.dedos3 == 4 && proxydedos.dedos4 == 3){
            botaotransferir23.hidden = true;
        disablebutton(botaotransferir23);
        } else {
        botaotransferir23.hidden = false;
        ablebutton(botaotransferir23);
    }
        listener3 = function () {
            if (transferirEntreMaos("dedos3", "dedos4", 3)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir23.addEventListener("click", listener3);
    }

    if (proxydedos.dedos3 == 4) {
        if (proxydedos.dedos3 == 4 && proxydedos.dedos4 == 4 || proxydedos.dedos3 == 4 && proxydedos.dedos4 == 3 || proxydedos.dedos3 == 4 && proxydedos.dedos4 == 2){
            botaotransferir24.hidden = true;
        disablebutton(botaotransferir24);
        } else {
        botaotransferir24.hidden = false;
        ablebutton(botaotransferir24);
    }
        listener4 = function () {
            if (transferirEntreMaos("dedos3", "dedos4", 4)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir24.addEventListener("click", listener4);
    }
}

function transferir4pra3() {
    if (proxydedos.dedos4 >= 1) {
        divjogada2.hidden = false
        avisojogada2.textContent = "Selecione a quantidade de dedos:"
        botaotransferir21.hidden = false;
        ablebutton(botaotransferir21);
        listener1 = function () {
            if (transferirEntreMaos("dedos4", "dedos3", 1)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir21.addEventListener("click", listener1);
    }

    if (proxydedos.dedos4 >= 2) {
        if (proxydedos.dedos4 == 3 && proxydedos.dedos3 == 4 || proxydedos.dedos4 == 2 && proxydedos.dedos3 == 4
        ){
            botaotransferir22.hidden = true;
        disablebutton(botaotransferir22);
        } else {
        botaotransferir22.hidden = false;
        ablebutton(botaotransferir22);
    }
        listener2 = function () {
            if (transferirEntreMaos("dedos4", "dedos3", 2)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir22.addEventListener("click", listener2);
    }

    if (proxydedos.dedos4 >= 3) {
        if (proxydedos.dedos4 == 3 && proxydedos.dedos3 == 3 || proxydedos.dedos4 == 3 && proxydedos.dedos3 == 4 || proxydedos.dedos4 == 4 && proxydedos.dedos3 == 3){
            botaotransferir23.hidden = true;
        disablebutton(botaotransferir23);
        } else {
        botaotransferir23.hidden = false;
        ablebutton(botaotransferir23);
    }
        listener3 = function () {
            if (transferirEntreMaos("dedos4", "dedos3", 3)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir23.addEventListener("click", listener3);
    }

    if (proxydedos.dedos4 == 4) {
        if (proxydedos.dedos4 == 4 && proxydedos.dedos3 == 4 || proxydedos.dedos4 == 4 && proxydedos.dedos3 == 3 || proxydedos.dedos4 == 4 && proxydedos.dedos3 == 2){
            botaotransferir24.hidden = true;
        disablebutton(botaotransferir24);
        } else {
        botaotransferir24.hidden = false;
        ablebutton(botaotransferir24);
    }
        listener4 = function () {
            if (transferirEntreMaos("dedos4", "dedos3", 4)) {
                desabilitarTransferencia(); // Desabilita botões de transferência após a jogada
                proxyTurno.valor = 1; // Passa o turno ao próximo jogador
            }
        };
        botaotransferir24.addEventListener("click", listener4);
    }
}


function preação1() {
    botaomao1.removeEventListener("click", preação1)
    botaomao2.removeEventListener("click", preação2)
    divjogada.hidden = false
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
        
        ablebutton(botaomao2)
        botaomao2.addEventListener("click", tranferir1pra2)
    }
    

function mao1selecionar() {
botaomao3.removeEventListener("click", ação1pra3)
        botaomao4.removeEventListener("click", ação1pra4)
        botaomao1.removeEventListener("click", mao1selecionar)
        botaomao1.style.border = "none"
        divjogada.hidden = true
        avisojogada.textContent = ""
        botaomao1.addEventListener("click",preação1)
        botaomao2.addEventListener("click", preação2)
        botaotransferir1.hidden = true
        botaotransferir2.hidden = true
        botaotransferir3.hidden = true
        botaotransferir4.hidden = true
        disablebutton(botaotransferir2)
        disablebutton(botaotransferir3)
        disablebutton(botaotransferir4)
        botaomao2.removeEventListener("click", tranferir1pra2)
}

function preação2() {
botaomao1.removeEventListener("click", preação1)    
botaomao2.removeEventListener("click", preação2)
divjogada.hidden = false
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

    ablebutton(botaomao1)
        botaomao1.addEventListener("click", transferir2pra1)
}

function mao2selecionar() {
botaomao3.removeEventListener("click", ação2pra3)
        botaomao4.removeEventListener("click", ação2pra4)
        botaomao2.removeEventListener("click", mao2selecionar)
        botaomao2.style.border = "none"
        divjogada.hidden = true
        avisojogada.textContent = ""
        botaomao1.addEventListener("click", preação1)
        botaomao2.addEventListener("click",preação2)

        botaotransferir1.hidden = true
        botaotransferir2.hidden = true
        botaotransferir3.hidden = true
        botaotransferir4.hidden = true
        disablebutton(botaotransferir2)
        disablebutton(botaotransferir3)
        disablebutton(botaotransferir4)
        botaomao1.removeEventListener("click", transferir2pra1)
}


function preação3() {
botaomao3.removeEventListener("click", preação3)
botaomao4.removeEventListener("click", preação4)
botaomao3.style.border = "solid red"
divjogada2.hidden = false
avisojogada2.textContent = "Selecione seu alvo!"
if(proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", ação3pra1);}
    if(proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", ação3pra2);}
    ablebutton(botaomao3)
    botaomao3.addEventListener("click", mao3selecionar)

    ablebutton(botaomao4)
        botaomao4.addEventListener("click", transferir3pra4)
}
function mao3selecionar() {
botaomao1.removeEventListener("click", ação3pra1)
        botaomao2.removeEventListener("click", ação3pra2)
        botaomao3.removeEventListener("click", mao3selecionar)
        botaomao3.style.border = "none"
        divjogada2.hidden = true
        avisojogada2.textContent = ""
        botaomao3.addEventListener("click",preação3)
        botaomao4.addEventListener("click", preação4)

        botaotransferir21.hidden = true
        botaotransferir22.hidden = true
        botaotransferir23.hidden = true
        botaotransferir24.hidden = true
        disablebutton(botaotransferir22)
        disablebutton(botaotransferir23)
        disablebutton(botaotransferir24)
        botaomao4.removeEventListener("click", transferir3pra4)
}

function preação4() {
botaomao3.removeEventListener("click", preação3)
botaomao4.removeEventListener("click",preação4)
botaomao4.style.border = "solid red"
divjogada2.hidden = false
avisojogada2.textContent = "Selecione seu alvo!"
if(proxydedos.dedos1 > 0){
    ablebutton(botaomao1);
    botaomao1.addEventListener("click", ação4pra1);}
    if(proxydedos.dedos2 > 0){
    ablebutton(botaomao2);
    botaomao2.addEventListener("click", ação4pra2);}
    ablebutton(botaomao4)
    botaomao4.addEventListener("click", mao4selecionar)

    ablebutton(botaomao3)
        botaomao3.addEventListener("click", transferir4pra3)
}
function mao4selecionar() {
botaomao1.removeEventListener("click", ação4pra1)
        botaomao2.removeEventListener("click", ação4pra2)
        botaomao4.removeEventListener("click", mao4selecionar)
        botaomao4.style.border = "none"
        divjogada2.hidden = true
        avisojogada2.textContent = ""
        botaomao3.addEventListener("click", preação3)
        botaomao4.addEventListener("click",preação4)

        botaotransferir21.hidden = true
        botaotransferir22.hidden = true
        botaotransferir23.hidden = true
        botaotransferir24.hidden = true
        disablebutton(botaotransferir22)
        disablebutton(botaotransferir23)
        disablebutton(botaotransferir24)
        botaomao3.removeEventListener("click", transferir4pra3)
}



function ação1pra3() {
proxydedos.dedos3 = (proxydedos.dedos1*2) + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação1pra3)
            botaomao4.removeEventListener("click", ação1pra4)
}
function ação1pra4() {
proxydedos.dedos4 = (proxydedos.dedos1*2) + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação1pra3)
            botaomao4.removeEventListener("click", ação1pra4)
}

function ação2pra3() {
proxydedos.dedos3 = (proxydedos.dedos2*2) + proxydedos.dedos3
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação2pra3)
            botaomao4.removeEventListener("click", ação2pra4)
}
function ação2pra4() {
proxydedos.dedos4 = (proxydedos.dedos2*2) + proxydedos.dedos4
            console.log("somou!")
            proxyTurno.valor=2
            botaomao3.removeEventListener("click", ação2pra3)
            botaomao4.removeEventListener("click", ação2pra4)
}

function ação3pra1() {
proxydedos.dedos1 = proxydedos.dedos1 + (proxydedos.dedos3*2)
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação3pra1)
            botaomao2.removeEventListener("click", ação3pra2)
        }
function ação3pra2() {
proxydedos.dedos2 = proxydedos.dedos2 + (proxydedos.dedos3*2)
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação3pra1)
            botaomao2.removeEventListener("click", ação3pra2)
        }

function ação4pra1() {
proxydedos.dedos1 = proxydedos.dedos1 + (proxydedos.dedos4*2)
            console.log("somou!")
            proxyTurno.valor=1
            botaomao1.removeEventListener("click", ação4pra1)
            botaomao2.removeEventListener("click", ação4pra2)
}
function ação4pra2() {
proxydedos.dedos2 = proxydedos.dedos2 + (proxydedos.dedos4*2)
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
