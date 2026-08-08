//criando a classe carro
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; //atributo com valor padrão
    }

    acelerar(incremento) { //método
        this.velocidade += incremento;
        console.log(`O carro ${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h`);
    }   
    frear() { //método
        this.velocidade = 0;
        console.log(`O carro ${this.marca} ${this.modelo} parou.`);
    }

}

//instanciar um objeto

const meuCarro = new Carro("Toyota", "Corolla", 2022);
meuCarro.acelerar(50); // O carro Toyota Corolla acelerou para 50 km/h
meuCarro.frear(); // O carro Toyota Corolla parou.