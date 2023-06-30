let cores = [
    {nome: 'preto', qt: 20},
    {nome: 'branco', qt: 30},
    {nome: 'azul', qt: 15},
    {nome: 'cinza', qt: 10},
    {nome: 'vermelho', qt: 5}
];



/*
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
} 
*/
/*
for (let i in cores) {
    console.log(cores[i]);
}
*/

for (let cor of cores) {
    cor.nome = cor.nome.toUpperCase()
    console.log(`nome: ${cor.nome} - qt: ${cor.qt}`);
}