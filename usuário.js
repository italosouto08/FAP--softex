function aniversario(){
    nome = prompt("Digite o seu nome completo: ")
    while (true)
        try {
            anoNasc = Number(prompt("Digite o ano do seu nascimento: "))
            if(isNaN (anoNasc) == false){
                if(1922 <= anoNasc && anoNasc <= 2022){
                    
                    break;
                }else {
                    throw new error("O valor digitado não é válido")
                
                }
            }else {
                throw new error("O valor digitado não é válido")
            }
        } catch (error) {
            console.log(error)
            console.log("Digite novamente: ")
          
    } console.log(`Seu nome é ${nome} e você tem/vai fazer ${2022 - anoNasc} anos em 2022`)
}
aniversario()