/*
interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataform: string[];
}

const left4Dead: JogoProps = {
    id: '123',
    nome: 'Left 4 Dead',
    descricao: 'Jogo de ação e tiro',
    plataform: ['PS5', 'PC'],
}

console.log(left4Dead);

interface DLC extends JogoProps {
    novoConteudo: string[];
}

const left4DeadDLC: DLC = {
    id: '90',
    nome: 'Left 4 Dead - Novos Mapas',
    descricao: '4 novos mapas para online',
    plataform: ['PS5', 'PC'],
    novoConteudo: ['Modo coop', '5 horas de gameplay', 'Medalhas']
}
*/

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataform: string[];
}

const left4Dead: JogoProps = {
    id: '123',
    nome: 'Left 4 Dead',
    descricao: 'Jogo de ação e tiro',
    plataform: ['PS5', 'PC'],
}

console.log(left4Dead);

interface DLC extends JogoProps {
    jogoOriginal: JogoProps,
    novoConteudo: string[];
}

const left4DeadDLC: DLC = {
    id: '90',
    nome: 'Left 4 Dead - Novos Mapas',
    descricao: '4 novos mapas para online',
    plataform: ['PS5', 'PC'],
    novoConteudo: ['Modo coop', '5 horas de gameplay', 'Medalhas'],
    jogoOriginal: left4Dead,
}