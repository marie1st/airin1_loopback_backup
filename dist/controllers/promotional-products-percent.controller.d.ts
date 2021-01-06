import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PromotionalProductsPercent } from '../models';
import { PromotionalProductsPercentRepository } from '../repositories';
export declare class PromotionalProductsPercentController {
    promotionalProductsPercentRepository: PromotionalProductsPercentRepository;
    constructor(promotionalProductsPercentRepository: PromotionalProductsPercentRepository);
    create(promotionalProductsPercent: PromotionalProductsPercent): Promise<PromotionalProductsPercent>;
    count(where?: Where<PromotionalProductsPercent>): Promise<Count>;
    find(filter?: Filter<PromotionalProductsPercent>): Promise<PromotionalProductsPercent[]>;
    updateAll(promotionalProductsPercent: PromotionalProductsPercent, where?: Where<PromotionalProductsPercent>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PromotionalProductsPercent>): Promise<PromotionalProductsPercent>;
    updateById(id: number, promotionalProductsPercent: PromotionalProductsPercent): Promise<void>;
    replaceById(id: number, promotionalProductsPercent: PromotionalProductsPercent): Promise<void>;
    deleteById(id: number): Promise<void>;
}
