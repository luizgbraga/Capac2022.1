const nomes = ['Braga', 'Ayroso', 'Alexandre', 'Ivo Lin', 'Henequim', 'Ana Paula', 'Laxe'];
const idades = [20, 21, 23, 22, 20, 24, 19];

// altura: um número aleatório de 1.60 até 1.95

// 1. criar uma array com objetos de alunos
// 2. obter a média de idade dos alunos
// 3. obter o desvio padrão, média, mediana do imc dos alunos

function criaAluno(nome, idade, altura) {
    return {
        nome: nome,
        idade: idade,
        altura: altura,
        massa: massa,
        imc: function() {
            return this.massa/this.altura**2;
        }
    }
}

function criaArray() {
    let arr = [];
    for(let i = 0; i < nomes.length; i++) {
        arr.push(criaAluno(nomes[i], idades[i], Math.random() * (1.95 - 1.6) + 1.6))
    }
    return arr;
}

console.log(criaArray());

function media(array) {
    let soma = 0;
    for(let el of array) {
        soma = soma + el;
    }
    return soma/array.length;
}

console.log(media(idades));

function criaArrayIMC() {
    let arrayIMC = [];
    let arrayAlunos = criaArray();
    for(let aluno of arrayAlunos) {
        arrayIMC.push(aluno.imc());
    }
    return arrayIMC;
}

console.log(criaArrayIMC());
