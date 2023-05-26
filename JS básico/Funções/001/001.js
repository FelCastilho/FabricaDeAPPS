function entrar(){
    const area = document.getElementById('area')
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', () =>{
        const nome = prompt('Digite seu nome:')

        if(nome === null || nome === ''){
            alert('O bloco não pode ficar vazio')
        }else{
            area.innerHTML = `Olá, ${nome} `
        }

    //criando um elemento com JS
    let btnExit = document.createElement('button')
    btnExit.innerHTML = 'Sair' 
    area.appendChild(btnExit)

    btnExit.addEventListener('click', () =>{
        alert('Adeus');
        area.innerHTML = 'Você saiu'
    })
})
}

entrar()