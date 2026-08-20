//entendendo prototipos na pratica

function Pessoa(nome){
    this.nome = nome;
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`);
}

const joao = new Pessoa("João");
console.log(joao.__proto__=== Pessoa.prototype); //true