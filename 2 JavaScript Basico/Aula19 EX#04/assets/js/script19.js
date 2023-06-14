/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula de porcentagem: (y / x) * 100
uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é $`{y}`);
*/


function calcPct(n1, n2) {
    let pct = (n2 / n1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} ${y}`);