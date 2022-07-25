const books = require("./libraries");

//4 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = () => {
    const orderBooks = books.sort(function (a, b) {
        if (a.releaseYear < b.releaseYear) {
            return -1;
        } else {
            return true;
        }
    });
    orderBooks.reverse();
    return orderBooks;
};

console.log(booksOrderedByReleaseYearDesc(books));
