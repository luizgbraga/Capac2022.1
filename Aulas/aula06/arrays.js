// arrays são vetores unidimensionais
// arrays são listas de dados
// em JS, são listas de dados de quaisquer tipos => pode misturar (embora não façamos isso na realidade)

//           0          1       2    3              4
let arr = ['Luiz', 'Guilherme', 12, true, { baixado: false, dias: 0 }];

// acessamos o n-ésimo elemento por array[n]

console.log(arr[0]);
console.log(arr[4]);
console.log(arr[4].dias);

console.log(typeof arr); // array é um objeto!

// métodos do objeto array (já que é um objeto...)

let nomesCadastrados = ['Braga', 'Alexandre', 'Camila', 'Ana'];

console.log(nomesCadastrados)

// 1. COLOCAM coisas na array

// array.push(novoElemento)
// adiciona o novoElemento no fim da array

nomesCadastrados.push('Ayroso'); // muito útil
console.log(nomesCadastrados);

// array.unshift(novoElemento)
// adiciona o novoElemento no começo da array

nomesCadastrados.unshift('Ivo Lin');
console.log(nomesCadastrados);

// 2. RETIRAM coisas da array

// array.pop()
// retira o último elemento da array

nomesCadastrados.pop();
console.log(nomesCadastrados);

// array.shift()
// retira o primeiro elemento da array

nomesCadastrados.shift();
console.log(nomesCadastrados);

// 3. TAMANHO da sua array

// array.lenght
// retorna o tamanho da array

console.log(nomesCadastrados.length)

// MUITO IMPORTANTE: como acessar o ÚLTIMO ELEMENTO da sua array?

// array[array.length - 1]

let letras = ['a', 'b', 'c', 'd', 'e', 'f'];

ultimoElemento = letras[letras.length - 1];
