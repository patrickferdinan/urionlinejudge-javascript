var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var MAIORAB = (A + B + Math.abs(A - B))/2;
var MAIORABC = (MAIORAB + C + Math.abs(MAIORAB - C))/2;
console.log(MAIORABC + ' eh o maior')