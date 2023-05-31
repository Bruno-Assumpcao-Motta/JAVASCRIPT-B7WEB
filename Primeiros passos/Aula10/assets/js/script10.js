let idade = 50;
/*
forma só com if - todos os ifs sao independentes

if (idade < 15) {
    console.log("Você é uma criança.")
}

if (idade >= 15 && idade < 18) {
    console.log("Você é um adolescente.")
} 

if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.")
}

if (idade > 60) {
    console.log("Você é um idoso.")
}
*/
if (idade < 15) {
    console.log("Você é uma criança.");    
} else if (idade >= 15 && idade < 18) {
    console.log("Voçê é um adolescente.")
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto")
} else if (idade >= 60) {
    console.log("Você é um idoso.")
}