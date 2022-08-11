// arrow function


const quadrado = (numero) => numero ** 2;

const falar = () => console.log('Hello');

const imc = (massa, alturaCentimetros) => {
    let alturaMetros = alturaCentimetros/100;
    return massa/alturaMetros**2;
}

console.log(imc(80, 190))