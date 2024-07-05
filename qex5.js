const booksByCategory = [
    {
    category: "Riqueza",
    books: [
    {
    title: "Os segredos da mente milionária",
    author: "T. Harv Eker",
    },
    {
    title: "O homem mais rico da Babilônia",
    author: "George S. Clason",
    },
    {
    title: "Pai rico, pai pobre",
    author: "Robert T. Kiyosaki e Sharon L. Lechter",
    },
    ],
    },
    {
    category: "Inteligência Emocional",
    books: [
    {
    title: "Você é Insubstituível",
    author: "Augusto Cury",
    },
    {
    title: "Ansiedade – Como enfrentar o mal do século",
    author: "Augusto Cury",
    
    },
    {
    title: "Os 7 hábitos das pessoas altamente eficazes",
    author: "Stephen R. Covey"
    }
    ]
    }
    ];

console.log("Categorias = "+booksByCategory.length)

for(categoria of booksByCategory) {
    console.log(categoria.category+" = "+categoria.books.length)
}

var autores = []
for(categoria of booksByCategory) {
    for(var livro of categoria.books) {
        var controle = false
        for(var autor of autores) {
            if(livro.author == autor) {
                controle = true
            }
        }
        if(controle == false) {
            autores.push(livro.author)
        }
    }     
}
console.log("Autores = "+autores.length)

for(categoria of booksByCategory) {
    for(var livro of categoria.books)
        if(livro.author == "Augusto Cury") {
            console.log(livro)
        }
}

function procurarLivros(autor) {
    for(categoria of booksByCategory) {
        for(var livro of categoria.books)
            if(livro.author == autor) {
                console.log(livro)
            }
    }
}

var autor = prompt("Nome do autor:")
procurarLivros(autor)