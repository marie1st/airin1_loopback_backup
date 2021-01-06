import { DefaultCrudRepository } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { PromotionalProductsGiveaway, PromotionalProductsGiveawayRelations } from '../models';
export declare class PromotionalProductsGiveawayRepository extends DefaultCrudRepository<PromotionalProductsGiveaway, typeof PromotionalProductsGiveaway.prototype.id, PromotionalProductsGiveawayRelations> {
    constructor(dataSource: AirinoneDataSource);
}
