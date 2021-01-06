import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupCdu, SetupCduRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class SetupCduRepository extends DefaultCrudRepository<SetupCdu, typeof SetupCdu.prototype.id, SetupCduRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupCdu.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
