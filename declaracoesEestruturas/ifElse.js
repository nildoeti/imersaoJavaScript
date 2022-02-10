/*
 * IF/ELSE
 * Útil quando desejamos testar uma ou mais condições para uma tomada de decisão.
 * */

 // exemplo de uso do if/else
let idade = 18;

if (idade <= 11) {
    console.log('Você é menor de idade');
} else if (idade > 11 && idade <= 14) {
    console.log('Você é pré-adolecente');
} else if (idade > 14 && idade < 21) {
    console.log('Você é adolecente');
} else if (idade > 21 && idade < 60) {
    console.log('Você é adulto');
} else {
    console.log('Você é idoso');
}
