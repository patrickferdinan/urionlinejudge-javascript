var x = lines.shift().split(' ');
var a = x[0];var b = x[1];var c = x[2];
var delta = (b * b) - (4 * a * c);
var r1 = ((-b + Math.sqrt(delta))/(2*a));
var r2 = ((-b - Math.sqrt(b*b-4*a*c))/(2*a));

if((a == 0)||(delta < 0)){
    console.log('Impossivel calcular');
}else{
    console.log('R1 = ' + r1.toFixed(5));
    console.log('R2 = ' + r2.toFixed(5));
}

