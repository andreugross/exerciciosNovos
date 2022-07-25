const books = require("./libraries");

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, //
//e false, caso contrário.


const expectedResult = true;

function someBookWasReleaseOnThe80s() {
    const release = books.some((book)=> {
        return book.releaseYear >= 1980  && book.releaseYear <= 1989;
     })
     return release ;
     }
     console.log(someBookWasReleaseOnThe80s(books))
       
