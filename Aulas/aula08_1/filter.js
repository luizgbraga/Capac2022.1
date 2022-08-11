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

let nomesLongos = nomes.filter(nome => nome.length > 6);
let masc = alunos.filter(aluno => aluno.sexo === 'Masculino');

console.log(masc);

console.log(nomesLongos);

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



let numerosPares = numeros.filter(isEven);

let numerosImpares = numeros.filter(function(number) {
    if(number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
})

let numerosTres = numeros.filter(function(a, b, c) {
    if(b % 3 === 0) {
        return true;
    } else {
        return false;
    }
})

console.log(numerosTres);

let multiplosCinco = numeros.filter(n => n % 5 === 0);

function soma(x, y) {
    let sum = x + y;
    return sum;
}

console.log(soma(2, 5))
