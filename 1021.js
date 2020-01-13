var x = parseFloat(lines.shift()).toFixed(2);

var cem = x/100;
var cinq = (x%100)/50;
var vin = ((x%100)%50)/20;
var dez = (((x%100)%50)%20)/10;
var cinc = ((((x%100)%50)%20)%10)/5;
var dois = (((((x%100)%50)%20)%10)%5)/2;

var um = ((((((x%100)%50)%20)%10)%5)%2)/1;
var ccinq = (((((((x%100)%50)%20)%10)%5)%2)%1)/0.50;
var cvin = ((((((((x%100)%50)%20)%10)%5)%2)%1)%0.50)/0.25;
var cdez = (((((((((x%100)%50)%20)%10)%5)%2)%1)%0.50)%0.25)/0.10;
var ccin = ((((((((((x%100)%50)%20)%10)%5)%2)%1)%0.50)%0.25)%0.10)/0.05;
var cum = (((((((((((x%100)%50)%20)%10)%5)%2)%1)%0.50)%0.25)%0.10)%0.05)/0.01;


console.log('NOTAS:');

console.log(parseInt(cem) + ' nota(s) de R$ 100.00');
console.log(parseInt(cinq) + ' nota(s) de R$ 50.00');
console.log(parseInt(vin) + ' nota(s) de R$ 20.00');
console.log(parseInt(dez) + ' nota(s) de R$ 10.00');
console.log(parseInt(cinc) + ' nota(s) de R$ 5.00');
console.log(parseInt(dois) + ' nota(s) de R$ 2.00');
console.log('MOEDAS:');

console.log(parseInt(um) + ' moeda(s) de R$ 1.00');
console.log(parseInt(ccinq) + ' moeda(s) de R$ 0.50');
console.log(parseInt(cvin) + ' moeda(s) de R$ 0.25');
console.log(parseInt(cdez) + ' moeda(s) de R$ 0.10');
console.log(parseInt(ccin) + ' moeda(s) de R$ 0.05');
console.log(parseInt(cum) + ' moeda(s) de R$ 0.01');
