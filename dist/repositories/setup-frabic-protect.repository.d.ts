import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { SetupFrabicProtect, SetupFrabicProtectRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class SetupFrabicProtectRepository extends DefaultCrudRepository<SetupFrabicProtect, typeof SetupFrabicProtect.prototype.id, SetupFrabicProtectRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof SetupFrabicProtect.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
