const voto = { 
    candidato_x : 889, 
    candidato_y : 847, 
    candidato_z : 515, 
    branco : 0 
};

function eleicao(voto){
    candidato_x = 0
    candidato_y = 0 
    candidato_z = 0
    nulo = 0
    voto = Number(prompt("Digite o número do seu candidato: "))
    if (voto == 889){
        candidato_x = candidato_x + 1
    }else if (voto == 847){
        candidato_y = candidato_y + 1
    }else if (voto == 515){
        candidato_z = candidato_z + 1
    }else if (isNaN(voto) == true) {
        return eleicao()
    }else{
        nulo = nulo + 1
    }
    respo = prompt ("Finalizar votação ? 1 - sim | 2 - não")
    if ( respo == "1"){
        alert("voto computado com sucesso\n")
    } else {
        return eleicao()
    }
    
    let vencedor = "nulo"
    if (candidato_x > candidato_y && candidato_x > candidato_z) {
        vencedor = "candidato_x";
    } else if (candidato_y > candidato_z) {
        vencedor = "candidato_y";
    } else if (candidato_z > 0) {
        vencedor = "candidato_z";
    }
    
    
    
    
    
    alert(`Os votos foram computados e ficou assim: ${candidato_x} votos para candidato x, ${candidato_y} votos para candidato y, ${candidato_z} votos para candidato z, ${nulo} pessoas anularam seu voto. Logo o vencedor é: ${vencedor}`)
}
eleicao()