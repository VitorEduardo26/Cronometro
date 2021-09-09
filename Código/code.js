"use strict"

//Variáveis
var hora = 0;
var minuto = 0;
var segundo = 0;

let h;
let m;
let s;

var tempo = 1000; //Quantos milésimos vale um segundo.
var cronometro;//Seleciona o intervalo.




//Inicia a contagem.
function iniciar() {
    var a;
    cronometro = setInterval(contar, tempo);
    a = document.getElementById("pausa").innerHTML = '<button class="btn" onclick="pausar()">Pausar</button>' + '<button class="btn" onclick="reiniciar()">Reiniciar</button>';
};


//Paro a contagem.
function pausar() {
    clearInterval(cronometro);
    var a;
    a = document.getElementById("pausa").innerHTML = '<button id="continuar" class="btn" onclick="iniciar()">Continuar</button>' + '<button class="btn" onclick="reiniciar()">Reiniciar</button>';
};


//Reinicia a contagem.
function reiniciar() {
    //Retorno os valores todos aos iniciais e pauso a contagem.
    pausar();

    s = document.getElementById("segundos").innerHTML = '<h1>00</h1><br><h2 class="nome">SEGUNDO</h2>';
    m = document.getElementById("minutos").innerHTML = '<h1>00</h1><br><h2 class="nome">MINUTO</h2>';
    h = document.getElementById("horas").innerHTML = '<h1>00</h1><br><h2 class="nome" id="nome1">HORA</h2>';

    var a;
    a = document.getElementById("pausa").innerHTML = '<button class="btn" onclick="iniciar()">Iniciar</button>' + '<button class="btn" onclick="reiniciar()">Reiniciar</button>';
};


//Contador.
function contar() {


    //Pego cada elemento e a cada "tempo" adiciono um, faço as verificações até dez e até 60.
    if (segundo == 0) {

        segundo = 1;

    }else{

        s = document.getElementById("segundos").innerHTML = parseInt(segundo) < 10 ? "<h1>" +"0" + segundo++ + "</h1>" + '<h2 class="nome">SEGUNDO</h2>' : "<h1>" + segundo++ + "</h1>" + '<h2 class="nome">SEGUNDO</h2>';

        if (segundo == 60) {
            segundo = 0;
            m = document.getElementById("minutos").innerHTML = minuto < 10 ? "<h1>" + "0" + minuto++ + "</h1>" + '<br><h2 class="nome">MINUTO</h2>': "<h1>" + minuto++ + "</h1>" + '<br><h2 class="nome">MINUTO</h2>';

        };

        if (minuto == 60) {
            minuto = 0;
            h = document.getElementById("horas").innerHTML = hora < 10 ? "<h1>" + "0" + hora++ + "</h1>" + '<br><h2 class="nome" id="nome1">HORA</h2>': "<h1>" + hora++ + "</h1>" + '<br><h2 class="nome" id="nome1">HORA</h2>';

        };
        //Verificação até 10: concateno um 0 em números com apenas uma casa.
        //Verificação até 60: a cada 60 segundos 1 minuto e assim com minutos também.
    };
}