import { Book } from "./Book";
import { Notepad } from "./Notepad";
import { IProduct } from "../types/Product";

export class Product<T = any> implements IProduct<T> {
    title: string;
    amount: number;
    price?: number;
    type: T;

    constructor(title: string, amount: number, type: T, price?: number) {
        this.title = title;
        this.amount = amount;
        this.type = type;
        this.price = price;
    };

    getPrice(): number | undefined {
        return this.price;
    };
    canBuy(): boolean {
        return typeof this.price === "number";
    };
    getAmount(): number {
        return this.amount;
    };


    // getPriceProduct(entity: Book | Notepad): string {
    //     return entity.price ? entity.price.toString() : "не продается";
    // };
    // showData(entity: unknown): void {
    //     if(entity instanceof Book) {
    //         console.log(`Книга - ${entity.title} - ${entity.author} - ${this.getPriceProduct(entity)}`)
    //     } else if (entity instanceof Notepad) {
    //       console.log(`Блокнот - ${this.getPriceProduct(entity)}`)  
    //     }    
    // };
    

};