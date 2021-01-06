import { Entity } from '@loopback/repository';
import { ProductNPrice } from './product-n-price.model';
export declare class ItemPrice extends Entity {
    id?: number;
    category: string;
    btu: string;
    name: string;
    price: number;
    description: string;
    productNPrice: ProductNPrice;
    constructor(data?: Partial<ItemPrice>);
}
export interface ItemPriceRelations {
}
export declare type ItemPriceWithRelations = ItemPrice & ItemPriceRelations;
