
let arregloB = new Array(5);

function bidimensional_definicion(){
    arregloB = new Array(5);
    for(let i = 0; i < arregloB.length; i++){
        arregloB[i] = new Array(5);
    }
    llenado_arregloB();
}

function llenado_arregloB(){
    for(let i = 0; i < arregloB.length; i++){
        for(let j = 0; j < arregloB[i].length; j++){
            arregloB[i][j] = " ";
        }
    }
//1era line
    arregloB[0][0] = "X";
    arregloB[0][1] = "X";
    arregloB[0][2] = "X";
    arregloB[0][3] = "X";
    arregloB[0][4] = "X";
// 2da línea
    arregloB[1][0] = "X";
 // 3ra línea
    arregloB[2][0] = "X";
    arregloB[2][1] = "X";
    arregloB[2][2] = "X";
    arregloB[2][3] = "X";
// 4ta línea
    arregloB[3][0] = "X";
// 5ta línea
    arregloB[4][0] = "X";
    arregloB[4][1] = "X";
    arregloB[4][2] = "X";
    arregloB[4][3] = "X";
    arregloB[4][4] = "X";

    imprimir_arregloB();
}


function imprimir_arregloB(){
    let cadenaB = "";
    for(let i = 0; i < arregloB.length; i++){
        for(let j = 0; j < arregloB[i].length; j++){
            cadenaB +='<div class="border p-3 m-1 d-inline-block bg-black ">' +arregloB[i][j] + '</div>';

        }
        cadenaB += "<br>";
    } document.getElementById("impB").innerHTML = cadenaB;
}

// 4.sueldo
function calcularSueldo(){
    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let horas = parseFloat(document.getElementById("horas").value);
    let pagoHora = 0;

    if(puesto == "Diseñador"){
        if(nivel == "1"){
            pagoHora = 100;
        }
        else if(nivel == "2"){
            pagoHora = 120;
        }
        else if(nivel == "3"){
            pagoHora = 140;
        }
    }
    else if(puesto == "Programador"){
        if(nivel == "1"){
            pagoHora = 150;
        }
        else if(nivel == "2"){
            pagoHora = 180;
        }
        else if(nivel == "3"){
            pagoHora = 200;
        }
    }
    else if(puesto == "Líder"){
        if(nivel == "1"){
            pagoHora = 200;
        }
        else if(nivel == "2"){
            pagoHora = 230;
        }
        else if(nivel == "3"){
            pagoHora = 250;
        }
    }
    let total = pagoHora * horas;
    document.getElementById("total").value = "$ " + total;
}




// 5-agenda
let agenda = [];

function agregarEvento(){
    let dia =document.getElementById("dia").value;
    let hora =document.getElementById("hora").value;
    let evento = document.getElementById("evento").value;
    let descripcion = document.getElementById("descripcion").value;

    let registro = {
        dia: dia,
        hora: hora,
        evento: evento,
        descripcion: descripcion
    };
    agenda.push(registro);
    imprimirAgenda();
}

function imprimirAgenda(){
    let cadena = '';

    agenda.forEach(function(registro){

        cadena += '<tr>' +
        '<td>' + registro.dia + '</td>' +
        '<td>' + registro.hora + '</td>' +
        '<td>' + registro.evento + '</td>' +
        '<td>' + registro.descripcion + '</td>' +
        '</tr>';
    });
    document.getElementById("impAgenda").innerHTML = cadena;
}