//criar referencia ao form e aos elementos de resosta 
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();//evita o envio do form
    const nome = frm.inNome.value;//obtem valores do form
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2; //calcula a media
    resp1.innerText = `Média das notas ${media.toFixed(2)}`;

    //cria as condições

    if(media >= 7){
        //altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a).`
        resp2.style.color = "blue";
    }else if(media >= 4){
        resp2.innerText = `Cuidado ${nome}! Você está de recuperação.`
        resp2.style.color = "orange";
    }else {
        resp2.innerText = `Ops ${nome}! Você foi reprovado(a).`
        resp2.style.color = "red";
    }

})