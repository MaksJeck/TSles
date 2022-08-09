"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./entities/Book");
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
const getFrom = (obj, title) => {
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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const book = new Book_1.Book("title 1", "author 1", "fantasy", 5);
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
    Book_1.Book.getInfo(book);
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
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBdUM7QUFTdkMsd0NBQXdDO0FBRXhDLGdEQUFnRDtBQUNoRCxtQ0FBbUM7QUFDbkMsMEZBQTBGO0FBQzFGLDhDQUE4QztBQUM5Qyx1REFBdUQ7QUFDdkQsWUFBWTtBQUNaLEtBQUs7QUFFTCx5REFBeUQ7QUFDekQscUVBQXFFO0FBQ3JFLEtBQUs7QUFFTCxNQUFNLE9BQU8sR0FBRyxDQUF1QixHQUFzQixFQUFFLEtBQWEsRUFBaUIsRUFBRTtJQUMzRixxRkFBcUY7SUFFckYsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsbUZBQW1GO0FBQ25GLHlDQUF5QztBQUN6QyxzREFBc0Q7QUFDdEQsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyx1QkFBdUI7QUFDdkIsbUNBQW1DO0FBQ25DLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsU0FBUztBQUVULE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsTUFBTTtJQUVOLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDWCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ1gsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBRUgscURBQXFEO0lBQ3JELGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBRTlCLFFBQVE7SUFDUix1REFBdUQ7SUFDdkQsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBRXBCLElBQUk7SUFDSix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBR2xCLDRDQUE0QztJQUU1QyxnQ0FBZ0M7SUFFaEMscUVBQXFFO0lBQ3JFLGdDQUFnQztJQUNoQyw4Q0FBOEM7SUFDOUMsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsOENBQThDO0lBQzlDLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0NBQWdDO0lBR2hDLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixJQUFJO0lBQ0osMERBQTBEO0lBQzFELGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUsNERBQTREO0lBQzVELEtBQUs7SUFDTCxxQkFBcUI7SUFDckIsNENBQTRDO0lBQzVDLHdDQUF3QztJQUN4QyxLQUFLO0lBRUwsc0JBQXNCO0lBQ3RCLHdEQUF3RDtJQUN4RCwwREFBMEQ7SUFDMUQsS0FBSztJQUVMLGdEQUFnRDtJQUNoRCxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELHFEQUFxRDtJQUVyRCwyQ0FBMkM7SUFDM0Msd0RBQXdEO0FBQzVELENBQUMsQ0FBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vZW50aXRpZXMvQm9va1wiO1xyXG5pbXBvcnQgeyBOb3RlcGFkIH0gZnJvbSBcIi4vZW50aXRpZXMvTm90ZXBhZFwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vZW50aXRpZXMvUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gXCIuL2VudGl0aWVzL0NhbGVuZGFyXCI7XHJcbmltcG9ydCB7IE15TWFwIH0gZnJvbSBcIi4vY29tbW9uL015TWFwXCJcclxuaW1wb3J0IHsgdG9VcHBlckNhc2UgfSBmcm9tIFwiLi9zdHJpbmctaGVscGVyLmpzXCI7XHJcbmltcG9ydCB7IElCb29rLCBJT3B0aW9ucywgc2VhcmNoIH0gZnJvbSBcImdvb2dsZS1ib29rcy1zZWFyY2hcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vY29tbW9uL0xvZ2dlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgSUJvb2sgfSBmcm9tIFwiLi90eXBlcy9Cb29rXCI7XHJcblxyXG4vLyBjb25zdCBzaG93RGF0YSA9IChlbnRpdHk6IHVua25vd24pOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKGVudGl0eSBpbnN0YW5jZW9mIEJvb2spIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhg0JrQvdC40LPQsCAtICR7ZW50aXR5LnRpdGxlfSAtICR7ZW50aXR5LmF1dGhvcn0gLSAke2dldFByaWNlKGVudGl0eSl9YClcclxuLy8gICAgIH0gZWxzZSBpZiAoZW50aXR5IGluc3RhbmNlb2YgTm90ZXBhZCkge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhg0JHQu9C+0LrQvdC+0YIgLSAke2dldFByaWNlKGVudGl0eSl9YCkgIFxyXG4vLyAgICAgfSAgICBcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGdldFByaWNlID0gKGVudGl0eTogQm9vayB8IE5vdGVwYWQpOiBzdHJpbmcgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGVudGl0eS5wcmljZSA/IGVudGl0eS5wcmljZS50b1N0cmluZygpIDogXCLQvdC1INC/0YDQvtC00LDQtdGC0YHRj1wiXHJcbi8vIH07XHJcblxyXG5jb25zdCBnZXRGcm9tID0gPFQgZXh0ZW5kcyBNeU1hcDxhbnk+PihvYmo6IFJlY29yZDxzdHJpbmcsIFQ+LCB0aXRsZTogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgICAvLyBjb25zdCBib29rID0gYXJyYXkuZmluZChib29rID0+IGJvb2sudGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGl0bGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgIFxyXG4gICAgcmV0dXJuIG9ialt0aXRsZV07XHJcbn07XHJcblxyXG4vLyBjb25zdCBzZWFyY2hCb29rcyA9IChxdWVyeTogc3RyaW5nLCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJQm9va1tdPiA9PlxyXG4vLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICAgIHNlYXJjaChxdWVyeSwgb3B0aW9ucywgKGVycm9yLCByZXN1bHQpID0+IHtcclxuLy8gICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH0pXHJcblxyXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYm9vayA9IG5ldyBCb29rKFwidGl0bGUgMVwiLCBcImF1dGhvciAxXCIsIFwiZmFudGFzeVwiLCA1KTtcclxuICAgIC8vIGJvb2sucmV2aWV3cy5wdXNoKHtcclxuICAgIC8vICAgICBhdXRob3I6IFwiTWF4XCIsXHJcbiAgICAvLyAgICAgdGV4dDogXCJ0ZXh0XCIsXHJcbiAgICAvLyAgICAgc2NvcmU6IDRcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGJvb2suYWRkUmV2aWV3KHtcclxuICAgICAgICBhdXRob3I6IFwiTWF4XCIsXHJcbiAgICAgICAgdGV4dDogXCJ0ZXh0XCIsXHJcbiAgICAgICAgc2NvcmU6IDRcclxuICAgIH0pO1xyXG4gICAgYm9vay5hZGRSZXZpZXcoe1xyXG4gICAgICAgIGF1dGhvcjogXCJMZXhhXCIsXHJcbiAgICAgICAgdGV4dDogXCJ0ZXh0XCIsXHJcbiAgICAgICAgc2NvcmU6IDFcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGJvb2sudGl0bGUsIGJvb2sucmV2aWV3cywgYm9vay5zY29yZSk7XHJcbiAgICAvLyBib29rLmdldEluZm8oKTtcclxuICAgIC8vIFByb2R1Y3QuZ2V0SW5mbyhib29rKTtcclxuICAgIEJvb2suZ2V0SW5mbyhib29rKTtcclxuICAgIC8vIExvZ2dlci5pbmZvKGJvb2sudGl0bGUpO1xyXG4gICAgLy8gTG9nZ2VyLmVycm9yKFwic29tZSBlcnJvclwiKTtcclxuXHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgc2VhcmNoQm9va3MoXCJIYXJyeSBQb3RlclwiLCB7XHJcbiAgICAvLyAgICAgICAgIGxpbWl0OiAxLFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2codG9VcHBlckNhc2UoXCJsZnJrZmVyZlwiKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygxKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgbWFwID0gbmV3IE15TWFwPHN0cmluZywgUHJvZHVjdD4oKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygxLCBtYXAuZ2V0QWxsKCkpO1xyXG5cclxuICAgIC8vIG1hcC5zZXQoXCJ0aXRsZSAxXCIsIG5ldyBCb29rKFwidGl0bGUgMVwiLCBcImF1dGhvciAxXCIsIFwiZmFudGFzeVwiLCA1KSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygyLCBtYXAuZ2V0QWxsKCkpO1xyXG4gICAgLy8gbWFwLnNldChcInRpdGxlIDJcIiwgbmV3IE5vdGVwYWQoXCJ0aXRsZSAyXCIpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKDMsIG1hcC5nZXRBbGwoKSk7XHJcbiAgICAvLyBtYXAucmVtb3ZlKFwidGl0bGUgMlwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKDQsIG1hcC5nZXRBbGwoKSk7XHJcbiAgICAvLyBtYXAuc2V0KFwidGl0bGUgMlwiLCBuZXcgTm90ZXBhZChcInRpdGxlIDJcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2coNSwgbWFwLmdldEFsbCgpKTtcclxuICAgIC8vIG1hcC5jbGVhcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coNiwgbWFwLmdldEFsbCgpKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgYm9vazogSUJvb2sgPSB7XHJcbiAgICAvLyAgICAgdGl0bGU6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXHJcbiAgICAvLyAgICAgYXV0aG9yOiB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiSXZhblwiLFxyXG4gICAgLy8gICAgICAgICBhZ2U6IDMwXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBwcmljZTogNVxyXG4gICAgLy8gfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gY29uc3QgYm9va3MgPSB7XHJcbiAgICAvLyAgICAgXCJ0aXRsZSAxXCI6IG5ldyBCb29rKFwidGl0bGUgMVwiLCBcImF1dGhvciAxXCIsIFwiZmFudGFzeVwiLCA1KSxcclxuICAgIC8vICAgICBcInRpdGxlIDJcIjogbmV3IEJvb2soXCJ0aXRsZSAyXCIsIFwiYXV0aG9yIDJcIiwgXCJzY2llbmNlXCIpXHJcbiAgICAvLyB9O1xyXG4gICAgLy8gY29uc3Qgbm90ZXBhZHMgPSB7XHJcbiAgICAvLyAgICAgXCJ0aXRsZSAxXCI6IG5ldyBOb3RlcGFkKFwidGl0bGUgMVwiLCA1KSxcclxuICAgIC8vICAgICBcInRpdGxlIDJcIjogbmV3IE5vdGVwYWQoXCJ0aXRsZSAyXCIpXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGNhbGVuZGFycyA9IHtcclxuICAgIC8vICAgICBcInRpdGxlIDFcIjogbmV3IENhbGVuZGFyKFwidGl0bGUgMVwiLCBcIkNhbGVuZGFyIDFcIiksXHJcbiAgICAvLyAgICAgXCJ0aXRsZSAyXCI6IG5ldyBDYWxlbmRhcihcInRpdGxlIDJcIiwgXCJDYWxlbmRhciAyXCIsIDMpXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEZyb208Qm9vaz4oYm9va3MsIFwidGl0bGUgMVwiKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRGcm9tPE5vdGVwYWQ+KG5vdGVwYWRzLCBcInRpdGxlIDNcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0RnJvbTxDYWxlbmRhcj4oY2FsZW5kYXJzLCBcInRpdGxlIDJcIikpO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBib29rcy5mb3JFYWNoKChib29rKSA9PiBzaG93RGF0YShib29rKSk7XHJcbiAgICAvLyBub3RlcGFkcy5mb3JFYWNoKChub3RlcGFkKSA9PiBzaG93RGF0YShub3RlcGFkKSk7ICAgIFxyXG59O1xyXG5cclxubWFpbigpOyJdfQ==