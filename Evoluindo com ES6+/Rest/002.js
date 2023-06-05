function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor( Math.random() * numeros.length);
    console.log(numeroGerado);
}

sorteador(1,4,5,6,7,2,3,10);