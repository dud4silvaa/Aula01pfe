function encontrarMaior() {

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
    let num4 = Number(document.getElementById('num4').value);
    let num5 = Number(document.getElementById('num5').value);
    let num6 = Number(document.getElementById('num6').value);

  
    if (
        document.getElementById('num1').value.trim() === "" ||
        document.getElementById('num2').value.trim() === "" ||
        document.getElementById('num3').value.trim() === "" ||
        document.getElementById('num4').value.trim() === "" ||
        document.getElementById('num5').value.trim() === "" ||
        document.getElementById('num6').value.trim() === ""
    ) {
        document.getElementById('resultado').innerHTML = "Por favor, preencha todos os campos com números válidos.";
        return;
    }


    let maior = Math.max(num1, num2, num3, num4, num5, num6);


    document.getElementById('resultado').innerHTML = `O maior número digitado foi: ${maior}`;
}
