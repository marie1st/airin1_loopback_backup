import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { PromotionalProductsPercent, PromotionalProductsPercentRelations } from '../models';
export declare class PromotionalProductsPercentRepository extends DefaultCrudRepository<PromotionalProductsPercent, typeof PromotionalProductsPercent.prototype.id, PromotionalProductsPercentRelations> {
    constructor(dataSource: AirinoneDataSource);
}
