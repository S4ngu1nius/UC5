// criar referencia ao form e ao elemnte h3 (onde vai exibir a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value; //obtem o conteudo do campo texto
    resp.innerText = `Olá ${nome}`; //exibe a resposta

    //impede o envio do form
    e.preventDefault();
})