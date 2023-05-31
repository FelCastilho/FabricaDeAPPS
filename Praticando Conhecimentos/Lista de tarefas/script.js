//Pegando o id da ul
let listElement = document.querySelector('#app ul');
//Pegando o id do input
let inputElement = document.querySelector('#app input');
//Pegando o id do botão
let buttonElement = document.querySelector('#app button');

//Convertendo o item de volta em array
let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || [];

function renderTarefas(){
    listElement.innerHTML = '';

    //Percorrendo a lista com MAP para poder apresentar na tela
    tarefas.map((toDo)=>{
        //Criando o elemento
        let liElement = document.createElement('li');
        //Criando o texto da tarefa que ele percorre no MAP
        let tarefaText = document.createTextNode(toDo);

        //Criando uma ancora para remover o elemento
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //Colocando o texto dentro do link
        let linkText = document.createTextNode(' Excluir')
        //Colocando o texto criado dentro do link
        linkElement.appendChild(linkText);

        //Pegando 
        let posicao = tarefas.indexOf(toDo)
        //Chamando a função de deletar
        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`)

        //Colocando o texto criado em Js dentro da Lista criada em JS
        liElement.appendChild(tarefaText);

        //Colocando a ancora dentro da lista criada com JS
        liElement.appendChild(linkElement);

        //Adicionando a lista criada aqui em cima dentro do UL
        listElement.appendChild(liElement);
    })
}

renderTarefas()

function adicionarTarefa(){
    if(inputElement.value === ''){
        alert('Digite alguma tarefa');

        //Impedindo o programa de prosseguir caso a condição seja atendida
        return false;
    }else{
        //Pegando o que for digitado dentro do input
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);

        inputElement.value = '';

        //Chamando a função que vai renderizar a lista
        renderTarefas();
        salvarDados()
    }
}

//Pegando o que foi digitado e mostrando na tela
buttonElement.onclick = adicionarTarefa;

//Função para deletar tarefas

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados()
}

//Salvando no localStorage

function salvarDados(){

    //JSON transforma o array em string
    localStorage.setItem('@listaTarefas', JSON.stringify(tarefas));

}