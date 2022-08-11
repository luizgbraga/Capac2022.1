function falar() {
    console.log('Hello, world!');
}

falar(); // console.log('Hello, world!');

function soma(x, y) {
    return x + y;
}

soma(2, 3); // 5

console.log(soma(2, 3)); // console.log(5);

// imc: massa/altura**2 (altura É EM METROS)

function imc(massa, altura) {
    let alturaMetros = altura/100;
    return massa/alturaMetros**2;
}

console.log(imc(80, 180));


// boas práticas: USE nomes decentes pras suas variáveis
