"use strict";
// Função para exibir o nome e a idade
function nameNumber() {
    let nomeInput = document.getElementById('name');
    let idadeInput = document.getElementById('number');
    let resultado = document.getElementById('resultado');
    if (nomeInput && idadeInput && resultado) {
        let nome = nomeInput.value;
        let idade = Number(idadeInput.value); // Certifique-se de converter para número
        let pessoa = {
            nome,
            idade
        };
        resultado.innerHTML = `Nome: ${pessoa.nome}<br>Idade: ${pessoa.idade}`;
    }
}
