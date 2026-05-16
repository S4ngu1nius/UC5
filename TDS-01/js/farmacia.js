//  a) Uma farmácia está com uma promoção, na compra de duas unidades de um mesmo medicamento, o cliente 
//  recebe como desconto os centavos do valor total.
//  Elabore um programa que leia a descrição e preço de um medicamento. 
//  Informe o valor do produto na promoção.
//  Crie o arquivo farmacia.html e farmacia.js

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const medicamento = Number(frm.inMedicamento.value);
    const preco = Number(frm.inPreco.value);
    
    
    const valor = (medicamento * preco - (medicamento * preco * 0.1)); //calcula o valor a pagar
    
    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;

    e.preventDefault(); //evita envio do form
})