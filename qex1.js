var positivos = 0

for(var contador=0;contador<6;contador++) {
    var n = parseFloat(prompt("Digite um valor não nulo:"))
    if(n>0) {
        positivos++
    }
}

console.log(positivos)
