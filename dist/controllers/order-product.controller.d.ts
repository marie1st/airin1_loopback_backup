import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { OrderProduct } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductController {
    orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    create(orderProduct: OrderProduct): Promise<OrderProduct>;
    count(where?: Where<OrderProduct>): Promise<Count>;
    find(filter?: Filter<OrderProduct>): Promise<OrderProduct[]>;
    updateAll(orderProduct: OrderProduct, where?: Where<OrderProduct>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<OrderProduct>): Promise<OrderProduct>;
    updateById(id: string, orderProduct: OrderProduct): Promise<void>;
    replaceById(id: string, orderProduct: OrderProduct): Promise<void>;
    deleteById(id: string): Promise<void>;
}
