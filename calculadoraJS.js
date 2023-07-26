function calculadora(n1, n2, op){
    if (op == 1 ){
        return n1 + n2;
    }
    if (op == 2){
        return n1 - n2;
    }
    if (op == 3){
        return n1 * n2;
    }
    if (op == 4){
        return n1 / n2;
    }
}
a = calculadora(2,3,3)
console.log(a)