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
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQSx3Q0FBd0M7QUFFeEMsZ0RBQWdEO0FBQ2hELG1DQUFtQztBQUNuQywwRkFBMEY7QUFDMUYsOENBQThDO0FBQzlDLHVEQUF1RDtBQUN2RCxZQUFZO0FBQ1osS0FBSztBQUVMLHlEQUF5RDtBQUN6RCxxRUFBcUU7QUFDckUsS0FBSztBQUVMLE1BQU0sT0FBTyxHQUFHLENBQXVCLEdBQXNCLEVBQUUsS0FBYSxFQUFpQixFQUFFO0lBQzNGLHFGQUFxRjtJQUVyRixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixtRkFBbUY7QUFDbkYseUNBQXlDO0FBQ3pDLHNEQUFzRDtBQUN0RCwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QixtQ0FBbUM7QUFDbkMsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixTQUFTO0FBRVQsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBQ3BCLDhEQUE4RDtJQUM5RCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUVULG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLE1BQU07SUFDTixzQkFBc0I7SUFFdEIsOEVBQThFO0lBQzlFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFFZCxzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLGNBQWM7SUFFZCx5Q0FBeUM7SUFDekMsd0VBQXdFO0lBQ3hFLGNBQWM7SUFFZCxxREFBcUQ7SUFDckQsd0VBQXdFO0lBQ3hFLDRDQUE0QztJQUM1QyxjQUFjO0lBRWQsNENBQTRDO0lBQzVDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMscURBQXFEO0lBQ3JELE9BQU87SUFDUCwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLG1FQUFtRTtJQUNuRSxxQ0FBcUM7SUFDckMsZ0NBQWdDO0lBQ2hDLE9BQU87SUFDUCxjQUFjO0lBRWQsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsS0FBSztJQUNMLHVEQUF1RDtJQUN2RCxjQUFjO0lBRWQsc0NBQXNDO0lBQ3RDLDZDQUE2QztJQUM3QyxjQUFjO0lBRWQsbURBQW1EO0lBQ25ELFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNSLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLEtBQUs7SUFDTCxjQUFjO0lBRWQsMkRBQTJEO0lBQzNELCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvREFBb0Q7SUFDcEQsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AscUNBQXFDO0lBQ3JDLE9BQU87SUFDUCxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixPQUFPO0lBQ1Asd0JBQXdCO0lBQ3hCLHVFQUF1RTtJQUN2RSxpRkFBaUY7SUFDakYsU0FBUztJQUNULGNBQWM7SUFFZCxpREFBaUQ7SUFDakQsNERBQTREO0lBQzVELGNBQWM7SUFFZCwwQ0FBMEM7SUFDMUMsd0RBQXdEO0lBQ3hELHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsU0FBUztJQUNULEtBQUs7SUFDTCxjQUFjO0lBRWQsa0RBQWtEO0lBQ2xELDhDQUE4QztJQUM5QyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsSUFBSTtJQUNKLGlCQUFpQjtJQUNqQixLQUFLO0lBQ0wsb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4QixDQUFDLENBQUEsQ0FBQztBQUVGLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuL2VudGl0aWVzL0Jvb2tcIjtcclxuaW1wb3J0IHsgTm90ZXBhZCB9IGZyb20gXCIuL2VudGl0aWVzL05vdGVwYWRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuL2VudGl0aWVzL1Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiLi9lbnRpdGllcy9DYWxlbmRhclwiO1xyXG5pbXBvcnQgeyBNeU1hcCB9IGZyb20gXCIuL2NvbW1vbi9NeU1hcFwiXHJcbmltcG9ydCB7IHRvVXBwZXJDYXNlIH0gZnJvbSBcIi4vc3RyaW5nLWhlbHBlci5qc1wiO1xyXG5pbXBvcnQgeyBJQm9vaywgSU9wdGlvbnMsIHNlYXJjaCB9IGZyb20gXCJnb29nbGUtYm9va3Mtc2VhcmNoXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2NvbW1vbi9Mb2dnZXJcIjtcclxuXHJcbi8vIGltcG9ydCB7IElCb29rIH0gZnJvbSBcIi4vdHlwZXMvQm9va1wiO1xyXG5cclxuLy8gY29uc3Qgc2hvd0RhdGEgPSAoZW50aXR5OiB1bmtub3duKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZihlbnRpdHkgaW5zdGFuY2VvZiBCb29rKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYNCa0L3QuNCz0LAgLSAke2VudGl0eS50aXRsZX0gLSAke2VudGl0eS5hdXRob3J9IC0gJHtnZXRQcmljZShlbnRpdHkpfWApXHJcbi8vICAgICB9IGVsc2UgaWYgKGVudGl0eSBpbnN0YW5jZW9mIE5vdGVwYWQpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coYNCR0LvQvtC60L3QvtGCIC0gJHtnZXRQcmljZShlbnRpdHkpfWApICBcclxuLy8gICAgIH0gICAgXHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBnZXRQcmljZSA9IChlbnRpdHk6IEJvb2sgfCBOb3RlcGFkKTogc3RyaW5nID0+IHtcclxuLy8gICAgIHJldHVybiBlbnRpdHkucHJpY2UgPyBlbnRpdHkucHJpY2UudG9TdHJpbmcoKSA6IFwi0L3QtSDQv9GA0L7QtNCw0LXRgtGB0Y9cIlxyXG4vLyB9O1xyXG5cclxuY29uc3QgZ2V0RnJvbSA9IDxUIGV4dGVuZHMgTXlNYXA8YW55Pj4ob2JqOiBSZWNvcmQ8c3RyaW5nLCBUPiwgdGl0bGU6IHN0cmluZyk6IFQgfCB1bmRlZmluZWQgPT4ge1xyXG4gICAgLy8gY29uc3QgYm9vayA9IGFycmF5LmZpbmQoYm9vayA9PiBib29rLnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRpdGxlLnRvTG93ZXJDYXNlKCkpO1xyXG5cclxuICAgIHJldHVybiBvYmpbdGl0bGVdO1xyXG59O1xyXG5cclxuLy8gY29uc3Qgc2VhcmNoQm9va3MgPSAocXVlcnk6IHN0cmluZywgb3B0aW9uczogSU9wdGlvbnMgPSB7fSk6IFByb21pc2U8SUJvb2tbXT4gPT5cclxuLy8gICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuLy8gICAgICAgICBzZWFyY2gocXVlcnksIG9wdGlvbnMsIChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9KVxyXG5cclxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGJvb2sgPSBuZXcgQm9vayhcInRpdGxlIDFcIiwgXCJhdXRob3IgMVwiLCBcImZhbnRhc3lcIiwgNSk7XHJcbiAgICAvLyAvLyBib29rLnJldmlld3MucHVzaCh7XHJcbiAgICAvLyAvLyAgICAgYXV0aG9yOiBcIk1heFwiLFxyXG4gICAgLy8gLy8gICAgIHRleHQ6IFwidGV4dFwiLFxyXG4gICAgLy8gLy8gICAgIHNjb3JlOiA0XHJcbiAgICAvLyAvLyB9KTtcclxuXHJcbiAgICAvLyBib29rLmFkZFJldmlldyh7XHJcbiAgICAvLyAgICAgYXV0aG9yOiBcIk1heFwiLFxyXG4gICAgLy8gICAgIHRleHQ6IFwidGV4dFwiLFxyXG4gICAgLy8gICAgIHNjb3JlOiA0XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGJvb2suYWRkUmV2aWV3KHtcclxuICAgIC8vICAgICBhdXRob3I6IFwiTGV4YVwiLFxyXG4gICAgLy8gICAgIHRleHQ6IFwidGV4dFwiLFxyXG4gICAgLy8gICAgIHNjb3JlOiAxXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIEJvb2suZ2V0SW5mbyhib29rKTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcImFsd2F5c1N0cmljdFwiINC00L7QsdCw0LLQu9GP0LXRgiDQstC+INCy0YHQtSDRhNCw0LnQu9GLICouanMgXCJ1c2Ugc3RyaWN0XCJcclxuICAgIC8vIFwidXNlIHN0cmljdFwiXHJcbiAgICAvLyB1c2VyID0gXCJBbGV4XCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTsgICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tINC/0YDQsNCy0LjQu9C+IFwibm9JbXBsaWNpdEFueVwiXHJcbiAgICAvLyDQl9Cw0L/RgNC10YIg0L3QtdGP0LLQvdC+0Lkg0YLQuNC/0LjQt9Cw0YbQuNC4IEFueSAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcInN0cmljdE51bGxDaGVja3NcIlxyXG4gICAgLy8g0JTQtdC70LDQtdGCINC90LXQstC+0LfQvNC+0LbQvdGL0Lwg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUgdW5kZWZpbmVkINC4IG51bGwg0LLQvNC10YHRgtC+INC00YDRg9Cz0LjRhSDRgtC40L/QvtCyXHJcbiAgICAvLy0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tINC/0YDQsNCy0LjQu9C+IFwic3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvblwiXHJcbiAgICAvLyBD0LvQtdC00LjRgiDRh9GC0L7QsdGLINGB0LLQvtC50YHRgtCy0LAsINC+0LHRitGP0LLQu9C10L3QvdGL0LUg0LIg0LrQu9Cw0YHRgdC1INCx0YvQu9C4INC/0YDQvtC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDQvdGLIFxyXG4gICAgLy8g0LLQviDQstGA0LXQvNGPINC40YUg0L7QsdGK0Y/QstC70LXQvdC40Y8g0LjQu9C4INCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YDQtVxyXG4gICAgLy8tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcInN0cmljdEZ1bmN0aW9uVHlwZXNcIlxyXG4gICAgLy8gICAgaW50ZXJmYWNlIFJlbW92ZUJvb2tGcm9tRmF2b3JpdGVzIHtcclxuICAgIC8vICAgIC8vIGlkINC80L7QttC10YIg0LHRi9GC0Ywg0YHRgtGA0L7QutC+0Lkg0LjQu9C4INGH0LjRgdC70L7QvFxyXG4gICAgLy8gICAgKGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPHN0cmluZyB8IG51bWJlcj5cclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIC8vINC90L4g0LfQtNC10YHRjCDRg9C60LDQt9GL0LLQsNC10YLRgdGPINGC0L7Qu9GM0LrQviBzdHJpbmdcclxuICAgIC8vICAgIC8vINC/0YDQuCDRjdGC0L7QvCDQvtGI0LjQsdC+0Log0L3QtSDQstC+0LfQvdC40LrQsNC10YJcclxuICAgIC8vICAgIGNvbnN0IHJlbW92ZUJvb2s6IFJlbW92ZUJvb2tGcm9tRmF2b3JpdGVzID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIC8vICAgIC8vINC30LTQtdGB0Ywg0LTQvtC70LbQvdCwINCx0YvRgtGMINGA0LXQsNC70LjQt9Cw0YbQuNGPXHJcbiAgICAvLyAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGlkKVxyXG4gICAgLy8gICAgfVxyXG4gICAgLy8tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcInN0cmljdEJpbmRDYWxsQXBwbHlcIlxyXG4gICAgLy8gY29uc3QgUGVyc29uID0ge1xyXG4gICAgLy8gICAgIGFnZTogNDAsXHJcbiAgICAvLyAgICAgZ2V0QWdlOiBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuYWdlICogbnVtO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyB9O1xyXG4gICAgLy8gY29uc3QgQW5kcmV5ID0ge1xyXG4gICAgLy8gICAgIGFnZTogMjEsXHJcbiAgICAvLyB9O1xyXG4gICAgLy8gY29uc29sZS5sb2coUGVyc29uLmdldEFnZS5jYWxsKEFuZHJleSwgXCJ0ZXh0XCIpKTsgICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tINC/0YDQsNCy0LjQu9C+IFwibm9JbWxpY2l0VGhpc1wiXHJcbiAgICAvLyDQn9GA0LDQstC40LvQviDQtNC70Y8g0LrQvtC80L/QuNC70Y/RgtC+0YDQsCwg0LTQu9GPINC/0YDQvtCy0LXRgNC60LggdGhpc1xyXG4gICAgLy8tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcInVzZVVua25vd25JbkNhdGNoVmFyaWFibGVzXCJcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgICAgdGhyb3cgXCJlcnJvclwiXHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgLy8gICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodHlwZW9mIGVycm9yID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tINC/0YDQsNCy0LjQu9C+IFwibm9Qcm9wZXJ0eUFjY2Vzc0Zyb21JbmRleFNpZ25hdHVyZVwiXHJcbiAgICAvLyAgICBpbnRlcmZhY2UgU29tZVN0cnVjdHVyZSB7XHJcbiAgICAvLyAgICAvLyDRgtC+0YfQvdC+INC40LfQstC10YHRgtC90YvQtSDRgdCy0L7QudGB0YLQstCwXHJcbiAgICAvLyAgICBpZDogc3RyaW5nXHJcbiAgICAvLyAgICBuYW1lOiBzdHJpbmdcclxuICAgIC8vICAgIC8vINC/0YDQvtC40LfQstC+0LvRjNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YssINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LHRi9GC0YwsXHJcbiAgICAvLyAgICAvLyDQsCDQvNC+0LPRg9GCINC90LUg0LHRi9GC0YxcclxuICAgIC8vICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAgUHJvbWlzZS5yZXNvbHZlPFNvbWVTdHJ1Y3R1cmU+KFxyXG4gICAgLy8gICAge1xyXG4gICAgLy8gICAgaWQ6ICc1JyxcclxuICAgIC8vICAgIG5hbWU6ICdIYXJyeSBQb3R0ZXInLFxyXG4gICAgLy8gICAgYXV0aG9yOiAnSi4gSy4gUm93bGluZydcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgICkudGhlbigoYm9vaykgPT4ge1xyXG4gICAgLy8gICAgLy8gbmFtZSDRgtC+0YfQvdC+INCx0YPQtNC10YIg0YHRg9GJ0LXRgdGC0LLQvtCy0LDRgtGMLCDQsCBhdXRob3Ig0LggZ2VucmUg0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhib29rLm5hbWUsIGJvb2suYXV0aG9yLnRvVXBwZXJDYXNlKCksIGJvb2suZ2VucmUudG9VcHBlckNhc2UoKSlcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy8tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLSDQv9GA0LDQstC40LvQviBcIm5vVW5jaGVja2VkSW5kZXhlZEFjY2Vzc1wiXHJcbiAgICAvLyDQtNC+0L/QvtC70L3Rj9C10YIg0YDQsNCx0L7RgtGDINC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0Lgg0L/QvtC80L7Qs9Cw0LXRgiDQvtCx0L3QsNGA0YPQttC40YLRjCDQvtGI0LjQsdC60LhcclxuICAgIC8vLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0g0L/RgNCw0LLQuNC70L4gXCJub0ltcGxpY2l0UmV0dXJuc1wiXHJcbiAgICAvLyBjb25zdCBnZXROdW1iZXIgPSAobnVtOiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgPT4ge1xyXG4gICAgLy8gICAgIGlmICh0eXBlb2YgbnVtID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIH07XHJcbiAgICAvLy0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tINC/0YDQsNCy0LjQu9C+IFwibm9GYWxsdHJvdWdoQ2FzZXNJblN3aXRjaFwiXHJcbiAgICAvLyBmdW5jdGlvbiBnZXRHZW5yZUljb24obnVtOiAxIHwgMik6IG51bWJlciB7XHJcbiAgICAvLyBsZXQgbnVtYmVyOiBudW1iZXJcclxuICAgIC8vIHN3aXRjaChudW0pIHtcclxuICAgIC8vIGNhc2UgMTpcclxuICAgIC8vICAgICBudW1iZXIgPSAxO1xyXG4gICAgLy8gICAgIGJyZWFrO1xyXG4gICAgLy8gY2FzZSAyOlxyXG4gICAgLy8gICAgIG51bWJlciA9IDI7XHJcbiAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAvLyBkZWZhdWx0OlxyXG4gICAgLy8gICAgIG51bWJlciA9IDM7XHJcbiAgICAvLyB9XHJcbiAgICAvLyByZXR1cm4gbnVtYmVyO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEdlbnJlSWNvbigyKSk7ICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0gICAgICBcclxufTtcclxuXHJcbm1haW4oKTsiXX0=