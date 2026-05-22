//b) Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um
//  gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto
//   sobra da ração (em gramas).
/*
const prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
const peso = Number(prompt("Qual o peso do saco de ração comprado? "));// lê os números
const dia = Number(prompt("Quanto o gato consome por dia (em gramas)? ")); //lê o segundo número


const pesoGramas = peso * 1000;

// Calcular quantos dias dura a ração
const dias = Math.floor(pesoGramas / dia);

// Calcular a sobra da ração
const sobra = pesoGramas % dia;


console.log(`O gato irá consumir por dia: ${dia}`);
console.log(`Irá sobrar no saco de ração: ${sobra}`);
*/

const prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
const pesoKg = Number(prompt("Informe o peso da ração (em kg):"));
const consumoDia = Number(prompt("Informe o consumo diário do gato (em gramas):"));
const pesoGramas = pesoKg * 1000;
const dias = Math.floor(pesoGramas / consumoDia);
const sobra = pesoGramas % consumoDia;
console.log("A ração irá durar " + dias + " dias.");
console.log("Sobrará " + sobra + " gramas de ração.");