var valores = []
var crescente = []

for(var contador=0;contador<5;contador++) {
    var n = parseInt(prompt("Digite um número:"))
    valores.push(n)
    crescente.push(n)
}

console.log(crescente.sort()+"\n\n"+valores)
