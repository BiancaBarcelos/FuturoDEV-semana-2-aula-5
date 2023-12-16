function coletaDados() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operadoresMatematicos = document.getElementById("operadoresMatematicos").value;

    const dadosColetados = {
        num1: numero1,
        num2: numero2,
        operador: operadoresMatematicos
    }
    return dadosColetados;
}

function validaValor(event) {

    event.preventDefault();
    let retornaDados = coletaDados();
    console.log(retornaDados);

    if (retornaDados.num1 !== "" && retornaDados.num2 !== ""){

        document.getElementById("resposta").innerHTML = `A operação selecionada foi ${retornaDados.operador} e os valores adicionados foram ${retornaDados.num1} e ${retornaDados.num2}`;

        } else {
            document.getElementById("resposta").innerHTML = "Os campos obrigatórios não foram preenchidos!";
        }
}

function calcularConta(event) {

    event.preventDefault();
    let retornaDados = coletaDados();
    let numero1 = retornaDados.num1;
    let numero2 = retornaDados.num2;
    let operadoresMatematicos = retornaDados.operador;

    if (numero1 !== "" && numero2 !== ""){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        
        if (operadoresMatematicos === "adição") {
            valor = numero1 + numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} + ${numero2} = ${valor}`
        }else if (operadoresMatematicos === "subtração") {
            valor = numero1 - numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} - ${numero2} = ${valor}`
        }else if (operadoresMatematicos === "divisão") {
            valor = numero1 / numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} / ${numero2} = ${valor}`

        }else if (operadoresMatematicos === "multiplicação") {
            valor = numero1 * numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} * ${numero2} = ${valor}`
        }
    }else {
        alert("Preencha todos os campos indicados!");
    }
}