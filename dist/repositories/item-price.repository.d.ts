import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { ItemPrice, ItemPriceRelations, ProductNPrice } from '../models';
import { ProductNPriceRepository } from './product-n-price.repository';
export declare class ItemPriceRepository extends DefaultCrudRepository<ItemPrice, typeof ItemPrice.prototype.id, ItemPriceRelations> {
    protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>;
    readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof ItemPrice.prototype.id>;
    constructor(dataSource: AirinoneDataSource, productNPriceRepositoryGetter: Getter<ProductNPriceRepository>);
}
