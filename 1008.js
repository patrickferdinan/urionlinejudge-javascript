var num = parseInt(lines.shift());
var hora = parseInt(lines.shift());
var sal = parseFloat(lines.shift());
var salario = parseFloat(lines.shift());
salario = sal * hora;
console.log('NUMBER = ' + num);
console.log('SALARY = U$ ' + salario.toFixed(2));
