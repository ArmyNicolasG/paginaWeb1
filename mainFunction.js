var confirmadorSuma = document.getElementById('buttonSuma')
confirmadorSuma.addEventListener("click", () => {
    let num1Suma = parseInt(document.getElementById('suma1').value);
    let num2Suma = parseInt(document.getElementById('suma2').value);
    console.log(num1Suma + num2Suma)
})
