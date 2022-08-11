let estilo = {
    tamanho: '24px',
    corDeFundo: 'azul',
    borda: '23px',
    corDaBorda: 'preta'
}

let novoEstilo = { ...estilo, corDaBorda: 'azul' };

console.log(novoEstilo);

// o spread em objetos é muito útil quando temos objetos muito parecidos, somente com uma nuance diferente
// nesse caso, usamos o spread para sobrepor essa característica