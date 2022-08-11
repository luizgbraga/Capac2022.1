// concatenação (entre STRINGS)
// símbolo + entre strings

console.log('Hello' + ' ' + 'World' + '!');  // Hello World!

string1 = 'Hello';
string2 = ' ';
string3 = 'World';
string4 = '!'

stringConcatenada = string1 + string2 + string3 + string4;

console.log(stringConcatenada);

// operações usuais (entre números)

// soma (+)
console.log(2 + 2);

// multiplicação (*)
console.log(2 * 5);

// subtração (-)
console.log(5 - 3);

// divisão normal (/)
console.log(3 / 4); 

// potenciação (**)
console.log(2 ** 5);

console.log(7 ** (0.5)); // raiz quadrada!

// resto (%)
console.log(10 % 4);
console.log(18 % 5);

// incrementos (++)

// x++

let x = 5;

console.log(x); // 5
console.log(x++); // 5
console.log(x); // 6

/*

nesse caso, o console.log primeiro lê o x, e imprime o x, e
somente depois altera seu valor para (x + 1)

*/

let y = 10;

console.log(y); // 10
console.log(++y); // 11
console.log(y); // 11

/*

nesse caso, primeiro é realizada a operação de incremento em si,
e, já alterado o valor da variável, o console.log a lê e a impri-
me já com seu novo valor

*/

let str = 'A principal característica do material piezoelétrico é a geração de cargas elétricas ao sofrer algum tipo de deformação mecânica, podendo ser utilizado como biomaterial em processos de osseointegração na área de Medicina, por exemplo. O foco deste trabalho é desenvolver um biomaterial cerâmico piezoelétrico promissor a base de Niobato de Potássio e Sódio (KNN). As amostras foram preparadas pelo método de reação em estado sólido em duas etapas: calcinadas em 850°C e duas rotas para sinterização; a 900°C e 1050°C. Em seguida, as amostras foram caracterizadas pelos testes de Densidade, Difração de raio X (DRX), Microscopia Eletrônica de Varredura (MEV), Espectroscopia de Energia Dispersiva (EDS), de Flexão e, o principal, o teste de Piezeletricidade. Os resultados mostraram que as amostras sinterizadas a 1050°C tiveram propriedades superiores e se pode concluir que apresentaram propriedades piezoelétricas satisfatórias para uma futura aplicação como biomaterial, cumprindo os objetivos desejados'
let sep = str.split(' ');
console.log(sep);