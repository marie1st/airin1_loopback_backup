import { Entity } from '@loopback/repository';
import { ProductNPrice } from './product-n-price.model';
export declare class Wage extends Entity {
    id?: number;
    category: string;
    btu: string;
    name: string;
    price: number;
    description: string;
    productNPrice: ProductNPrice;
    constructor(data?: Partial<Wage>);
}
export interface WageRelations {
}
export declare type WageWithRelations = Wage & WageRelations;
