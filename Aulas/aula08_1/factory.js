// lembrando: Factory Functions

// factory functions são funções que retornam objetos

function criaUsuario(nome, senha, hasAccount) {
    let user = {
        nome: nome,
        senha: senha,
        hasAccount: hasAccount
    }

    return user;
}

let newUser = criaUsuario('Braga', 123, true);

console.log(newUser);

