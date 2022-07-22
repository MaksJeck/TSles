import { Product } from './Product';

enum Type {
    ANIMALS,
    MACHINES
};

export class Calendar extends Product<Type> {
    title: string;
    author: string;

    constructor(title: string, author: string, price?: number) {
        super(title, 4, Type.ANIMALS, price);
        this.title = title;
        this.author = author;
    };    
};