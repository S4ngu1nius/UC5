//criar referencias para tags e id

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adicionar ouvinte de evento submit

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const velPermitida = Number(frm.inVelPermitida.value);
    const velCondutor = Number(frm.inVelCondutor.value);

    
    if (velCondutor <= velPermitida) {
        resp.innerText = "Sem Multa";
    } else if (velCondutor <= velPermitida * 1.2) {
        resp.innerText = "Multa Leve";
    } else {
        resp.innerText = "Multa Grave";
    }


})

frm.addEventListener("reset", () => {
    resp.innerText = "";
})