const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDivisores");
const resp2 = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let somaDivisores = Number(" ");

    /*for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores += i;
        }
    }*/

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores = somaDivisores + ", " + i;
        }
    }

    resp1.innerText = `Divisores do ${somaDivisores} (Soma: ${num})`;

    if (somaDivisores === num) {
        resp2.innerText = `${num} não é um número perfeito.`;
    } else {
        resp2.innerText = `${num} é um número perfeito!`;
    }

})