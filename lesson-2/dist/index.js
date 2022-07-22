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
const google_books_search_1 = require("google-books-search");
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
const searchBooks = (query, options = {}) => new Promise((resolve, reject) => {
    (0, google_books_search_1.search)(query, options, (error, result) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(result);
        }
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield searchBooks("Harry Poter", {
            limit: 1,
        });
        console.log(books);
    }
    catch (error) {
    }
    // console.log(toUpperCase("lfrkferf"));
    console.log(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQSw2REFBOEQ7QUFFOUQsd0NBQXdDO0FBRXhDLGdEQUFnRDtBQUNoRCxtQ0FBbUM7QUFDbkMsMEZBQTBGO0FBQzFGLDhDQUE4QztBQUM5Qyx1REFBdUQ7QUFDdkQsWUFBWTtBQUNaLEtBQUs7QUFFTCx5REFBeUQ7QUFDekQscUVBQXFFO0FBQ3JFLEtBQUs7QUFFTCxNQUFNLE9BQU8sR0FBRyxDQUF5QixHQUFzQixFQUFFLEtBQWEsRUFBaUIsRUFBRTtJQUM3RixxRkFBcUY7SUFDckYsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsVUFBb0IsRUFBRSxFQUFvQixFQUFFLENBQzVFLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzVCLElBQUEsNEJBQU0sRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLElBQUksS0FBSyxFQUFFO1lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkI7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBRU4sTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBRXBCLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLEVBQUU7WUFDM0MsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0lBQUMsT0FBTyxLQUFLLEVBQUU7S0FFZjtJQUNELHdDQUF3QztJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBR2YsNENBQTRDO0lBRTVDLGdDQUFnQztJQUVoQyxxRUFBcUU7SUFDckUsZ0NBQWdDO0lBQ2hDLDhDQUE4QztJQUM5QyxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyw4Q0FBOEM7SUFDOUMsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQ0FBZ0M7SUFHaEMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLElBQUk7SUFDSiwwREFBMEQ7SUFDMUQsa0JBQWtCO0lBQ2xCLGdFQUFnRTtJQUNoRSw0REFBNEQ7SUFDNUQsS0FBSztJQUNMLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsd0NBQXdDO0lBQ3hDLEtBQUs7SUFFTCxzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELDBEQUEwRDtJQUMxRCxLQUFLO0lBRUwsZ0RBQWdEO0lBQ2hELHNEQUFzRDtJQUN0RCx3REFBd0Q7SUFDeEQscURBQXFEO0lBRXJELDJDQUEyQztJQUMzQyx3REFBd0Q7QUFDNUQsQ0FBQyxDQUFBLENBQUM7QUFFRixJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2sgfSBmcm9tIFwiLi9lbnRpdGllcy9Cb29rXCI7XHJcbmltcG9ydCB7IE5vdGVwYWQgfSBmcm9tIFwiLi9lbnRpdGllcy9Ob3RlcGFkXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9lbnRpdGllcy9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSBcIi4vZW50aXRpZXMvQ2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgTXlNYXAgfSBmcm9tIFwiLi9jb21tb24vTXlNYXBcIlxyXG5pbXBvcnQgeyB0b1VwcGVyQ2FzZSB9IGZyb20gXCIuL3N0cmluZy1oZWxwZXIuanNcIjtcclxuaW1wb3J0IHsgSUJvb2ssIElPcHRpb25zLCBzZWFyY2ggfSBmcm9tIFwiZ29vZ2xlLWJvb2tzLXNlYXJjaFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgSUJvb2sgfSBmcm9tIFwiLi90eXBlcy9Cb29rXCI7XHJcblxyXG4vLyBjb25zdCBzaG93RGF0YSA9IChlbnRpdHk6IHVua25vd24pOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKGVudGl0eSBpbnN0YW5jZW9mIEJvb2spIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhg0JrQvdC40LPQsCAtICR7ZW50aXR5LnRpdGxlfSAtICR7ZW50aXR5LmF1dGhvcn0gLSAke2dldFByaWNlKGVudGl0eSl9YClcclxuLy8gICAgIH0gZWxzZSBpZiAoZW50aXR5IGluc3RhbmNlb2YgTm90ZXBhZCkge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhg0JHQu9C+0LrQvdC+0YIgLSAke2dldFByaWNlKGVudGl0eSl9YCkgIFxyXG4vLyAgICAgfSAgICBcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGdldFByaWNlID0gKGVudGl0eTogQm9vayB8IE5vdGVwYWQpOiBzdHJpbmcgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGVudGl0eS5wcmljZSA/IGVudGl0eS5wcmljZS50b1N0cmluZygpIDogXCLQvdC1INC/0YDQvtC00LDQtdGC0YHRj1wiXHJcbi8vIH07XHJcblxyXG5jb25zdCBnZXRGcm9tID0gPFQgZXh0ZW5kcyBQcm9kdWN0PGFueT4+KG9iajogUmVjb3JkPHN0cmluZywgVD4sIHRpdGxlOiBzdHJpbmcpOiBUIHwgdW5kZWZpbmVkID0+IHtcclxuICAgIC8vIGNvbnN0IGJvb2sgPSBhcnJheS5maW5kKGJvb2sgPT4gYm9vay50aXRsZS50b0xvd2VyQ2FzZSgpID09PSB0aXRsZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHJldHVybiBvYmpbdGl0bGVdO1xyXG59O1xyXG5cclxuY29uc3Qgc2VhcmNoQm9va3MgPSAocXVlcnk6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IFByb21pc2U8SUJvb2tbXT4gPT5cclxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzZWFyY2gocXVlcnksIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgc2VhcmNoQm9va3MoXCJIYXJyeSBQb3RlclwiLCB7XHJcbiAgICAgICAgICAgIGxpbWl0OiAxLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvb2tzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codG9VcHBlckNhc2UoXCJsZnJrZmVyZlwiKSk7XHJcbiAgICBjb25zb2xlLmxvZygxKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgbWFwID0gbmV3IE15TWFwPHN0cmluZywgUHJvZHVjdD4oKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygxLCBtYXAuZ2V0QWxsKCkpO1xyXG5cclxuICAgIC8vIG1hcC5zZXQoXCJ0aXRsZSAxXCIsIG5ldyBCb29rKFwidGl0bGUgMVwiLCBcImF1dGhvciAxXCIsIFwiZmFudGFzeVwiLCA1KSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygyLCBtYXAuZ2V0QWxsKCkpO1xyXG4gICAgLy8gbWFwLnNldChcInRpdGxlIDJcIiwgbmV3IE5vdGVwYWQoXCJ0aXRsZSAyXCIpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKDMsIG1hcC5nZXRBbGwoKSk7XHJcbiAgICAvLyBtYXAucmVtb3ZlKFwidGl0bGUgMlwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKDQsIG1hcC5nZXRBbGwoKSk7XHJcbiAgICAvLyBtYXAuc2V0KFwidGl0bGUgMlwiLCBuZXcgTm90ZXBhZChcInRpdGxlIDJcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2coNSwgbWFwLmdldEFsbCgpKTtcclxuICAgIC8vIG1hcC5jbGVhcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coNiwgbWFwLmdldEFsbCgpKTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgYm9vazogSUJvb2sgPSB7XHJcbiAgICAvLyAgICAgdGl0bGU6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXHJcbiAgICAvLyAgICAgYXV0aG9yOiB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiSXZhblwiLFxyXG4gICAgLy8gICAgICAgICBhZ2U6IDMwXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBwcmljZTogNVxyXG4gICAgLy8gfVxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gY29uc3QgYm9va3MgPSB7XHJcbiAgICAvLyAgICAgXCJ0aXRsZSAxXCI6IG5ldyBCb29rKFwidGl0bGUgMVwiLCBcImF1dGhvciAxXCIsIFwiZmFudGFzeVwiLCA1KSxcclxuICAgIC8vICAgICBcInRpdGxlIDJcIjogbmV3IEJvb2soXCJ0aXRsZSAyXCIsIFwiYXV0aG9yIDJcIiwgXCJzY2llbmNlXCIpXHJcbiAgICAvLyB9O1xyXG4gICAgLy8gY29uc3Qgbm90ZXBhZHMgPSB7XHJcbiAgICAvLyAgICAgXCJ0aXRsZSAxXCI6IG5ldyBOb3RlcGFkKFwidGl0bGUgMVwiLCA1KSxcclxuICAgIC8vICAgICBcInRpdGxlIDJcIjogbmV3IE5vdGVwYWQoXCJ0aXRsZSAyXCIpXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnN0IGNhbGVuZGFycyA9IHtcclxuICAgIC8vICAgICBcInRpdGxlIDFcIjogbmV3IENhbGVuZGFyKFwidGl0bGUgMVwiLCBcIkNhbGVuZGFyIDFcIiksXHJcbiAgICAvLyAgICAgXCJ0aXRsZSAyXCI6IG5ldyBDYWxlbmRhcihcInRpdGxlIDJcIiwgXCJDYWxlbmRhciAyXCIsIDMpXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEZyb208Qm9vaz4oYm9va3MsIFwidGl0bGUgMVwiKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRGcm9tPE5vdGVwYWQ+KG5vdGVwYWRzLCBcInRpdGxlIDNcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZ2V0RnJvbTxDYWxlbmRhcj4oY2FsZW5kYXJzLCBcInRpdGxlIDJcIikpO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLyBib29rcy5mb3JFYWNoKChib29rKSA9PiBzaG93RGF0YShib29rKSk7XHJcbiAgICAvLyBub3RlcGFkcy5mb3JFYWNoKChub3RlcGFkKSA9PiBzaG93RGF0YShub3RlcGFkKSk7ICAgIFxyXG59O1xyXG5cclxubWFpbigpOyJdfQ==