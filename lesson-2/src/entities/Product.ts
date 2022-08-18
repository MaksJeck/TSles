import { Book } from "./Book";
import { Notepad } from "./Notepad";
import { IProduct } from "../types/Product";
import { Review } from "../types/Review";

export class Product<T = any> {
    public title: string;
    public amount: number;    

    protected price?: number;
    protected type: T; // Lesson 5

    private _reviews: Review[] = [];
    private _score: number = 0;

    constructor(title: string, amount: number, type: T, price?: number) {
        this.title = title;
        this.amount = amount;
        this.type = type;
        this.price = price;
    };

    // set type(type) {
    //     this._type = type;
    // };
    get score() {
        return this._score;
    };
    get reviews(): Readonly<Review[]> {
        return this._reviews;
    };
    // get type() {
    //     return this._type;
    // };

    getPrice(): number | undefined {
        return this.price;
    };
    canBuy(): boolean {
        return typeof this.price === "number";
    };
    getAmount(): number {
        return this.amount;
    };
    addReview(reiew: Review) {
        this._reviews.push(reiew);
        this._score = this._reviews.reduce<number>((acc, review) => {
            return acc + review.score;
        }, 0) / this._reviews.length;
    };

    static getInfo(product: Product) {
        console.log(product.title, product.amount);        
    }


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