// criar referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

function raizQuadrada(){

    const numero = Number(frm.inNumero.value); //obtem numero digitado no form
    const raiz = Math.sqrt(numero); //calcula raiz quadrada do numero

    if(Number.isInteger(raiz)){ //verifica se raiz é numero inteiro
        resp1.innerText = `Raiz: ${raiz}`;
    }else{
        resp1.innerText = `Não há raiz exata para ${numero}`;
    }

}




/* frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita envio do form



}) */