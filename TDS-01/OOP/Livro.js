class Livro{
    constructor(titulo, autor, ano, editora){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
    }  

    ler(){
        console.log(`Lendo o livro "${this.titulo}" de ${this.autor}`);
    }   

    progresso(paginasLidas){
        console.log(`Você leu ${paginasLidas} páginas do livro "${this.titulo}"`);
    }

}

class Biblioteca{
    constructor(nome){
        this.nome = nome;
        this.livros = [];
    }   
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Allen & Unwin");
livro1.ler();
livro1.progresso(100);

const livro2 = new Livro("1984", "George Orwell", 1949, "Secker & Warburg");
livro2.ler();
livro2.progresso(50);

const livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Reynal & Hitchcock");
livro3.ler();
livro3.progresso(30);

//const biblioteca = new Biblioteca("Biblioteca Central");
//biblioteca.livros.push(livro1);
//console.log(`A biblioteca "${biblioteca.nome}" possui o livro "${biblioteca.livros[0].titulo}" de ${biblioteca.livros[0].autor}`); 

const biblioteca2 = new Biblioteca("Biblioteca Municipal");
biblioteca2.livros.push(livro1);
biblioteca2.livros.push(livro2);
biblioteca2.livros.push(livro3);
console.log(`A biblioteca "${biblioteca2.nome}" possui os livros:`);
biblioteca2.livros.forEach(livro => {
    console.log(`- "${livro.titulo}" de ${livro.autor}`);
});