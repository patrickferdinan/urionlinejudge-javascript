var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var x1 = parseFloat(p1[0]);var y1 = parseFloat(p1[1]);
var x2 = parseFloat(p2[0]);var y2 = parseFloat(p2[1]);
var Distancia = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
                
console.log(Distancia.toFixed(4));