import { Review } from "../types/Review";
export declare class Product<T = any> {
    title: string;
    amount: number;
    protected price?: number;
    protected type: T;
    private _reviews;
    private _score;
    constructor(title: string, amount: number, type: T, price?: number);
    get score(): number;
    get reviews(): Readonly<Review[]>;
    getPrice(): number | undefined;
    canBuy(): boolean;
    getAmount(): number;
    addReview(reiew: Review): void;
    static getInfo(product: Product): void;
}
