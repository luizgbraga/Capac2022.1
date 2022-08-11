// imc = m/h^2
// menor que 18.5 abaixo, até 24.9 normal, acima sobrepeso

// UMA CLASSE É UM MOLDE

// 1° Boas práticas: uma classe sempre tem letra MAIÚSCULA
// um objeto tem ATRIBUTOS e MÉTODOS (ações)

class Aluno {
    constructor(nome, massa, altura, numero, senha) {
        this.nome = nome;
        this.massa = massa;
        this.altura = altura;
        this.numero = numero;
        this.senha = senha;
        this.logged = false;
    }

    brado() {
        console.log(`Aluno ${this.numero}, de guerra, Brasil!`);
    }

    imc() {
        return (this.massa/this.altura**2).toFixed(2);
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

    logIn(tentativaSenha) {
        if(tentativaSenha === this.senha) {
            this.logged = true;
            console.log('Logado com sucesso');
        } else {
            console.log('Senha inválida');
        }
    }
}

let newAluno = new Aluno('Braga', 80, 1.86, 21414, '1234');

newAluno.brado();
console.log(newAluno.classImc());
console.log(newAluno.logged);

newAluno.logIn('1234');



