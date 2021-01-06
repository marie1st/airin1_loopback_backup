import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { WithdrawMechanicalEquipment, WithdrawMechanicalEquipmentRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class WithdrawMechanicalEquipmentRepository extends DefaultCrudRepository<WithdrawMechanicalEquipment, typeof WithdrawMechanicalEquipment.prototype.id, WithdrawMechanicalEquipmentRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMechanicalEquipment.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
