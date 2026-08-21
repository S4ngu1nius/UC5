class LampadaInteligente {
    #brilho = 0 <= 100; // campo privado para brilho
    #estado = false; // campo privado para estado (ligada/desligada)

    constructor(brilho, estado){
        this.#brilho = brilho;
        this.#estado = estado;
    }

    get brilho() {
        return this.#brilho;
    }

    set brilho(novoBrilho) {
        if (novoBrilho < 0 || novoBrilho > 100) {
            console.log("O brilho deve estar entre 0 e 100.");
            return false;
        } else {
            this.#brilho = novoBrilho;
            console.log(`Brilho ajustado para ${this.#brilho}.`);
        }
    }

    get estado() {
        return this.#estado;
    }

    set estado(novoEstado) {
        if (typeof novoEstado !== "boolean") {
            console.log("O estado deve ser verdadeiro (ligado) ou falso (desligado).");
            return false;
        } else {
            this.#estado = novoEstado;
            console.log(`A lâmpada está agora ${this.#estado ? "ligada" : "desligada"}.`);
        }
    }

    //ligar() {
    //    this.#estado = true;
    //    console.log("A lâmpada foi ligada.");
    //}

}

const lampada = new LampadaInteligente(50, true);
console.log(`Brilho atual: ${lampada.brilho}`);
console.log(`Estado atual: ${lampada.estado ? "ligada" : "desligada"}`);

lampada.brilho = 80;
