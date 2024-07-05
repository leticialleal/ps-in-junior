var nota = parseFloat(prompt("Insira a nota:"))

if(nota>=90) {
    console.log("A")
} else if(nota<90 && nota>=80) {
    console.log("B")
} else if(nota<=79 && nota>=70) {
    console.log("C")
} else if(nota<=69 && nota>=60) {
    console.log("D")
} else if(nota<60) {
    console.log("F")
}