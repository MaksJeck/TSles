import { Product } from './Product';
declare enum Type {
    BLACK = 0,
    RED = 1
}
export declare class Notepad extends Product<Type> {
    constructor(title: string, price?: number);
}
export {};
