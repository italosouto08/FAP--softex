function criarMatrizAnimal (){
    let numAnimais = parseInt(prompt("Digite a quantidade de animais que quer colocar: "))
    let animais = []

    for (let i = 0; i < numAnimais; i++){
        let nome = prompt("Digite o nome do animal: ")
        let especie = prompt("Digite o nome da espécie do animal: ")
        let idade = parseInt(prompt("Digite a idade do animal"))

        animais.push([nome, especie, idade])
    }
    return animais
}

function exibirAnimais(animais) {
    console.log("Todos os animais: ")
    
    for(let i = 0; i < animais.length; i++){
        console.log("Nome: " + animais[i][0] + ", Espécie: " + animais[i][1] + ", Idade: " + animais[i][2])
    }
}

let matrizDeAnimais = criarMatrizAnimal()
exibirAnimais(matrizDeAnimais)