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
        "../src/aud/lobby-classic-game.mp3",
        "../src/aud/answer_30sec.mp3",
        "../src/aud/alt02-answer_030sec.mp3",
        "../src/aud/alt03-answer_030sec.mp3",
        "../src/aud/alt02-answer_060sec.mp3"
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
    verificarDedos()
    }
})

let skinhiro = ["../src/img/dedo 0 hiro.png","../src/img/dedo 1 hiro.png","../src/img/dedo 2 hiro.png","../src/img/dedo 3 hiro.png","../src/img/dedo 4 hiro.png","../src/img/dedo 5 hiro.png"]

let skincamilo = ["../src/img/dedo 0 camilo.png","../src/img/dedo 1 camilo.png","../src/img/dedo 2 camilo.png","../src/img/dedo 3 camilo.png","../src/img/dedo 4 camilo.png","../src/img/dedo 5 camilo.png"]

let skinbilibio = ["../src/img/dedo 0 bilibio.png","../src/img/dedo 1 bilibio.png","../src/img/dedo 2 bilibio.png","../src/img/dedo 3 bilibio.png","../src/img/dedo 4 bilibio.png","../src/img/dedo 5 bilibio.png"]

let skins = [skinhiro, skinbilibio, skincamilo]

let skin1 = skins[Math.floor(Math.random() * 3)]

let skin2 = skins[Math.floor(Math.random() * 3)]

let imagem1 = document.getElementById("imgmao1");

let imagem2 = document.getElementById("imgmao2");

let imagem3 = document.getElementById("imgmao3");

let imagem4 = document.getElementById("imgmao4");



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
if(proxydedos.dedos1 == 5) {
disablebutton(botaomao1)
botaomao1.removeEventListener("click", preeação1)
if (proxydedos.dedos1 >= 5){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preeação1)
}
mudarImagem(imagem1, skin1[5]);
setTimeout(() => {
proxydedos.dedos1 = 0
}, 750);

}
if(proxydedos.dedos1 == 6) {
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preeação1)
    if (proxydedos.dedos1 >= 5){
        disablebutton(botaomao1)
        botaomao1.removeEventListener("click", preeação1)
    }
    mudarImagem(imagem1, skin1[5]);
    setTimeout(() => {
    proxydedos.dedos1 = 1
    }, 750);
    
    }

    if(proxydedos.dedos1 == 7) {
        disablebutton(botaomao1)
        botaomao1.removeEventListener("click", preeação1)
        if (proxydedos.dedos1 >= 5){
            disablebutton(botaomao1)
            botaomao1.removeEventListener("click", preeação1)
        }
        mudarImagem(imagem1, skin1[5]);
        setTimeout(() => {
        proxydedos.dedos1 = 2
        }, 750);
        
        }

        if(proxydedos.dedos1 == 8) {
            disablebutton(botaomao1)
            botaomao1.removeEventListener("click", preeação1)
            if (proxydedos.dedos1 >= 5){
                disablebutton(botaomao1)
                botaomao1.removeEventListener("click", preeação1)
            }
            mudarImagem(imagem1, skin1[5]);
            setTimeout(() => {
            proxydedos.dedos1 = 3
            }, 750);
            
            }
            
            if(proxydedos.dedos1 == 9) {
                disablebutton(botaomao1)
                botaomao1.removeEventListener("click", preeação1)
                if (proxydedos.dedos1 >= 5){
                    disablebutton(botaomao1)
                    botaomao1.removeEventListener("click", preeação1)
                }
                mudarImagem(imagem1, skin1[5]);
                setTimeout(() => {
                proxydedos.dedos1 = 4
                }, 750);
                
                }
    


