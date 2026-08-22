/*
Projeto Prático: 
Objetivo: Construir do zero um Sistema de E-commerce / Carrinho de Compras que utilize TODOS os conceitos aprendidos (Classes, Privados, Get/Set, Herança, Polimorfismo e Métodos Estáticos).

Requisitos do Projeto:

Classe Abstrata/Base Produto:
Atributos privados #id, #nome, #preco.
Getters para os atributos.
Método calcularDesconto().
Classes Filhas (Herança e Polimorfismo):
ProdutoFisico: adiciona peso e calcula frete. Sobrescreve calcularDesconto().
ProdutoDigital: adiciona tamanhoArquivo. Sobrescreve calcularDesconto() (desconto maior por não ter frete).
Classe Carrinho:
Gere a lista de produtos (adicionar, remover).
Calcula o total aplicando os descontos polimórficos de cada produto.
Classe Utilitária Validador (static):
Método estático para validar se o preço de um produto é válido antes de adicionar.
*/

class Validador {
    static validarPreco(preco) {
        return preco > 0;
    }
}

class Produto {
    #id;
    #nome;
    #preco; 
    constructor(id, nome, preco) {
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }
    
    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco;
    }

calcularDesconto() {
    return 0;
    }  

precoComDesconto() {
    const desconto = this.calcularDesconto();
    return this.#preco - desconto;
    }

}

class ProdutoFisico extends Produto {
    #peso;
    constructor(id, nome, preco, peso) {
        super(id, nome, preco);
        this.#peso = peso;
    }


calcularDesconto() {
    return this.preco * 0.10;
}

calcularFrete() {
    return this.#peso * 5;
}

calcularPrecoFinal() {
    return this.precoComDesconto() + this.calcularFrete();
    }
}

class ProdutoDigital extends Produto {
    #tamanhoArquivo;
    constructor(id, nome, preco, tamanhoArquivo) {
        super(id, nome, preco);
        this.#tamanhoArquivo = tamanhoArquivo;
    }
    calcularDesconto() {
    return this.preco * 0.20;
    }
    calcularPrecoFinal() {
    return this.precoComDesconto(); 
    }
}

class Carrinho {
    #produtos = [];
    adicionarProduto(produto) {
        if (Validador.validarPreco(produto.preco)) {
            this.#produtos.push(produto);
            console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
        } else {
            console.log(`Preço inválido para o produto ${produto.nome}.`);
        }
    }
    removerProduto(id) {
        this.#produtos = this.#produtos.filter(produto => produto.id !== id);
        console.log(`Produto com ID ${id} removido do carrinho.`);
    }
    somarTotal() {
        return this.#produtos.reduce((total, produto) => total + produto.calcularPrecoFinal(), 0);
    }
}

const carrinho = new Carrinho();
const produtoFisico = new ProdutoFisico(1, "Livro", 50, 2);
const produtoDigital = new ProdutoDigital(2, "E-book", 30, 5);
const produtoFisico2 = new ProdutoFisico(3, "Pneu", 100, 4);
const produtoInvalido = new ProdutoDigital(4, "Software", -10, 1);

carrinho.adicionarProduto(produtoFisico);
carrinho.adicionarProduto(produtoDigital);
carrinho.adicionarProduto(produtoFisico2);
carrinho.adicionarProduto(produtoInvalido);

console.log(`Total do carrinho: R$ ${carrinho.somarTotal().toFixed(2)}`);
carrinho.removerProduto(1);
console.log(`Total do carrinho após remoção: R$ ${carrinho.somarTotal().toFixed(2)}`);