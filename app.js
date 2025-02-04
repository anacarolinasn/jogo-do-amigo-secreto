let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (!nome) return alert("Por favor, digite um nome válido.");
    if (listaAmigos.includes(nome)) return alert("Esse nome já foi adicionado.");

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    document.getElementById("listaAmigos").innerHTML = listaAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join("");
}

function sortearAmigo() {
    if (!listaAmigos.length) return alert("Adicione pelo menos um nome antes de sortear.");

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}
