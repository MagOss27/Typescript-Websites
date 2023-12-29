// Definição do tipo Pessoa
type Pessoa = {
    nome: string;
    idade: number;
  };
  
  // Função para exibir o nome e a idade
  function nameNumber() {
    let nomeInput = document.getElementById('name') as HTMLInputElement;
    let idadeInput = document.getElementById('number') as HTMLInputElement;
    let resultado = document.getElementById('resultado');
  
    if (nomeInput && idadeInput && resultado) {
      let nome = nomeInput.value;
      let idade = Number(idadeInput.value); // Certifique-se de converter para número
      
      let pessoa: Pessoa = {
        nome,
        idade
      };
      
      resultado.innerHTML = `Nome: ${pessoa.nome}<br>Idade: ${pessoa.idade}`;
    }
  }
  