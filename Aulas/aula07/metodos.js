// métodos

let aluno = {
    nome: 'Braga',
    idade: 20,
    numero: 21414,
    ativa: false,
    massa: 86,
    altura: 1.80,
    baixado: {
        estado: true,
        dias: 5
    },
    falar: function() {
        console.log('Eu sou aluno!');
    },
    imc: function() {
        return this.massa/this.altura**2
    },
    brada: function() {
        console.log(`${this.nome}, número ${this.numero}, Brasil!`);
    },
    mudaNumero: function(novoNumero) {
        this.numero = novoNumero;
    }
}

aluno.falar()

console.log(aluno.imc())

aluno.brada();

aluno.mudaNumero(21014);


console.log(aluno.numero);