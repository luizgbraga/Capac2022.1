let nomes = ['Braga', 'Alexandre', 'Ana', 'Camila'];

// tradicional
for(let i = 0; i < 4; i++) {
    console.log(nomes[i]);
}

// for in => percorre os ÍNDICES
for(let i in nomes) {
    console.log(i);
    console.log(nomes[i]);
}

// for of => percorre os ELEMENTOS
for(let element of nomes) {
    console.log(element);
}

// em OBJETOS

let aluno = {
    nome: 'Braga',
    idade: 19,
    numero: 21414,
    ativa: false
}

// o for in lerá as CHAVES dos atributos do objeto
for(let indice in aluno) {
    console.log(indice);
}

// saída: nome, idade, número, ativa

// o for of lerá os VALORES das chaves
for(let value of aluno) {
    console.log(value);
}

// saída: Braga, 19, 21414, false

const names = ['Ivo Lin', 'Braga', 'Suriel'];

for(let i in names) {
    console.log(i);
}

for(let i of names) {
    console.log(i);
}

let arr = ['luiz', 2, 7, true]
