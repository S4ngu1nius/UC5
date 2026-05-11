// criar referencia ao form e ao elemnte h3 (onde vai exibir a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nota1 = frm.nota1.value; //obtem o conteudo do campo texto
    console.log(nota1);
    const nota2 = frm.nota2.value; //obtem o conteudo do campo texto
    console.log(nota2);
    const media = (parseFloat(frm.nota1.value) + parseFloat (frm.nota2.value)) / 2;
    console.log(media);
    resp.innerText = `Nota 1: ${nota1}. Nota 2: ${nota2}. Média: ${media}`; //exibe a resposta
    //impede o envio do form
    e.preventDefault();
})