if(proxydedos.dedos1 == 0) {
mudarImagem(imagem1, skin1[0]);
if (proxydedos.dedos1 == 0){
    disablebutton(botaomao1)
    botaomao1.removeEventListener("click", preeação1)
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
if(proxydedos.dedos2 == 5) {
disablebutton(botaomao2)
botaomao2.removeEventListener("click", preeação2)
if (proxydedos.dedos2 >= 5){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preeação2)
}
mudarImagem(imagem2, skin1[5]);
setTimeout(() => {
    proxydedos.dedos2 = 0
}, 750);
}

if(proxydedos.dedos2 == 6) {
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preeação2)
    if (proxydedos.dedos2 >= 5){
        disablebutton(botaomao2)
        botaomao2.removeEventListener("click", preeação2)
    }
    mudarImagem(imagem2, skin1[5]);
    setTimeout(() => {
    proxydedos.dedos2 = 1
    }, 750);
    
    }

    if(proxydedos.dedos2 == 7) {
        disablebutton(botaomao2)
        botaomao2.removeEventListener("click", preeação2)
        if (proxydedos.dedos2 >= 5){
            disablebutton(botaomao2)
            botaomao2.removeEventListener("click", preeação2)
        }
        mudarImagem(imagem2, skin1[5]);
        setTimeout(() => {
        proxydedos.dedos2 = 2
        }, 750);
        
        }

        if(proxydedos.dedos2 == 8) {
            disablebutton(botaomao2)
            botaomao2.removeEventListener("click", preeação2)
            if (proxydedos.dedos2 >= 5){
                disablebutton(botaomao2)
                botaomao2.removeEventListener("click", preeação2)
            }
            mudarImagem(imagem2, skin1[5]);
            setTimeout(() => {
            proxydedos.dedos2 = 3
            }, 750);
            
            }
            
            if(proxydedos.dedos2 == 9) {
                disablebutton(botaomao2)
                botaomao2.removeEventListener("click", preeação2)
                if (proxydedos.dedos2 >= 5){
                    disablebutton(botaomao2)
                    botaomao2.removeEventListener("click", preeação2)
                }
                mudarImagem(imagem2, skin1[5]);
                setTimeout(() => {
                proxydedos.dedos2 = 4
                }, 750);
                
                }

