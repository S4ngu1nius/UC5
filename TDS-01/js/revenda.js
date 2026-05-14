//criarreferencia do form e os elementos de resposta (h3)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");
//criar um ouvinte de evento pro submit
frm.addEventListener("submit", (e) => {
    //entrada - obter os valores de entrada
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);
    const entrada = preco * 0.50; //calculo valor da entrada
    const parcela = (preco * 0.50) / 12; //calculo valor das parcelas
    //saida - exibir resposta
    resp1.innerText = `Promoção ${veiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada}`;
    resp3.innerText = `+12 de R$: ${parcela.toFixed(2)}`;
    e.preventDefault(); //evita o envio do form
})