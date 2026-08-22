class Animal {
    emitirSom() {
        console.log("Som do animal");
    }
}

class Cachorro extends Animal {
    //Sobrescrevendo o método emitirSom da classe pai (Polimorfismo)
    emitirSom() {
        console.log("Au Au");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau");
    }
}

class CaluladoraMatematica {
    //Método estático: pode ser chamado sem instanciar a classe
    static somar(a, b) {
        return a + b;
    }
}

const novoAnimal = new Animal();
const Rex = new Cachorro();
const Garfield = new Gato();

novoAnimal.emitirSom(); //Som do animal
Rex.emitirSom(); //Au Au
Garfield.emitirSom(); //Miau

console.log(CaluladoraMatematica.somar(5, 5)); //Não precisa do new para instanciar a classe, pois o método é estático