const libraries = require("./libraries");

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getBook26Letters = () => {
    const letterNameBook = books.find((book) => book.name.length === 26);
    return letterNameBook.name;
};