//a) Elabore um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha
//   na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no 
//   salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o 
//   salário final.

const prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
//const ajustado = (((anosCasa/4) + (salario * 0.01) + salario));
const anosCasa = Number(prompt("Anos de casa: "));// lê os números
const salario = Number(prompt("Qual o salário: "));// lê os números
const quadrienio = Math.floor(anosCasa/4);
const acrescimo = salario * (quadrienio * 0.01) + salario;

//const salarioFinal = salario * (1 + acrescimo);

console.log(`Salario ajustado por quadrienio: ${acrescimo.toFixed(2)}`);