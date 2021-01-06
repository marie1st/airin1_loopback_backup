import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { PromotionalProductsPrice } from '../models';
import { PromotionalProductsPriceRepository } from '../repositories';
export declare class PromotionalProductsPriceController {
    promotionalProductsPriceRepository: PromotionalProductsPriceRepository;
    constructor(promotionalProductsPriceRepository: PromotionalProductsPriceRepository);
    create(promotionalProductsPrice: PromotionalProductsPrice): Promise<PromotionalProductsPrice>;
    count(where?: Where<PromotionalProductsPrice>): Promise<Count>;
    find(filter?: Filter<PromotionalProductsPrice>): Promise<PromotionalProductsPrice[]>;
    updateAll(promotionalProductsPrice: PromotionalProductsPrice, where?: Where<PromotionalProductsPrice>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<PromotionalProductsPrice>): Promise<PromotionalProductsPrice>;
    updateById(id: number, promotionalProductsPrice: PromotionalProductsPrice): Promise<void>;
    replaceById(id: number, promotionalProductsPrice: PromotionalProductsPrice): Promise<void>;
    deleteById(id: number): Promise<void>;
}
