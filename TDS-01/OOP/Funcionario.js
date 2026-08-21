class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    exibirDados(){
        console.log(`Nome: ${this.nome} | Salário: R$ ${this.salario}`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        super(nome, salario);   //chamando o construtor da classe pai(Funcionario)
        this.departamento = departamento;
    }

    //Metodo especifico
    gerenciaEquipe(){
        console.log(`${this.nome} está gerenciando a equipe do departamento ${this.departamento}`);
    }
}

const funcionarioComum = new Funcionario("Vitor", 5000);
const funcionarioGerente = new Gerente("Ana", 8000, "TI");

funcionarioComum.exibirDados();