if(proxydedos.dedos2 == 0) {
mudarImagem(imagem2, skin1[0]);
if (proxydedos.dedos2 == 0){
    disablebutton(botaomao2)
    botaomao2.removeEventListener("click", preeação2)
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
if(proxydedos.dedos3 == 5) {
disablebutton(botaomao3)
botaomao3.removeEventListener("click", preeação3)
if (proxydedos.dedos3 >= 5){
    disablebutton(botaomao3)
    botaomao3.removeEventListener("click", preeação3)
}
mudarImagem(imagem3, skin2[5])
setTimeout(() => {
proxydedos.dedos3 = 0
}, 750);

}

if(proxydedos.dedos3 == 6) {
    disablebutton(botaomao3)
    botaomao3.removeEventListener("click", preeação3)
    if (proxydedos.dedos3 >= 5){
        disablebutton(botaomao3)
        botaomao1.removeEventListener("click", preeação3)
    }
    mudarImagem(imagem3, skin2[5]);
    setTimeout(() => {
    proxydedos.dedos3 = 1
    }, 750);
    
    }

    if(proxydedos.dedos3 == 7) {
        disablebutton(botaomao3)
        botaomao3.removeEventListener("click", preeação3)
        if (proxydedos.dedos3 >= 5){
            disablebutton(botaomao3)
            botaomao3.removeEventListener("click", preeação3)
        }
        mudarImagem(imagem3, skin2[5]);
        setTimeout(() => {
        proxydedos.dedos3 = 2
        }, 750);
        
        }

        if(proxydedos.dedos3 == 8) {
            disablebutton(botaomao3)
            botaomao3.removeEventListener("click", preeação3)
            if (proxydedos.dedos3 >= 5){
                disablebutton(botaomao3)
                botaomao3.removeEventListener("click", preeação3)
            }
            mudarImagem(imagem3, skin2[5]);
            setTimeout(() => {
            proxydedos.dedos3 = 3
            }, 750);
            
            }
            
            if(proxydedos.dedos3 == 9) {
                disablebutton(botaomao3)
                botaomao3.removeEventListener("click", preeação3)
                if (proxydedos.dedos3 >= 5){
                    disablebutton(botaomao3)
                    botaomao3.removeEventListener("click", preeação3)
                }
                mudarImagem(imagem3, skin2[5]);
                setTimeout(() => {
                proxydedos.dedos3 = 4
                }, 750);
                
                }

if(proxydedos.dedos3 == 0) {
mudarImagem(imagem3, skin2[0]);
if (proxydedos.dedos3 == 0){
    disablebutton(botaomao3)
    botaomao3.removeEventListener("click", preeação3)
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
if(proxydedos.dedos4 == 5) {
disablebutton(botaomao4)
botaomao4.removeEventListener("click", preeação4)
if (proxydedos.dedos4 >= 5){
    disablebutton(botaomao4)
    botaomao4.removeEventListener("click", preeação4)
}
mudarImagem(imagem4, skin2[5])
setTimeout(() => {
proxydedos.dedos4 = 0
}, 750);
}

if(proxydedos.dedos4 == 6) {
    disablebutton(botaomao4)
    botaomao4.removeEventListener("click", preeação4)
    if (proxydedos.dedos4 >= 5){
        disablebutton(botaomao4)
        botaomao4.removeEventListener("click", preeação4)
    }
    mudarImagem(imagem4, skin2[5]);
    setTimeout(() => {
    proxydedos.dedos4 = 1
    }, 750);
    
    }

    if(proxydedos.dedos4 == 7) {
        disablebutton(botaomao4)
        botaomao4.removeEventListener("click", preeação4)
        if (proxydedos.dedos4 >= 5){
            disablebutton(botaomao4)
            botaomao4.removeEventListener("click", preeação4)
        }
        mudarImagem(imagem4, skin2[5]);
        setTimeout(() => {
        proxydedos.dedos4 = 2
        }, 750);
        
        }

        if(proxydedos.dedos4 == 8) {
            disablebutton(botaomao4)
            botaomao4.removeEventListener("click", preeação4)
            if (proxydedos.dedos4 >= 5){
                disablebutton(botaomao4)
                botaomao4.removeEventListener("click", preeação4)
            }
            mudarImagem(imagem4, skin2[5]);
            setTimeout(() => {
            proxydedos.dedos4 = 3
            }, 750);
            
            }
            
            if(proxydedos.dedos4 == 9) {
                disablebutton(botaomao4)
                botaomao4.removeEventListener("click", preeação4)
                if (proxydedos.dedos4 >= 5){
                    disablebutton(botaomao4)
                    botaomao4.removeEventListener("click", preeação4)
                }
                mudarImagem(imagem4, skin2[5]);
                setTimeout(() => {
                proxydedos.dedos4 = 4
                }, 750);
                
                }

if(proxydedos.dedos4 == 0) {
mudarImagem(imagem4, skin2[0]);
if (proxydedos.dedos4 == 0){
    disablebutton(botaomao4)
    botaomao4.removeEventListener("click", preeação4)
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
botaomao1.removeEventListener("click", preeação1);
botaomao2.removeEventListener("click", preeação2);
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
    botaomao2.removeEventListener("click", preeação2)
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
botaomao1.removeEventListener("click", preeação1);
botaomao2.removeEventListener("click", preeação2);
botaomao3.removeEventListener("click", preeação3);
botaomao4.removeEventListener("click", preeação4);
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


function preeação1() {
    botaomao1.removeEventListener("click", preeação1)
    botaomao2.removeEventListener("click", preeação2)
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
        botaomao1.addEventListener("click",preeação1)
        botaomao2.addEventListener("click", preeação2)
        botaomao2.removeEventListener("click", tranferir1pra2)
}

function preeação2() {
botaomao1.removeEventListener("click", preeação1)    
botaomao2.removeEventListener("click", preeação2)
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
}

function mao2selecionar() {
botaomao3.removeEventListener("click", ação2pra3)
        botaomao4.removeEventListener("click", ação2pra4)
        botaomao2.removeEventListener("click", mao2selecionar)
        botaomao2.style.border = "none"
        divjogada.hidden = true
        avisojogada.textContent = ""
        botaomao1.addEventListener("click", preeação1)
        botaomao2.addEventListener("click",preeação2)
}


function preeação3() {
botaomao3.removeEventListener("click", preeação3)
botaomao4.removeEventListener("click", preeação4)
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

}
function mao3selecionar() {
botaomao1.removeEventListener("click", ação3pra1)
        botaomao2.removeEventListener("click", ação3pra2)
        botaomao3.removeEventListener("click", mao3selecionar)
        botaomao3.style.border = "none"
        divjogada2.hidden = true
        avisojogada2.textContent = ""
        botaomao3.addEventListener("click",preeação3)
        botaomao4.addEventListener("click", preeação4)

}

function preeação4() {
botaomao3.removeEventListener("click", preeação3)
botaomao4.removeEventListener("click",preeação4)
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

}
function mao4selecionar() {
botaomao1.removeEventListener("click", ação4pra1)
        botaomao2.removeEventListener("click", ação4pra2)
        botaomao4.removeEventListener("click", mao4selecionar)
        botaomao4.style.border = "none"
        divjogada2.hidden = true
        avisojogada2.textContent = ""
        botaomao3.addEventListener("click", preeação3)
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
