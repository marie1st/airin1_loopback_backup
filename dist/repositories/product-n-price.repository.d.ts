import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { ProductNPrice, ProductNPriceRelations, Wage, ItemPrice, PremiumSetupCost } from '../models';
import { WageRepository } from './wage.repository';
import { ItemPriceRepository } from './item-price.repository';
import { PremiumSetupCostRepository } from './premium-setup-cost.repository';
export declare class ProductNPriceRepository extends DefaultCrudRepository<ProductNPrice, typeof ProductNPrice.prototype.id, ProductNPriceRelations> {
    protected wageRepositoryGetter: Getter<WageRepository>;
    protected itemPriceRepositoryGetter: Getter<ItemPriceRepository>;
    protected premiumSetupCostRepositoryGetter: Getter<PremiumSetupCostRepository>;
    readonly Wage: BelongsToAccessor<Wage, typeof ProductNPrice.prototype.id>;
    readonly ItemPrice: BelongsToAccessor<ItemPrice, typeof ProductNPrice.prototype.id>;
    readonly PremiiumSetupCost: BelongsToAccessor<PremiumSetupCost, typeof ProductNPrice.prototype.id>;
    constructor(dataSource: AirinoneDataSource, wageRepositoryGetter: Getter<WageRepository>, itemPriceRepositoryGetter: Getter<ItemPriceRepository>, premiumSetupCostRepositoryGetter: Getter<PremiumSetupCostRepository>);
}
