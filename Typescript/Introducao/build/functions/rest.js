"use strict";
/*function totalVendas(venda1: number, venda2: number, venda3: number, venda4:number) : number{
    const total = venda1 + venda2 + venda3 + venda4;

    console.log(total);

    return total;
}

totalVendas(10, 10, 10, 10)*/
function totalVendas(...vendas) {
    const quantidadeDeVendas = vendas.length;
    console.log(`Você tem ${quantidadeDeVendas} vendas hoje!`);
}
totalVendas(10, 20, 33);
