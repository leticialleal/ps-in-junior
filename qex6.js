let Objeto = {
    receitas: [100,200,400],
    despesas: [50,50]
}

function calcularSaldo() {
    var receitas = 0
    var despesas = 0
    for(var receita of Objeto.receitas) {
        receitas += receita
    }
    for(var despesa of Objeto.despesas) {
        despesas += despesa
    }
    var saldo = receitas - despesas
    if(saldo>0) {
        alert("Saldo positivo = "+saldo)
    }
    else if(saldo<0){
        alert("Saldo negativo = "+saldo)
    } else {
        alert("Saldo = "+saldo)
    }
}

calcularSaldo()

