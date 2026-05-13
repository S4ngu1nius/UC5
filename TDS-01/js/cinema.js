// criar referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//criar um ouvinte de evento, que vai ser acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; // obtem conteudo dos campos
    const duracao = Number(frm.inDuracao.value);
    //converter durção em horas e minutos
    const horas = Math.floor(duracao / 60); //aredonda para baixo
    const minutos = duracao % 60; //resto da divisão
    //exibir as respostas
    resp1.innerText = titulo;
    resp2.innerText = `${horas} horas(s) e ${minutos} minuts(s)`;
    e.preventDefault(); //evita envio do form
})