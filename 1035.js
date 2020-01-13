var x = lines.shift().split(' ');
var A = x[0];var B = x[1];var C = x[2];var D = x[3];
if((B > C) && (D > A) && ((C+D) > (A+B)) && ((A+B) > 0) && ((C+D) > 0) && (A%2===0)){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}