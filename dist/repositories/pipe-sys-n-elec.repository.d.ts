import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { PipeSysNElec, PipeSysNElecRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class PipeSysNElecRepository extends DefaultCrudRepository<PipeSysNElec, typeof PipeSysNElec.prototype.id, PipeSysNElecRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof PipeSysNElec.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
