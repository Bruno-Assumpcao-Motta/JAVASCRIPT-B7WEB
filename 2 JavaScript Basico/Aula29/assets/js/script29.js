let personagem = {
    nome: 'Bruno',
    idade: 47,
    pais: 'Brasil',
    olhos: ['verde', 'castanho'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

personagem.nome = 'Henrique';

personagem.caracteristicas.forca += 15;
console.log(`Nome: ${personagem.nome}`);
console.log(`Idade: ${personagem.idade}`);
console.log(`Força: ${personagem.caracteristicas.forca}`);