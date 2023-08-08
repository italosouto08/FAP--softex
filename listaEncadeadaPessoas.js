class Pessoa {
    constructor(nome, idade, qtdFilho) {
      this.nome = nome;
      this.idade = idade;
      this.qtdFilho = qtdFilho;
    }
  }
  
  const pessoas = [
    new Pessoa("italo", 23, 0),
    new Pessoa("laura", 22, 0),
    new Pessoa("cleber", 23, 2),
  ];
  
  for (const Pessoa of pessoas) {
    console.log(`Nome: ${Pessoa.nome}, Idade: ${Pessoa.idade}, Filhos: ${Pessoa.qtdFilho}`);
  }