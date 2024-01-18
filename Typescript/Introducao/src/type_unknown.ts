//Tipo desconhecido = Quando não se sabe o tipo que vamos receber (API, etc);

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

let totalEntrega: any = totalPedido;

console.log(totalEntrega);


//Valores do tipo unknown só podem set atribuidos ao mesmo tipo ou ao tipo any