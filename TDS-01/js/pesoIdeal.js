//criar referencia ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar ouvinte de evento quando clicar no botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita envio do form

    const nome = frm.inNome.value; //obtendo os valores
    const masculino = frm.inMasculino.checked; //se ele foi checado
    const altura = Number(frm.inAltura.value);

    let peso; //declara a variavel chamada peso

    if(masculino){
        //se a condição é TRUE executa aqui
        peso = 22 * Math.pow(altura, 2); //Math.pow() eleva ao quadrado
    }else{
        //se a condição é FALSE executa aqui
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`;
});