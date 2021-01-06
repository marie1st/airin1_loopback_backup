import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { WithdrawUsedEquipment, WithdrawUsedEquipmentRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class WithdrawUsedEquipmentRepository extends DefaultCrudRepository<WithdrawUsedEquipment, typeof WithdrawUsedEquipment.prototype.id, WithdrawUsedEquipmentRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawUsedEquipment.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
