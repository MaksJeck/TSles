import { Product } from './Product';
import { Genre } from '../types/Genre';

enum Type {      //Lesson 3
    NEW,
    OLD
};

export class Book extends Product<Type> {   //Lesson 3
    // title: string;
    author: string;
    genre: Genre;

    constructor(title: string, author: string, genre: Genre, price?: number) {
        super(title, 1, Type.OLD, price);   //Lesson 3

        // this.title = title;
        this.author = author;
        this.genre = genre;
        // this.price = price;
    };
    getInfo() {
        console.log(this.title, this.price, this.type);
    }

    // canBuy(): boolean {
    //     return typeof this.price === "number";
    // };
    
};