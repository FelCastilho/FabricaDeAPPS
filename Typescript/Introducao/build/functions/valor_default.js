"use strict";
/*
function cadastro(email: string, senha: string, nome = 'Aluno', idade?: number): void{

    let data = {email, senha, nome};
    console.log(data);

}

cadastro('teste', '123123');
*/
function cadastroLoja(nome, email, status = false) {
    console.log(status);
    return status;
}
cadastroLoja('Burguer K', 'teste@teste');
