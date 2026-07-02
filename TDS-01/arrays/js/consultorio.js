const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declara array global
let qtdUrgentes = 0;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value; //obtem nome paciente
    pacientes.push(nome);              //adiciona o nome no final do array
    let lista = "";                     //string para concatenar pacientes

    for(let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respLista.innerText = lista;        //exibe a lista de pacientes na página
    frm.inPaciente.value = "";          //limpa conteudo do campo de formulario
    frm.inPaciente.focus();             //posiciona o cursor no campo

});


//adiciona ouvinte para o evento click no btUrgencia que está no form

frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações o form estão ok (no caso, paciente is required)
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();        //vai posicionar o cursor no campo
        return;
    }

    /*const nome = frm.inPaciente.value;
    pacientes.unshift(nome);            //adiciona paciente no inicio do campo
    let lista = "";*/                     //string para concatenar pacientes
    const nome = frm.inPaciente.value;
    pacientes.splice(qtdUrgentes,0,nome);   // adiciona paciente no inicio do campo
    let lista = "";
    qtdUrgentes++;
    //forEach() aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", () => {
    //se o tamanho no vetor = 0
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    }

    const atender = pacientes.shift();  //remove do inicio da fila (e obtem o nome)
    respNome.innerText = atender;       //exibe o nome do paciente em atendimento
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respLista.innerText = lista;
});