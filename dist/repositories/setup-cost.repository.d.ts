import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupCost, SetupCostRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class SetupCostRepository extends DefaultCrudRepository<SetupCost, typeof SetupCost.prototype.id, SetupCostRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly orderProduct: BelongsToAccessor<OrderProduct, typeof SetupCost.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
