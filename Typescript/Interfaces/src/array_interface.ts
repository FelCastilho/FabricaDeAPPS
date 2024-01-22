/*
interface TecnologiaProps{
    id: string;
    nome:string;
    slug?:string[]; // (string | number)[]
}

let tecnologia1: TecnologiaProps = {
    id: '1',
    nome: 'PHP',
    slug: ['php', 'php-do-zero']
}
*/

interface TecnologiaProps{
    id: string;
    nome:string;
    descricao?:string;
}

interface NomeProps{
    tecnologia: TecnologiaProps[]
}

let frontend: NomeProps = {
    tecnologia : [
        { id: '12', nome: 'ReactJS', descricao: 'Biblioteca para criar interfaces'},
        {id: '43', nome: 'VueJS'}
    ]
}