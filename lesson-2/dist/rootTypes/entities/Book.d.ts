import { Product } from './Product';
import { Genre } from '../types/Genre';
declare enum Type {
    NEW = 0,
    OLD = 1
}
export declare class Book extends Product<Type> {
    author: string;
    genre: Genre;
    constructor(title: string, author: string, genre: Genre, price?: number);
    getInfo(): void;
}
export {};
