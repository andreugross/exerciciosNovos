const libraries = require("./libraries");

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => {
    const bookFound = books.find((book) => book.author.birthYear === 1947);
    return bookFound.author.name;
};