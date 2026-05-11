const frm = document.querySelector("form");
const resp = document.querySelector("h3");
   
    // cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
//    const nome = frm.inNome.value; //obtem o conteudo do campo texto
//    resp.innerText = `Olá ${nome}`; //exibe a resposta
    const num = frm.num.value;
    //const num = prompt("Número: "); // lê um dado de entrada
    const dobro = num * 2; //calculo do dobro do número
    //alert(`O dobro de ${num} é ${dobro}`); //exibe o resultado
    resp.innerText = `O dobro de ${num} é ${dobro}`;
    //impede o envio do form
    e.preventDefault();
})