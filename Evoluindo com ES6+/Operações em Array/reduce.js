//REDUCE: BUSCA REDUZIR UM ARRAY

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, array)=>{
    console.log(`Total até o momento: ${acumulador}`);
    console.log(`Valor atual: ${numero}`);
    console.log(`Indice atual: ${indice}`)
    console.log(`Array original: ${array}`)

    return acumulador += numero;
})

//console.log(total);