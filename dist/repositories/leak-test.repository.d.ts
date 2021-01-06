import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { LeakTest, LeakTestRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class LeakTestRepository extends DefaultCrudRepository<LeakTest, typeof LeakTest.prototype.id, LeakTestRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof LeakTest.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
