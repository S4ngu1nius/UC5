const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numInicial = Number(frm.inChin.value);
    const anos = Number(frm.inAnos.value);

    if (numInicial < 2) {
        resp.innerText = "O número inicial de chinchilas deve ser maior ou igual a 2.";
    } else {
    let quantidade = numInicial;
    let resposta = "";

    for (let ano = 1; ano <= anos; ano++) {
        if (ano > 1) {
        quantidade = quantidade * 3;
        }

        resposta += `${ano}º ano: ${quantidade} chinchilas\n`;
    }
        resp.innerText = `${resposta}`;
    }
})