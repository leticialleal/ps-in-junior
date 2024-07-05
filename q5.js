for(var contador = 0;contador<5;contador++) {
    //var n = parseInt(Math.random()*100)
    var n = parseFloat(prompt("Digite um número:"))
    if((n%3==0) && (n%5==0)) {
        console.log("fizzbuzz")
    }
    else if(n%3==0) {
        console.log("fizz")
    }
    else if(n%5==0) {
        console.log("buzz")
    }
}