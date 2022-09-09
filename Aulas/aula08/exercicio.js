const nomes = ['Braga', 'Alexandre', 'Ana', 'Ayroso', 'Laxe', 'Suriel', 'Maria', 'Isabel', 'Léo', 'Júlia'];
const idades = [20, 23, 22, 19, 18, 19, 20, 17, 19, 20];
const sexos = ['M', 'M', 'F', 'M', 'M', 'M', 'F', 'F', 'M', 'F'];
const pesos = [80, 90, 55, 70, 68, 60, 55, 65, 100, 90];
const alturas = [186, 183, 162, 172, 170, 168, 160, 175, 190, 185];

// objetivos:
// 1. descobrir o mais velho, masc e fem
// 2. classificar eles quanto a imc
// 3. editar o peso do braga pra 90 com map
// 4. excluir o braga com filter

const nums = [1, 5, 2, 7, 12]

// BIZU
// array.sort((a, b) => a - b)

console.log(nums.sort((a, b) => a - b));

// CLASSES SÃO SEMPRE COM LETRA MAIÚSCULA

class Pessoa {
    constructor(nome, idade, sexo, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        let alturaMetros = this.altura/100;
        return (this.peso/alturaMetros**2).toFixed(2);
    }

    
    classImc() {
        let imc = this.imc();
        if(imc < 18.5) {
            return 'Abaixo do peso'
        } else if(imc > 18.5 && imc < 24.9) {
            return 'Normal'
        } else {
            return 'Sobrepeso'
        }
    }
}

let usuarios = [];

for(let i = 0; i < nomes.length; i++) {
    usuarios.push(new Pessoa(nomes[i], idades[i], sexos[i], pesos[i], alturas[i]));
}

let idadesUsuarios = [];

for(let user of usuarios) {
    idadesUsuarios.push(user.idade);
}

let idadesSorted = idadesUsuarios.sort((a, b) => a - b);
console.log(idadesSorted[0]);

console.log(idadesSorted[idadesSorted.length - 1]);

let abaixoPeso = [];
let normal = [];
let sobrepeso = [];

for(let user of usuarios) {
    if(user.classImc() === 'Abaixo do peso') {
        abaixoPeso.push(user.nome);
    } else if(user.classImc() === 'Normal') {
        normal.push(user.nome);
    } else {
        sobrepeso.push(user.nome);
    }
}

console.log(abaixoPeso, normal, sobrepeso);
