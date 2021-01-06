import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupPipe, SetupPipeRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class SetupPipeRepository extends DefaultCrudRepository<SetupPipe, typeof SetupPipe.prototype.id, SetupPipeRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupPipe.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
