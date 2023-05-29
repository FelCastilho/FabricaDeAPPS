const data = new Date();

//Pegando horas
const horas = data.getHours();

//Pegando minutos
const minutos = data.getMinutes();

//Pegando segundos
const segundos = data.getMilliseconds();

//Pegando milisegundos
const milisegundos = data.getMilliseconds();

//Pegando o dia do mes 
const diaDoMes = data.getDate();

//Pegando o mes - Deve-se somar + 1, pois o mes começa em 0 = janeiro
const mes = data.getMonth();

//Pegando o dia da semana
const diaDaSemana = data.getDay();

//Pegando o ano
const ano = data.getFullYear();

let dias = ['Domigo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

console.log(dias[data.getDay()])