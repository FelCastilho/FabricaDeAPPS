function calcularIMC(event){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let res = document.getElementById('resultado')
    
    //Parando o envio do formulário:
    event.preventDefault();

    let imc = peso / (altura * altura)

    if(imc < 17){
       res.innerHTML = `Seu resultado foi de ${imc}, cuidado você está muito abaixo do peso`
    }else if(imc > 17 && imc <= 18.49){
        res.innerHTML = `Seu resultado foi de ${imc}, cuidado você está abaixo do peso`
    }else if(imc >= 18.5 && imc < 24.99){
        res.innerHTML = `Seu resultado foi de ${imc}, cuidado você está no peso ideal`
    }else if(imc >= 25 && imc <= 29.99){
        res.innerHTML = `Seu resultado foi de ${imc}, cuidado você está acima do peso`
    }


    //Zerando o bloco de input
    document.getElementById('peso').value = ' ';    
    document.getElementById('altura').value = ' ';    
}