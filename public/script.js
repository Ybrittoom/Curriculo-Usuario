const btn = document.getElementById("botao");

function apertarBotao() {
    const nome = prompt("Qual o seu nome?");
    if (nome) {
        document.getElementById("nome").textContent = nome;
    } else {
        document.getElementById("nome").textContent = "Por favor responda";
    }

    const txtLocalizacao = document.getElementById("localizacao");
    const localizacao = prompt("Qual a sua localização?");
    if (localizacao) {
        txtLocalizacao.textContent = localizacao;
    } else {
        txtLocalizacao.textContent = "Por favor responda";
    }

    const txttelefone = document.getElementById("telefone");
    const telefone = prompt("Qual o seu telefone?");
    if (telefone) {
        txttelefone.textContent = telefone;
    } else {
        txttelefone.textContent = "Por favor responda";
    }

    const txtemail = document.getElementById("email");
    const email = prompt("Qual o seu Email?");
    if (email) {
        txtemail.textContent = email;
    } else {
        txtemail.textContent = "Por favor responda";
    }

    const txtobjetivo = document.getElementById("objetivo");
    const objetivo = prompt("Qual o seu objetivo?");
    if (objetivo) {
        txtobjetivo.textContent = objetivo;
    } else {
        txtobjetivo.textContent = "Por favor responda";
    }

    const txtQualificacao = document.getElementById("qualificacao");
    const qualificacao = prompt("Quais as suas qualificações profissionais?");
    if (qualificacao) {
        txtQualificacao.textContent = qualificacao;
    } else {
        txtQualificacao.textContent = "Por favor responda";
    }

    const txtExperiencia = document.getElementById("experiencia");
    const experiencia = prompt("Qual a sua experiência?");
    if (experiencia) {
        txtExperiencia.textContent = experiencia;
    } else {
        txtExperiencia.textContent = "Por favor responda";
    }

    const txtformacao = document.getElementById("formacao");
    const formacao = prompt("Qual a sua formação?");
    if (formacao) {
        txtformacao.textContent = formacao;
    } else {
        txtformacao.textContent = "Por favor responda";
    }

    // Verificar se todas as perguntas foram respondidas
    const todasRespondidas = nome && localizacao && telefone && email && objetivo && qualificacao && experiencia && formacao;
    
    // Mostrar ou ocultar o botão "Finalizar" com base nas respostas
    if (todasRespondidas) {
        document.getElementById('finalizar').style.display = "block";
        document.getElementById('botao').style.display = "none"; // Oculta o botão "Aperte Aqui para responder"
    } else {
        // Caso alguma resposta esteja faltando, não ocultar o botão "Aperte Aqui para responder"
        document.getElementById('finalizar').style.display = "none";
    }
}

document.getElementById('fecharModal').onclick = function () {
    document.getElementById('Modal').style.display = "none";
}

document.getElementById('simBtn').onclick = function () {
    // Redirecionar para outra página
    window.location.href = "seg.html";
}

document.getElementById('finalizar').onclick = function () {
    document.getElementById('Modal').style.display = "block";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('Modal')) {
        document.getElementById('Modal').style.display = "none";
    }
}

btn.addEventListener("click", apertarBotao);
