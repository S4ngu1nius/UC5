const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNumero.value);

    let numDivisores = 0;       //contador
    for(let i = 1; i <= num; i++){  //percorre todos os possiveis divisores de num
        if(num % 1 == 0){           //verifica se i (1, 2, 3...) é divisor do num
            numDivisores++;         //se é, incrementa contador
        }
    }

    if(numDivisores == 2){          //se possui dois divisores é primo
        resp.innerText = `${num} é primo`;
    }else{
        resp.innerText = `${num} não é primo`;
    }

})