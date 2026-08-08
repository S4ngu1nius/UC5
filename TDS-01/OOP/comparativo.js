//abordagem procedural (dados e funções separados)
// os dados ficam em um objeto simples (estrutura)

const contaProcedural = { titular: "Ana", saldo: 100 };

//a função é isolada e recebe os dados como argumento
function depositar(conta, valor){
    conta.saldo += valor;
}

//execução: passa o dado para a função
depositar(contaprocedural, 50);
console.log(`Procedural: ${contaProcedural.titular} tem R$${contaProcedural.saldo}`); // 150

//----------------------------------------------------------------------------------------

// abordagem orientada a objetos (dados e comportamentos juntos)
// a classe (molde) encapsula o estado (atributos) e os comportamentos (métodos)

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular; //atributo
        this.saldo = saldo;     //atributo
    }

    depositar(valor) {          //metódo
        this.saldo += valor;    
    }

}

//execução: instancia o objeto e chama o método
const contaPOO = new ContaBancaria("Ana", 100);
contaPOO.depositar(50);

console.log(`POO: ${contaPOO.titular} tem R$${contaPOO.saldo}`); // 150