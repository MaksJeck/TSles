import { Product } from './Product';
declare enum Type {
    ANIMALS = 0,
    MACHINES = 1
}
export declare class Calendar extends Product<Type> {
    title: string;
    author: string;
    constructor(title: string, author: string, price?: number);
}
export {};
