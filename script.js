function calcularValor(event) {


    event.preventDefault();
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    

    if (numero1 !== "" && numero2 !== ""){

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        document.getElementById("resposta").innerHTML = `Os valores adicionados foram: ${numero1} e ${numero2}`

        } else {
        alert("Preencha todos os campos indicados!");
    }
}