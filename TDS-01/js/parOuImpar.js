//criar referencias para tags e id

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adicionar ouvinte de evento submit

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const num = Number(frm.inNumero.value);
/*
    if(num % 2 === 0){
        resp.innerText = `O número ${num} é par!`;
    }else{
        resp.innerText = `O número ${num} é impar!`;
    }
*/
    num % 2 === 0 ? resp.innerText = `O número ${num} é par!` : resp.innerText = `O número ${num} é impar!`

})