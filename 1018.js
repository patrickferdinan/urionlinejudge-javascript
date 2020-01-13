var x = parseInt(lines.shift());
var cem = x/100;
var cinq = (x%100)/50;
var vin = ((x%100)%50)/20;
var dez = (((x%100)%50)%20)/10;
var cinc = ((((x%100)%50)%20)%10)/5;
var dois = (((((x%100)%50)%20)%10)%5)/2;
var um = ((((((x%100)%50)%20)%10)%5)%2)/1;

console.log(x);
console.log(parseInt(cem) + ' nota(s) de R$ 100,00');
console.log(parseInt(cinq) + ' nota(s) de R$ 50,00');
console.log(parseInt(vin) + ' nota(s) de R$ 20,00');
console.log(parseInt(dez) + ' nota(s) de R$ 10,00');
console.log(parseInt(cinc) + ' nota(s) de R$ 5,00');
console.log(parseInt(dois) + ' nota(s) de R$ 2,00');
console.log(parseInt(um) + ' nota(s) de R$ 1,00');