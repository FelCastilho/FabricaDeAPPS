function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) / 2;
    
    if(media >= 6){
        console.log(`Aluno aprovado com média ${media}`)
    }else if(media < 6){
        console.log(`Aluno reprovado com média ${media}`)
    }
}

function aluno(nome, curso){
    let mensagem = `Seja bem vindo ${nome}, ao curso ${curso}`
    console.log(mensagem)
}