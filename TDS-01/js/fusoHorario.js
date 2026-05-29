const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//ouvinte de evento, quando o submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    //obter e converter o conteudo do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value);

    let horaFranca = (horaBrasil + 5) > 24 ? (horaBrasil + 5) - 24 : (horaBrasil + 5);

   /* let horaFranca = horaBrasil + 5; //calcula o horário da França 
    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    } */
   
    //exibe a resposta
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})