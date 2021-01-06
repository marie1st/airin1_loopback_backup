import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { VacummTest, VacummTestRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class VacummTestRepository extends DefaultCrudRepository<VacummTest, typeof VacummTest.prototype.id, VacummTestRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof VacummTest.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
