import { Book } from "./entities/Book";
import { Notepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { Calendar } from "./entities/Calendar";
import { MyMap } from "./common/MyMap"
import { toUpperCase } from "./string-helper.js";
import { IBook, IOptions, search } from "google-books-search";
import { Logger } from "./common/Logger";


const basket: MyMap[] = [];

const getFrom = <T extends MyMap<string, any>>(obj: Record<string, T>, title: string): T | undefined => { //Lesson 3
    // const book = array.find(book => book.title.toLowerCase() === title.toLowerCase());

    return obj[title];
};
console.log(getFrom("что тут нужно написать, не понимаю", "text"));

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
    // const book = new Book("title 1", "author 1", "fantasy", 5);
    // // book.reviews.push({
    // //     author: "Max",
    // //     text: "text",
    // //     score: 4
    // // });

    // book.addReview({
    //     author: "Max",
    //     text: "text",
    //     score: 4
    // });
    // book.addReview({
    //     author: "Lexa",
    //     text: "text",
    //     score: 1
    // });
    // Book.getInfo(book);

    //------------ правило "alwaysStrict" добавляет во все файлы *.js "use strict"
    // "use strict"
    // user = "Alex";
    // console.log(user);    
    //------------

    //------------ правило "noImplicitAny"
    // Запрет неявной типизации Any   
    //------------

    //------------ правило "strictNullChecks"
    // Делает невозможным использование undefined и null вместо других типов
    //------------

    //------------ правило "strictPropertyInitialization"
    // Cледит чтобы свойства, объявленные в классе были проинициализированы 
    // во время их объявления или в конструкторе
    //------------

    //------------ правило "strictFunctionTypes"
    //    interface RemoveBookFromFavorites {
    //    // id может быть строкой или числом
    //    (id: string | number): Promise<string | number>
    //    }
    //    // но здесь указывается только string
    //    // при этом ошибок не возникает
    //    const removeBook: RemoveBookFromFavorites = (id: string) => {
    //    // здесь должна быть реализация
    //    return Promise.resolve(id)
    //    }
    //------------

    //------------ правило "strictBindCallApply"
    // const Person = {
    //     age: 40,
    //     getAge: function (num: number) {
    //         return this.age * num;
    //     },
    // };
    // const Andrey = {
    //     age: 21,
    // };
    // console.log(Person.getAge.call(Andrey, "text"));    
    //------------

    //------------ правило "noImlicitThis"
    // Правило для компилятора, для проверки this
    //------------

    //------------ правило "useUnknownInCatchVariables"
    // try {
    //     throw "error"
    // } catch (error: unknown) {
    //     if (error instanceof Error) {
    //         console.log(error.message);
    //     }
    //     if (typeof error === "string") {
    //         console.log(error.toUpperCase());
    //     }
    // };
    //------------

    //------------ правило "noPropertyAccessFromIndexSignature"
    //    interface SomeStructure {
    //    // точно известные свойства
    //    id: string
    //    name: string
    //    // произвольные параметры, которые могут быть,
    //    // а могут не быть
    //    [key: string]: string
    //    }
    //    Promise.resolve<SomeStructure>(
    //    {
    //    id: '5',
    //    name: 'Harry Potter',
    //    author: 'J. K. Rowling'
    //    }
    //    ).then((book) => {
    //    // name точно будет существовать, а author и genre не обязательно
    //    console.log(book.name, book.author.toUpperCase(), book.genre.toUpperCase())
    //    });
    //------------

    //------------ правило "noUncheckedIndexedAccess"
    // дополняет работу предыдущего и помогает обнаружить ошибки
    //------------

    //------------ правило "noImplicitReturns"
    // const getNumber = (num: number | string): number => {
    //     if (typeof num === "number") {
    //         return num;
    //     };
    // };
    //------------

    //------------ правило "noFalltroughCasesInSwitch"
    // function getGenreIcon(num: 1 | 2): number {
    // let number: number
    // switch(num) {
    // case 1:
    //     number = 1;
    //     break;
    // case 2:
    //     number = 2;
    //     break;
    // default:
    //     number = 3;
    // }
    // return number;
    // };
    // console.log(getGenreIcon(2));    
    //------------      
};

main();