// Number(x)

// insira um numero: 4 = x
// insira outro numero: 7 = y

// x + y = 47 (UÉ!)

// em inputs, a variável é sempre interpretada como STRING, mesmo que insiramos um NÚMERO
// por exemplo, se recebermos em um input um número e guardarmos ele na variável x
// recebemos em outro input outro número e guardamos ele na variável y

// se x = 1, y = 2, quando fizermos a soma x + y ele retornará 12 
// porque O OPERADOR + ENTRE STRINGS REPRESENTA CONCATENAÇÃO

// Number(x) => converte x para um número

let x = '1';
let y = '2';

console.log(`Cuidado! A soma não é ${x + y}`); 
console.log(`A soma é ${Number(x) + Number(y)}`);

