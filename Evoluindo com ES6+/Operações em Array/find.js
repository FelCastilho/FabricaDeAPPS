//FIND : VAI PROCURAR UM DETERMINADO ITEM NO ARRAY. (ELE SEMPRE VAI RETORNAR O PRIMEIRO ITEM QUE ELE ENCONTRAR)

let listagem = ['Felipe', 1, 2 , 'Goku'];

let busca = listagem.find((item)=>{
    return item === 'Goku'; //Caso o item não seja encontrado, ele irá retornar undefined
})

console.log(busca)