let statusAtual: unknown = 1;

let mudaStatus: number = 0;

//Afirmando que o statusAtual é realmente um numero;
mudaStatus = statusAtual as number;

//Outra maneira de afirmar;
mudaStatus = <number>statusAtual;

let query: unknown = 'pizza';

let searchTerm: string = query as string;