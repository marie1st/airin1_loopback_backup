import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Customer, CustomerRelations, OrderProduct } from '../models';
import { OrderProductRepository } from './order-product.repository';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id, CustomerRelations> {
    protected orderProductRepositoryGetter: Getter<OrderProductRepository>;
    readonly orderProducts: HasManyRepositoryFactory<OrderProduct, typeof Customer.prototype.id>;
    constructor(dataSource: AirinoneDataSource, orderProductRepositoryGetter: Getter<OrderProductRepository>);
}
