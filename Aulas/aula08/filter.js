const nomes = ['Braga', 'Alexandre', 'Ana', 'Laxe', 'Suriel', 'Ivo Lin', 'Camelo', 'Henequim', 'Ayroso'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const alunos = [
    {
        nome: 'Braga',
        idade: 20,
        ativa: false,
        sexo: 'Masculino'
    },
    {
        nome: 'Alexandre',
        idade: 23,
        ativa: true,
        sexo: 'Masculino'
    },
    {
        nome: 'Ana',
        idade: 22,
        ativa: true,
        sexo: 'Feminino'
    },
    {
        nome: 'Laxe',
        idade: 17,
        ativa: false,
        sexo: 'Masculino'
    },
    {
        nome: 'Suriel',
        idade: 17,
        ativa: true,
        sexo: 'Masculino'
    },
    {
        nome: 'Ayroso',
        idade: 21,
        ativa: false,
        sexo: 'Masculino'
    }
]

// FILTER MAP REDUCE

// filter: arrayN -> arrayM<N
// map: arrayN -> array'N
// reduce: arrayN -> numero/string...

let nomesLongos = nomes.filter(nome => nome.length > 5);

console.log(nomesLongos);

let nomesCompostos = nomes.filter(nome => (nome.split(' ')).length >= 2);

console.log(nomesCompostos)

let masc = alunos.filter(aluno => aluno.sexo === 'Masculino');

let numerosPares = numeros.filter(isEven)

function isEven(n) {
    if(n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numerosImpares = numeros.filter(function(n) {
    if(n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
});

let multiplosTres = numeros.filter(n => n % 3 === 0);


// excluindo pessoas

let alunosAtualizados = alunos.filter(aluno => aluno.nome !== 'Ayroso');

console.log(alunosAtualizados)
