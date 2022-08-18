

import { Product } from './Product';

enum Type {     //Lesson 3
        BLACK,
        RED
};

export class Notepad extends Product<Type> { //lesson 3
    // title: string;
constructor(title: string, price?: number) {

        super(title, 1, Type.RED, price);  //Lesson 3
        // this.title = title;
        // this.price = price;
    };

// canBuy(): boolean {
    //     return typeof this.price === "number";
    // };

};