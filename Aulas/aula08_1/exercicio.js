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

console.log(nums.sort((a, b) => a-b));

class Aluno {
    constructor(nome, idade, sexo, massa, altura) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.massa = massa;
        this.altura = altura;
    }

    imc() {
        let alturaMetros = this.altura / 100;
        return this.massa/alturaMetros**2;
    }

    classImc() {
        let imc = this.imc();
        if(imc < 18.5) {
            return 'Abaixo do peso';
        } else if(imc >= 18.5 && imc < 24.9) {
            return 'Normal';
        } else {
            return 'Acima do peso';
        }
    }
}

const alunos = [];

for(let i = 0; i < nomes.length; i++) {
    alunos.push(new Aluno(nomes[i], idades[i], sexos[i], pesos[i], alturas[i]));
}

const idadesTodos = [];
const idadesMasc = [];
const idadesFem = [];

for(let aluno of alunos) {
    idadesTodos.push(aluno.idade);
    if(aluno.sexo === 'M') {
        idadesMasc.push(aluno.idade)
    } else {
        idadesFem.push(aluno.idade);
    }
}

let idadesTodosOrdenada = idadesTodos.sort((a, b) => a-b);

let max = idadesTodosOrdenada[idadesTodosOrdenada.length - 1];

for(let aluno of alunos) {
    if(aluno.classImc() === 'abaixo...'){
        abaixoDoPeso.push(aluno)
    }
}