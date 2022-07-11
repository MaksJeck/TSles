import { Book } from "./entities/Book";

const main = () => {
    const books = [
        new Book("title 1", "author 1", 5),
        new Book("title 2", "author 2")
    ];

    books.forEach((book) => console.log(book.title, book.canBuy()))
};

main();