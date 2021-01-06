import { Entity } from '@loopback/repository';
export declare class PromotionalProductsPrice extends Entity {
    id?: number;
    category: string;
    btu: string;
    name: string;
    price: number;
    description?: string;
    constructor(data?: Partial<PromotionalProductsPrice>);
}
export interface PromotionalProductsPriceRelations {
}
export declare type PromotionalProductsPriceWithRelations = PromotionalProductsPrice & PromotionalProductsPriceRelations;
