// Versión 2.0

var confirmadorSuma = document.getElementById('buttonSuma')
confirmadorSuma.addEventListener("click", () => {
    let num1Suma = parseInt(document.getElementById('suma1').value);
    let num2Suma = parseInt(document.getElementById('suma2').value);
    document.getElementById('resSum').innerHTML = num1Suma + num2Suma
})
var confirmadorSuma = document.getElementById('buttonRest')
confirmadorSuma.addEventListener("click", () => {
    let num1Rest = parseInt(document.getElementById('resta1').value);
    let num2Rest = parseInt(document.getElementById('resta2').value);
    document.getElementById('resRes').innerHTML = num1Rest - num2Rest
})

var confirmadorSuma = document.getElementById('buttonDiv')
confirmadorSuma.addEventListener("click", () => {
    let num1Div = parseInt(document.getElementById('div1').value);
    let num2Div = parseInt(document.getElementById('div2').value);
    document.getElementById('resDiv').innerHTML = num1Div / num2Div
})

var confirmadorSuma = document.getElementById('buttonMult')
confirmadorSuma.addEventListener("click", () => {
    let num1Mult= parseInt(document.getElementById('mult1').value);
    let num2Mult = parseInt(document.getElementById('mult2').value);
    document.getElementById('resMul').innerHTML = num1Mult * num2Mult
})
