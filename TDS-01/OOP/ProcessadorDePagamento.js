class ProcessadorDePagamento {
    //campos privados (só acessiveis dentro da classe)
    #saldo = 1000; //saldo inicial
    #limite = 500; //limite de pagamento

    //metodo publico: única interface que o cliente conhece

    processar(valor, cartao){
        if(!this.#validarCartao(cartao)) return "Cartão inválido! Pagamento não realizado.";
        if(!this.#verificarSaldo(valor)) return "Saldo insuficiente! Pagamento não realizado.";
        //if(!this.#verificarLimite(valor)) return "Valor excede o limite de pagamento! Pagamento não realizado.";

        this.#registrarTransacao(valor);
        this.#enviarRecibo(valor);
        return "Pagamento realizado com sucesso!";
    }

    //passos internos ocultos
    #validarCartao(cartao){
        console.log(`Validando o cartão...`);
        return cartao?.numero && cartao?.validade > new Date();
    }

    #verificarSaldo(valor){
        console.log(`Verificando saldo...`);
        return valor <= this.#saldo + this.#limite;
    }

    #registrarTransacao(valor){
        console.log(`Registrando transação...`);
        this.#saldo -= valor;
    }

    #enviarRecibo(valor){
        console.log(`Recibo enviado para o cliente: R$ ${valor.toFixed(2)}...`);
    }

}

//exemplo de uso

const processador = new ProcessadorDePagamento();
const cartao = {numero: "1234 45678", validade: new Date("2026-12-31")};

console.log(processador.processar(200, cartao)); // Pagamento realizado com sucesso!
