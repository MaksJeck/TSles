import { Product } from './Product';

enum Type {
    BLACK,
    RED
};

export class Notepad extends Product<Type> {
    // title: string;
   

    constructor(title: string, price?: number) {
        super(title, 1, Type.RED, price);

        // this.title = title;
        // this.price = price;
    };

    // canBuy(): boolean {
    //     return typeof this.price === "number";
    // };
};