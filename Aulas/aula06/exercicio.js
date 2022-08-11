let alunosIME = [
    {
        nome: 'Braga',
        idade: 20,
        ativa: false,
        sexo: 'Masculino'
    },

    {
        nome: 'Alexandre',
        idade: 22,
        ativa: true,
        sexo: 'Masculino'
    },

    {
        nome: 'Ana',
        idade: 21,
        ativa: true,
        sexo: 'Feminino'
    },

    {
        nome: 'Léo',
        idade: 24,
        ativa: true,
        sexo: 'Masculino'
    },

    {
        nome: 'Ayroso',
        idade: 18,
        ativa: false,
        sexo: 'Masculino'
    }
]

// 1- adicionar um aluno novo de 2 formas distinas: usando spread e push;

alunoNovo = {
    nome: 'Hamilton',
    idade: 56,
    ativa: false,
    sexo: 'Masculino'
}

// push
alunosIME.push(alunoNovo);

// spread: let novaArray = [...alunosIME, alunoNovo]

// 2- criar uma nova array a partir dessa só com (objetivo: simular o filter)
// a. alunos do sexo masculino
// b. alunos da ativa
// c. alunos da reserva
// d. alunos com mais de 20 anos

let alunosMasc = [];

for(let el of alunosIME) {
    if(el.sexo === 'Masculino') {
        alunosMasc.push(el);
    }
}

let alunosAtiva = [];
let alunosReserva = [];

for(let aluno of alunosIME) {
    if(aluno.ativa) {
        alunosAtiva.push(aluno);
    } else {
        alunosReserva.push(aluno);
    }
}

let alunosVelhos = [];

for(let aluno of alunosIME) {
    if(aluno.idade > 20) {
        alunosVelhos.push(aluno);
    }
}

console.log(alunosReserva, alunosVelhos);

// 3. retornassem a média de idade dos alunos

let soma = 0;

for(let aluno of alunosIME) {
    soma = soma + aluno.idade;
}

console.log(soma/alunosIME.length);

// 4. retorna uma array editando Alexandre para Alex

for(let aluno of alunosIME) {
    if(aluno.nome === 'Alexandre') {
        aluno.nome = 'Alex';
    }
}

// 5. retornar uma array DELETANDO a Ana

let newArray = [];

for(let aluno of alunosIME) {
    if(aluno.nome !== 'Ana') {
        newArray.push(aluno);
    }
}

// 6. retornar um nome aleatório de aluno

let min = 0;
let max = alunosIME.length - 1;

let random = Math.round(Math.random() * (max - min) + min);

console.log(alunosIME[random].nome);

// ===, !==, ||, &&