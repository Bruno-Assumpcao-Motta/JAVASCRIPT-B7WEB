let pessoa = {
    nome: 'Bruno',
    sobrenome: 'Motta',
    idade: 47,
    nomeCompleto:  function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());
