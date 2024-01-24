let numeroSecreto;
let tentativas = 1;
let chute;

function iniciarJogo() {
    document.getElementById("mensagens").innerHTML = "";
    numeroSecreto = parseInt(Math.random() * 21);
    exibirMensagem("Digite um número de 1 á 20!");
    document.getElementById("btnIniciarJogo").style.display = "none";
    document.getElementById("divChute").style.display = "block";
    document.getElementById("btnVerificarChute").onclick = verificarChute;

    document.querySelector(".container").style.backgroundImage = "url('./numero-secreto-js/img/code.png')";

    document.getElementById("imgTrofeu").style.display = "none";
}

function verificarChute() {
    chute = parseInt(document.getElementById("inputChute").value);
    document.getElementById("mensagens").innerHTML = "";

    if (chute == numeroSecreto) {
        exibirMensagem(`Maravilha! Você acertou com apenas ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}`);
        atualizarTextoBotao("Reiniciar Jogo");
        document.getElementById("btnVerificarChute").onclick = reiniciarJogo;
    
        document.querySelector(".container").style.backgroundImage = "url('./numero-secreto-js/img/Ruido.png')";
    
        document.getElementById("imgTrofeu").style.display = "inline-block";
        document.querySelector(".container__texto h1").style.display = "none";
    
        let audioAhMizeravi = new Audio("/numero-secreto-js/audio/ah-mizeravi.wav");
        audioAhMizeravi.play();
        audioAhMizeravi.onended = function () {
    
        };
    } else {
        if (tentativas >= 5) {
            exibirMensagem('Você excedeu o número máximo de tentativas. O jogo acabou!');
            atualizarTextoBotao("Reiniciar Jogo");
            document.getElementById("btnVerificarChute").onclick = reiniciarJogo;

            document.getElementById("audioGameOver").play();
        } else {
            if (chute > numeroSecreto) {
                exibirMensagem('O número secreto é menor');
            } else {
                exibirMensagem('O número secreto é maior');
            }
            
            document.getElementById("audioErrou").play();

            tentativas++;
            pedirChute();
        }
    }
}

function reiniciarJogo() {
    tentativas = 1;
    document.getElementById("inputChute").value = "";
    atualizarTextoBotao("Digite seu chute");
    document.getElementById("btnVerificarChute").onclick = verificarChute;
    iniciarJogo();

    document.querySelector(".container").style.backgroundImage = "url('./numero-secreto-js/img/code.png')";

    document.getElementById("imgTrofeu").style.display = "none";
}

function exibirMensagem(mensagem) {
    const mensagens = document.getElementById("mensagens");
    mensagens.innerHTML = `<p>${mensagem}</p>`;
}

function atualizarTextoBotao(texto) {
    document.getElementById("btnVerificarChute").innerText = texto;
}
