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

// queremos a soma dos quadrados dos números pares de 1 até 25

let soma = 0;

for(let numero of numeros) {
    if(numero % 2 === 0) {
        soma += numero ** 2;
    }
}

console.log(soma);

let answer = numeros.filter(n => n % 2 === 0).map(x => x ** 2).reduce(function(ac, val) {
    ac += val;
    return ac;
}, 0);

