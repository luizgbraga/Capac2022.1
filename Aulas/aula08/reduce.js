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

let ans = numeros.reduce(function(ac, valor) {
    if(valor % 2 === 0) {
        ac += valor ** 2;
    }
    return ac;
}, 0);

let resposta = numeros.filter(n => n % 2 === 0).map(n => n ** 2).reduce(function(ac, valor) {
    ac += valor;
    return ac;
}, 0);

let sum = 0;
for(let el of numeros) {
    if(el % 2 === 0) {
        soma += el ** 2;
    }
}



function soma(array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(soma(numeros));

let arraySoma = numeros.reduce(function(ac, valor) {
    ac += valor;
    return ac;
}, 0);

console.log(arraySoma);

// simular o filter com reduce

let numerosPares = numeros.reduce(function(ac, valor) {
    if(valor % 2 === 0) {
        ac.push(valor);
    }
    return ac;
}, []);

console.log(numerosPares);

// simular map com reduce

let squares = numeros.reduce(function(ac, valor) {
    ac.push(valor ** 2);
    return ac;
}, []);
