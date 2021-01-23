const operar = (num1, num2, tipo) => {
    let resultado
    if(tipo == "sum"){
        resultado = num1 + num2
        return resultado
    }
    else if(tipo == "rest"){
        resultado = num1 - num2
        return resultado
    }
    else if(tipo == "div"){
        resultado = num1 / num2
        return resultado
    }
    else if(tipo == "mul"){
        resultado = num1 * num2
        return resultado
    }
}
