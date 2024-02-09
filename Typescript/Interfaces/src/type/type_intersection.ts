type Info = {
    id: number;
    name: string;
    descricao?: string
}

const ProdutoInfo: Info = {
    id: 123,
    name: 'Placa de vídeo',
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: 'Hardware',
    quantidadeProduto: 2
}

//Passando as duas propriedades
type ProdutoInfo = Info & Categoria;

const novoProduto: ProdutoInfo = {
    id: 1234,
    name: 'Teclado',
    slug: 'Teclado mecânico',
    quantidadeProduto: 10
}