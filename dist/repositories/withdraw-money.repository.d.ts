import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { WithdrawMoney, WithdrawMoneyRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class WithdrawMoneyRepository extends DefaultCrudRepository<WithdrawMoney, typeof WithdrawMoney.prototype.order_id, WithdrawMoneyRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly OrderProduct: BelongsToAccessor<OrderProduct, typeof WithdrawMoney.prototype.order_id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
