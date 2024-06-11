var parte1;
var parte2;
var sinal; //flag para saber se está digitando a 1ª ou a 2ª parte;
var operação; //flag pra saber qual é a operação;

function apertouBotao(numero) {

    if (sinal == 1) {
        
        document.getElementById("visor").value = document.getElementById("visor").value + numero;
        parte2 = document.getElementById("visor").value; 
        parte2 = parseFloat(parte2);

    } else {

        if (document.getElementById("visor").value.length == 1) {
            document.getElementById("visor").value = (document.getElementById("visor").value.replace(0, "")) + numero;
            parte1 = document.getElementById("visor").value; 
            parte1 = parseFloat(parte1);
        } else {
            document.getElementById("visor").value = document.getElementById("visor").value + numero;
            parte1 = document.getElementById("visor").value; 
            parte1 = parseFloat(parte1);
        }    

    }   

}

function apertouBotaoOperacional(botao) {

    sinal = 1;

    if (botao == "*") {
        operação = "*";
    } else if (botao == "/") {
        operação = "/";
    } else if (botao == "-") {
        operação = "-";
    } else if (botao == "+") {
        operação = "+";
    }
    
    document.getElementById("visor").value = "";

}

function calcular() {

    console.log("parte1 = " + parte1);
    console.log("parte2 = " + parte2);

    if (operação == "*") {
        document.getElementById("visor").value = parte1 * parte2;
    } else if (operação == "/") {
        document.getElementById("visor").value = parte1 / parte2;
    } else if (operação == "-") {
        document.getElementById("visor").value = parte1 - parte2;
    } else if (operação == "+") {
        document.getElementById("visor").value = parte1 + parte2;
    }

    parte1 = parseFloat(document.getElementById("visor").value);
    sinal = 0;

}

function limpar() {
    document.getElementById("visor").value = "0";
    parte1 = 0;
    parte2 = 0;
    sinal = 0;
}




