"use strict"

//Variáveis
var hora = 1;
var minuto = 1;
var segundo = 1;

let h;
let m;
let s;

var tempo = 1000; //Quantos milésimos vale um segundo.
var cronometro;//Seleciona o intervalo.




//Inicia a contagem.
function iniciar() {
    var a;
    cronometro = setInterval(contar, tempo);
    a = document.getElementById("pausa").innerHTML = '<button onclick="pausar()">Pausar</button>';
};


//Paro a contagem.
function pausar() {
    clearInterval(cronometro);
    var a;
    a = document.getElementById("pausa").innerHTML = '<button onclick="iniciar()">Continuar</button>';
};


//Reinicia a contagem.
function reiniciar() {
    //Retorno os valores todos aos iniciais e pauso a contagem.
    pausar();
    hora = "0" + 1;
    minuto = "0" + 0;
    segundo = "0" + 0;

    s = document.getElementById("segundos").innerHTML = segundo;
    m = document.getElementById("minutos").innerHTML = minuto;
    h = document.getElementById("horas").innerHTML = hora

    var a;
    a = document.getElementById("pausa").innerHTML = '<button onclick="iniciar()">Iniciar</button>';
};


//Contador.
function contar() {

    //Pego cada elemento e a cada "tempo" adiciono um, faço as verificações até dez e até 60.

    s = document.getElementById("segundos").innerHTML = segundo < 10 ? "0" + segundo++ : segundo++;

    if (segundo == 60) {
        segundo = 0;
        m = document.getElementById("minutos").innerHTML = minuto < 10 ? "0" + minuto++ : minuto++;

    };

    if (minuto == 60) {
        minuto = 0;
        h = document.getElementById("horas").innerHTML = hora < 10 ? "0" + hora++ : hora++;

    };
    //Verificação até 10: concateno um 0 em números com apenas uma casa.
    //Verificação até 60: a cada 60 segundos 1 minuto e assim com minutos também.
};