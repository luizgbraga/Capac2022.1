function criaPessoa(nome, idade, massa, altura) {
    return {
        nome: nome,
        idade: idade,
        massa: massa,
        altura: altura,
        imc: function() {
            return this.massa/this.altura**2;
        }
    }
}

const braga = criaPessoa('Braga', 20, 80, 1.86);
const alexandre = criaPessoa('Alexandre', 23, 90, 1.85);
const ayroso = criaPessoa('Ayroso', 21, 70, 1.76);

