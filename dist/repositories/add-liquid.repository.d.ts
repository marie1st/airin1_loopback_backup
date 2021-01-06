import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { AddLiquid, AddLiquidRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class AddLiquidRepository extends DefaultCrudRepository<AddLiquid, typeof AddLiquid.prototype.id, AddLiquidRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof AddLiquid.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
