let cores = ['preto', 'branco', 'azul', 'cinza', 'vermelho'];

cores.push('amarelo');

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
    console.log(cor);
}