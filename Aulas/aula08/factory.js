// factory functions

// o que são? funções que retornam objetos
// na verdade, elas tão copiando, fazendo o papel de, uma classe

function criaAluno(nome, numero, sexo) {
    return {
        nome: nome,
        numero: numero,
        sexo: sexo
    }
}

const braga = criaAluno('Braga', 21414, 'M');

console.log(braga);
