import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Wage, WageRelations, ProductNPrice } from '../models';
import { ProductNPriceRepository } from './product-n-price.repository';
export declare class WageRepository extends DefaultCrudRepository<Wage, typeof Wage.prototype.id, WageRelations> {
    protected productNPriceRepositoryGetter: Getter<ProductNPriceRepository>;
    readonly productNPrice: HasOneRepositoryFactory<ProductNPrice, typeof Wage.prototype.id>;
    constructor(dataSource: AirinoneDataSource, productNPriceRepositoryGetter: Getter<ProductNPriceRepository>);
}
