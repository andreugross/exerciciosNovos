const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => {
    const bookFound = books.find((book) => book.author.birthYear === 1947);
    return bookFound.author.name;
};

//2 - Retorne o nome do livro de menor nome.
function smallerName() {
    let nameBook;

    books.forEach((book) => {
        /* if (nameBook === undefined || book.name.length < nameBook.length) {
            nameBook = book.name;
        } */
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    });
    //Variável nameBook que receberá o valor do menor nome;
    return nameBook;
};

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getBook26Letters = () => {
    const letterNameBook = books.find((book) => book.name.length === 26);
    return letterNameBook.name;
};

//4 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = () => {
    books.sort(function (a, b) {
        if (a.releaseYear < b.releaseYear) return -1;
        if (a.releaseYear > b.releaseYear) return 1;
        return 0;
    });
};
