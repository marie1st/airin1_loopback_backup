import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { PromotionalProductsPrice, PromotionalProductsPriceRelations } from '../models';
export declare class PromotionalProductsPriceRepository extends DefaultCrudRepository<PromotionalProductsPrice, typeof PromotionalProductsPrice.prototype.id, PromotionalProductsPriceRelations> {
    constructor(dataSource: AirinoneDataSource);
}
