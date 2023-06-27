let personagem = {
    nome: 'Bruno',
    idade: 47,
    pais: 'Brasil',
    olhos: ['castanho', 'verde'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        inteligencia: 50,
        stamina: 15
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}`);
console.log(personagem.caracteristicas.inteligencia);
console.log(personagem.olhos[0]);