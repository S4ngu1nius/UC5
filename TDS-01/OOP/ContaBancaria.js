class ContaBancaria{
    #saldo;         //campo privado
    #senha;         //senha privada
    
    constructor(titular, saldoInicial, senha){
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.#senha = senha;
    }

    //Getter para leitura controlada
    get saldo(){
        return `R$ ${this.#saldo}`;
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
        }  
    }

    sacar(valor, senha){
        if(senha !== this.#senha){
            console.log("Senha incorreta! Saque não realizado.");
            return;
        }
        if(valor > this.#saldo){
            console.log("Saldo insuficiente! Saque não realizado.");
            return;
        }

        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso!`);

    }
}

const minhaConta = new ContaBancaria("João", 1000, 1234);
console.log(minhaConta.saldo); // Acesso ao saldo através do getter

minhaConta.depositar(500);
console.log(minhaConta.saldo); // Acesso ao saldo através do getter

minhaConta.sacar(200, 1234);
console.log(minhaConta.saldo); // Acesso ao saldo através do getter