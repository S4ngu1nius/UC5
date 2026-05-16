/*c) Um supermercado está com umapromoção para aumentar suas vendas no setor de higiene, cada etiqueta
   de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três
   unidades do produto. Elaborar um programa que leia descrição e preço de um produto. 
   Após, apresente as mensagens indicando a promoção.
   Crie o aruiqvo supermercado.html e supermercado.js*/

    const frm = document.querySelector("form");
    const resp = document.querySelector("h3");

    frm.addEventListener("submit", (e) => {
        const produto = Number(frm.inProduto.value);
        const preco = Number(frm.inPreco.value);
            const valor = (preco * 2) + preco * 0.5;
    resp.innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;

    e.preventDefault(); //evita envio do form
})
    