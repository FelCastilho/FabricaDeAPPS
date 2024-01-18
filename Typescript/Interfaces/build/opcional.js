"use strict";
const novoUsuario = {
    nome: 'Felipe',
    email: 'teste@teste.com',
    status: true,
};
function novoUser(props) {
    console.log(props.email);
}
novoUser({ email: 'teste@teste.com', status: false });
