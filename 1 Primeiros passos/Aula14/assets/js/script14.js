let profession = "editor"

console.log("Profissão: " + profession);

switch(profession){
    case 'fiscal':
        console.log('Sua camisa será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua camisa será VELHELHA');
        break;
    case 'policial':
        console.log('Sua camisa será AZUL')
        break;
    default:
        console.log('Sua camisa será PRETA')
        break;
}