import { Entity } from '@loopback/repository';
export declare class PromotionalProductsGiveaway extends Entity {
    id?: number;
    category: string;
    name: string;
    price: number;
    description?: string;
    constructor(data?: Partial<PromotionalProductsGiveaway>);
}
export interface PromotionalProductsGiveawayRelations {
}
export declare type PromotionalProductsGiveawayWithRelations = PromotionalProductsGiveaway & PromotionalProductsGiveawayRelations;
