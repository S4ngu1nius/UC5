const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDivisores");
const resp2 = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    let somaDivisores = Number(Math.floor(0));

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores += i;
        }
    }

    resp1.innerText = `Divisores do ${somaDivisores}: ${num/num}, ${num/3}, ${num/2} (Soma: ${num})`;

    if (somaDivisores === num) {
        resp2.innerText = `${num} é um número perfeito!`;
    } else {
        resp2.innerText = `${num} não é um número perfeito.`;
    }

})