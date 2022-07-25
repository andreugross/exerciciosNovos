const books = require("./libraries");

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

console.log(smallerName(books));