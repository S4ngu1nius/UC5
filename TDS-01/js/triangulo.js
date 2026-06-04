//criar referencias para tags e id

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outSimNao");
const resp2 = document.querySelector("#outTipo");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)){
        resp1.innerText = `Não é um triangulo`;
    }else{
        resp1.innerText = `É um triangulo`;
    }

    if(ladoA === ladoB && ladoB === ladoC){
        resp2.innerText = "Equilátero";
    }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        resp2.innerText = "Isósceles";
    }else{
        resp2.innerText = "Escaleno";
    }

})