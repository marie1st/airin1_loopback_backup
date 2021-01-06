import { Entity } from '@loopback/repository';
export declare class PromotionalProductsPercent extends Entity {
    id?: number;
    category: string;
    btu: string;
    name: string;
    percent_discount: number;
    description: string;
    constructor(data?: Partial<PromotionalProductsPercent>);
}
export interface PromotionalProductsPercentRelations {
}
export declare type PromotionalProductsPercentWithRelations = PromotionalProductsPercent & PromotionalProductsPercentRelations;
