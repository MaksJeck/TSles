import { IProduct } from "../types/Product";
export declare class Product<T = any> implements IProduct<T> {
    title: string;
    amount: number;
    price?: number;
    type: T;
    constructor(title: string, amount: number, type: T, price?: number);
    getPrice(): number | undefined;
    canBuy(): boolean;
    getAmount(): number;
}
