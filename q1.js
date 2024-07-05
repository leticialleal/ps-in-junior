// var matriz1 = [[2,-1],[2,0]]
// var matriz2 = [[2,3],[-2,1]]

var matriz1 = [[4,0],[-1,-1]] 
var matriz2 = [[-1,3],[2,7]]

var matriz = []

if(matriz1[0].length == matriz2.length) {
    for(var linha = 0; linha<matriz1.length; linha++) {
        matriz.push([])
        for(var coluna = 0; coluna<matriz2[0].length; coluna++) {
            matriz[linha].push(0)
            for(var contador = 0; contador<matriz2.length; contador++) {
                matriz[linha][coluna] += matriz1[linha][contador] * matriz2[contador][coluna]
            } 
        }  
    }
    console.log(matriz)
}