//criar referencia ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar ouvinte de evento quando clicar no botão submit
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); //btem o valor do quilo
    const consumo = Number(frm.inConsumo.value);

    const valor = (quilo / 1000) * consumo; //calcula o valor a pagar
    
    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;

    e.preventDefault(); //evita envio do form
});