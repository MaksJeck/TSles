import { Book } from "./entities/Book";
import { Notepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { Calendar } from "./entities/Calendar";
import { MyMap } from "./common/MyMap"
import { toUpperCase } from "./string-helper.js";
import { IBook, IOptions, search } from "google-books-search";
import { Logger } from "./common/Logger";

// import { IBook } from "./types/Book";

// const showData = (entity: unknown): void => {
//     if(entity instanceof Book) {
//         console.log(`Книга - ${entity.title} - ${entity.author} - ${getPrice(entity)}`)
//     } else if (entity instanceof Notepad) {
//       console.log(`Блокнот - ${getPrice(entity)}`)  
//     }    
// };

// const getPrice = (entity: Book | Notepad): string => {
//     return entity.price ? entity.price.toString() : "не продается"
// };

const getFrom = <T extends MyMap<any>>(obj: Record<string, T>, title: string): T | undefined => {
    // const book = array.find(book => book.title.toLowerCase() === title.toLowerCase());
   
    return obj[title];
};

// const searchBooks = (query: string, options: IOptions = {}): Promise<IBook[]> =>
//     new Promise((resolve, reject) => {
//         search(query, options, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         })
//     })

const main = async () => {
    const book = new Book("title 1", "author 1", "fantasy", 5);
    // book.reviews.push({
    //     author: "Max",
    //     text: "text",
    //     score: 4
    // });

    book.addReview({
        author: "Max",
        text: "text",
        score: 4
    });
    book.addReview({
        author: "Lexa",
        text: "text",
        score: 1
    });

    // console.log(book.title, book.reviews, book.score);
    // book.getInfo();
    // Product.getInfo(book);
    Book.getInfo(book);
    // Logger.info(book.title);
    // Logger.error("some error");

    // try {
    //     const books = await searchBooks("Harry Poter", {
    //         limit: 1,
    //     });
    //     console.log(books);
    // } catch (error) {

    // }
    // console.log(toUpperCase("lfrkferf"));
    // console.log(1);


    // const map = new MyMap<string, Product>();

    // console.log(1, map.getAll());

    // map.set("title 1", new Book("title 1", "author 1", "fantasy", 5));
    // console.log(2, map.getAll());
    // map.set("title 2", new Notepad("title 2"));
    // console.log(3, map.getAll());
    // map.remove("title 2");
    // console.log(4, map.getAll());
    // map.set("title 2", new Notepad("title 2"));
    // console.log(5, map.getAll());
    // map.clear();
    // console.log(6, map.getAll());


    // const book: IBook = {
    //     title: "Заголовок",
    //     author: {
    //         name: "Ivan",
    //         age: 30
    //     },
    //     price: 5
    // }
    //--------------------------------------------------------
    // const books = {
    //     "title 1": new Book("title 1", "author 1", "fantasy", 5),
    //     "title 2": new Book("title 2", "author 2", "science")
    // };
    // const notepads = {
    //     "title 1": new Notepad("title 1", 5),
    //     "title 2": new Notepad("title 2")
    // };

    // const calendars = {
    //     "title 1": new Calendar("title 1", "Calendar 1"),
    //     "title 2": new Calendar("title 2", "Calendar 2", 3)
    // };

    // console.log(getFrom<Book>(books, "title 1"));
    // console.log(getFrom<Notepad>(notepads, "title 3"));
    // console.log(getFrom<Calendar>(calendars, "title 2"));
    //---------------------------------------------------

    // books.forEach((book) => showData(book));
    // notepads.forEach((notepad) => showData(notepad));    
};

main();