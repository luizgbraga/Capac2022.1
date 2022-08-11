// imc = m/h^2
// menor que 18.5 abaixo, até 24.9 normal, acima sobrepeso

// classes: SÃO MOLDES PARA INSTANCIARMOS OBJETOS

// uma classe é constituída por 2 coisas: ATRIBUTOS e MÉTODOS
// usuário em um site (objeto): 
// atributos: nome, email, senha, quanto tempo ele está logado, ...
// métodos: login, logout, trocar senha, ... 

class Aluno {
    constructor(nome, numero, massa, altura, logged, user, password) {
        this.nome = nome;
        this.numero = numero;
        this.massa = massa;
        this.altura = altura;
        this.logged = false;
        this.user = user;
        this.password = password;
    }

    bradar() {
        console.log(`Aluno ${this.numero}, Brasil!`);
    }

    imc() {
        return (this.massa/this.altura**2).toFixed(2);
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

    logIn(senha) {
        if(senha === this.password) {
            console.log('Logado com sucesso');
            this.logged = true;
        } else {
            console.log('Senha incorreta');
        }
    }

    trocarSenha(novaSenha) {
        this.password = novaSenha;
    }
}

let alunoBraga = new Aluno('Braga', 21414, 80, 1.86, false, 'braga214', '1234');

alunoBraga.bradar();

alunoBraga.logIn('1234');

console.log(alunoBraga.logged);

