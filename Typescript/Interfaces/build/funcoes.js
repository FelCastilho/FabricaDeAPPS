"use strict";
/*
interface CursoProps{
    id: string,
    nome: string,
    preco: number,

    promocao: (preco: number) => void;
}

function mostraPromocao(preco: number) : void{
    console.log(`Promoção no curso: R$ ${preco}`)
}

const novoCurso: CursoProps = {
    id: '1',
    nome: 'Curso de typescript',
    preco: 750,
    //promocao: mostraPromocao,
    promocao: (preco: number) : void => {
        console.log('Preco total: ', preco)
    }
}

console.log(novoCurso);

console.log(novoCurso.promocao(350));
*/
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado: ', valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(1, 2);
console.log('Resultado da variavel: ', resultado);
