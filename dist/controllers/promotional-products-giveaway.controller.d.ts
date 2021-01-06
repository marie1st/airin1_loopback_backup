import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PromotionalProductsGiveaway } from '../models';
import { PromotionalProductsGiveawayRepository } from '../repositories';
export declare class PromotionalProductsGiveawayController {
    promotionalProductsGiveawayRepository: PromotionalProductsGiveawayRepository;
    constructor(promotionalProductsGiveawayRepository: PromotionalProductsGiveawayRepository);
    create(promotionalProductsGiveaway: PromotionalProductsGiveaway): Promise<PromotionalProductsGiveaway>;
    count(where?: Where<PromotionalProductsGiveaway>): Promise<Count>;
    find(filter?: Filter<PromotionalProductsGiveaway>): Promise<PromotionalProductsGiveaway[]>;
    updateAll(promotionalProductsGiveaway: PromotionalProductsGiveaway, where?: Where<PromotionalProductsGiveaway>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PromotionalProductsGiveaway>): Promise<PromotionalProductsGiveaway>;
    updateById(id: number, promotionalProductsGiveaway: PromotionalProductsGiveaway): Promise<void>;
    replaceById(id: number, promotionalProductsGiveaway: PromotionalProductsGiveaway): Promise<void>;
    deleteById(id: number): Promise<void>;
}
