//criar referencias para tags e id

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// adicionar ouvinte de evento submit

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita envio do form

    const saque = Number(frm.inSaque.value);
    //validação do valor do saque vendo se o resto da divisão é igual a zero
    if(saque % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        frm.inSaque.focus(); //focus() coloca o cursor do mouse no campo inSaque
        return;
    }

    const notasCem = Math.floor(saque/100); //calcula notas de cem
    let resto = saque % 100;                //quanto sobra para pagar
    const notasCinquenta = Math.floor(resto/50); //calcula notas de cinquenta
    resto = resto % 50;                     //calcula se ainda sobrou
    const notasDez = Math.floor(resto/10)   //calcula notas de dez

    //exibe as notas se houver
    if(notasCem > 0){
        resp1.innerText = `Notas de R$100: ${notasCem}`;
    }
    if(notasCinquenta > 0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`;
    }
    if(notasDez > 0){
        resp3.innerText = `Notas de R$10: ${notasDez}`;
    }

})

frm.addEventListener("reset", () => {
    resp1.innerText = "";
    resp2.innerText = "";
    resp3.innerText = "";
})