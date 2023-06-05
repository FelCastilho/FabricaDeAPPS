//FILTER: VAI FILTRAR UM ITEM DENTRO DE UM ARRAY

let palavras = ['Felipe', 'Miguel', 'Goku', 'Vegeta', 'Gohan'];


let filtro = palavras.filter((item)=>{
    //retornando paralvras com menos de 5 letras
    return item.length <= 4;
})

console.log(filtro);