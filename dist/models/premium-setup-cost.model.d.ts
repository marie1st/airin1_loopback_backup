import { Entity } from '@loopback/repository';
import { ProductNPrice } from './product-n-price.model';
export declare class PremiumSetupCost extends Entity {
    id?: number;
    category: string;
    btu: string;
    name: string;
    price: number;
    description: string;
    productNPrice: ProductNPrice;
    constructor(data?: Partial<PremiumSetupCost>);
}
export interface PremiumSetupCostRelations {
}
export declare type PremiumSetupCostWithRelations = PremiumSetupCost & PremiumSetupCostRelations;
