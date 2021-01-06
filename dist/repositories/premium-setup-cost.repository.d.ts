import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { PremiumSetupCost, PremiumSetupCostRelations, ProductNPrice } from '../models';
import { ProductNPriceRepository } from './product-n-price.repository';
export declare class PremiumSetupCostRepository extends DefaultCrudRepository<PremiumSetupCost, typeof PremiumSetupCost.prototype.id, PremiumSetupCostRelations> {
    protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>;
    readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof PremiumSetupCost.prototype.id>;
    constructor(dataSource: AirinoneDataSource, productNPriceRepositoryGetter: Getter<ProductNPriceRepository>);
}
