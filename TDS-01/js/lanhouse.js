/*b) Elaborar um programa para uma lan house de um aeroporto, o programa deve ler o valor de cada 
   15 minutos de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser 
   cobradas de forma integral.
   Crie o arquivo lanhouse.html e lanhouse.js*/

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const tempo = Number(frm.inTempo.value);
    const preco = Number(frm.inPreco.value);

    const valor = Math.ceil(tempo/15) * preco;

        resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;

    e.preventDefault(); //evita envio do form

})