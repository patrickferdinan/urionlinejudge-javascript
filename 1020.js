var idade = parseInt(lines.shift());
var ano = idade / 365;
var mes = (idade%365)/30;
var dia = ((idade%365)%30);
console.log(parseInt(ano) + ' ano(s)');
console.log(parseInt(mes) + ' mes(es)');
console.log(parseInt(dia) + ' dia(s)');