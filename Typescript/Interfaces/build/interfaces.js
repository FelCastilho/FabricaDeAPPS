"use strict";
/*
let loja: object;

loja = {
    nome: 'BK',
    endereco: 'Rua X',
    status: true,
}
*/
const BurguerK = {
    nome: 'Burguer K',
    endereco: 'Rua X',
    status: true,
    //produtoPromocao: 'Burguer Duplo'
};
//console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja: ${endereco} `);
    console.log(`Status da loja:  ${status}`);
}
novaLoja({ nome: 'HeadBurguer', endereco: 'Rua X', status: true });
