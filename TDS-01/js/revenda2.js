const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const carros = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);
    carros.push({ modelo, preco });
    frm.inModelo.value = '';
    frm.inPreco.value = '';
    frm.inModelo.focus();
    //disparar um evento de clique no botão btnListar
    frm.btListar.dispatchEvent(new Event('click'));
});

frm.btListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert('Não há carros na lista');
        return;
    }
    //reduce() para concatenar uma string obtendo modelo e preço de cada carro
    const lista = carros.reduce((acumulador, carro) => {
        return acumulador + `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;
    }, ''); 
    resp.innerText = `Lista de carros cadastrados:\n${"-".repeat(40)} ${lista}`;
});

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt('Qual o preço máximo que deseja pagar?'));
    if(maximo == 0 || isNaN(maximo)) {
        alert('Valor inválido');
        return;
    }
    //criar um novo array com os objetos que atendem a condição do filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);
    if(carrosFilter.length == 0) {
        alert('Não há carros com preço menor ou igual a R$ ' + maximo.toFixed(2));
        return;
    }
    let lista = "";
    for(const carro of carrosFilter) //percorrer o array filtrado e concatenar modelo e preço de cada carro
    {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Lista de carros com preço menor ou igual a R$ ${maximo.toFixed(2)}:\n${"-".repeat(40)} ${lista}`;
});

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt('Qual o percentual de desconto?'));
    if(desconto == 0 || isNaN(desconto)) {
        alert('Valor inválido');
        return;
    }
    const carrosDesconto = carros.map(aux => {
        return {
            modelo: aux.modelo,
            preco: aux.preco * (1 - desconto / 100)
        };
    })
    let lista = "";
    for(const carro of carrosDesconto) {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`;
    }
    resp.innerText = `Lista de carros com desconto de ${desconto.toFixed(2)}%:\n${"-".repeat(40)}\n ${lista}`;
});