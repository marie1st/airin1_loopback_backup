import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupFcu, SetupFcuRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class SetupFcuRepository extends DefaultCrudRepository<SetupFcu, typeof SetupFcu.prototype.id, SetupFcuRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupFcu.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
