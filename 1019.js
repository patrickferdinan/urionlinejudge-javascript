/*var valor = 1;
var minutos = (valor%3600)/60;
var segundos = ((valor % 60));
var horas = valor/3600;

console.log(parseInt(horas) + ':' + parseInt(minutos) + ':' + parseInt(segundos));  */

var valor = parseInt(lines.shift());
var horas = 0;
var minutos = 0;
var segundos = 0;
if( valor <= 3600){
    minutos = valor/60;
    segundos = valor% 60;
    horas = minutos/60;
    console.log(parseInt(horas) + ':' + parseInt(minutos) + ':' + parseInt(segundos));  
}else{
    var minutos = (valor%3600)/60;
    var segundos = ((valor % 60));
    var horas = valor/3600;
    console.log(parseInt(horas) + ':' + parseInt(minutos) + ':' + parseInt(segundos));
}

