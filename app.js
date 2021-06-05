const livros = require("./database")


livros.sort((a,b)=> a.paginas - b.paginas)

const read = require("readline-sync")

const verLivrosPorCategoria = read.question("Você deseja encontrar um livro por categoria?(S/N)")

if(verLivrosPorCategoria.toLocaleUpperCase() === "S") {
    console.log("Essas são as opções disponíveis:")
    console.log("Administração/", "Autobiografia/", "Matemática/", "Suspense/", "Tecnologia/", "Romance/", "Política/")
 
    const qualCategoria = read.question("Qual categoria você escolhe?")

    const categoria = livros.filter(livros => livros.categoria === qualCategoria)

    console.table(categoria)
} else {

    const recomenda = livros.filter(livros =>livros.recomenda === true && livros.leu === true)
    console.log("Recomendações de livros:")
    console.table(recomenda)

    const listaDeDesejos = livros.filter(livros => livros.recomenda === true && livros.leu === false)
    console.log("Lista de desejos:")
    console.table(listaDeDesejos)

    console.table("Esses são todos os livros disponíveis:")
    console.table(livros)

}





