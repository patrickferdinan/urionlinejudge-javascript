var nome = lines.shift();
var fixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var total = (((vendas/100)*15) + fixo);

console.log('TOTAL = R$ ' + total.toFixed(2));