import { Entity } from '@loopback/repository';
export declare class ProductNPrice extends Entity {
    id?: number;
    name: string;
    brand: string;
    btu: string;
    selling_price: number;
    promotion_id: number;
    cost: number;
    other_cost: number;
    total_cost: number;
    profit: number;
    profit_percent: number;
    wage_id: number;
    item_price_id: number;
    premium_setup_id: number;
    constructor(data?: Partial<ProductNPrice>);
}
export interface ProductNPriceRelations {
}
export declare type ProductNPriceWithRelations = ProductNPrice & ProductNPriceRelations;
