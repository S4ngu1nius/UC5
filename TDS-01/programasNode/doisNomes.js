const prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
//const idade = prompt("Qual sua idade?");
const num1 = Number(prompt('Numero 1:'));
const num2 = Number(prompt('Numero 2:'));


if(num1 !== num2) {
    console.log(`Número diferente`);
}else{
    console.log(`Número igual`);
}