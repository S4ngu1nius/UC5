//adiciona pacote node ao programa

//lê  nome do veiculo

//lê o preço do veiculo

//calcula o valor da entrada

//calcula o valor da parcela

//exibe o nome do veiculo e demais saidas

const prompt = require('prompt-sync')(); // adiciona pacote para entrada de dados
const veiculo = prompt("Qual o veiculo? ");// lê os números
const preco = Number(prompt("Preco do veiculo: ")); //lê o segundo número
const vlrEntrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;
console.log(`Promoção é ${veiculo}`);
console.log(`Entrada de: R$ ${vlrEntrada.toFixed(2)}`);
console.log(` + 12x de R$: ${parcela.toFixed(2)}`)