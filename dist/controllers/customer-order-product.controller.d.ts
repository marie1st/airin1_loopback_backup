import { Count, Filter, Where } from '@loopback/repository';
import { Customer, OrderProduct } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerOrderProductController {
    protected customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    find(id: string, filter?: Filter<OrderProduct>): Promise<OrderProduct[]>;
    create(id: typeof Customer.prototype.id, orderProduct: Omit<OrderProduct, 'order_id'>): Promise<OrderProduct>;
    patch(id: string, orderProduct: Partial<OrderProduct>, where?: Where<OrderProduct>): Promise<Count>;
    delete(id: string, where?: Where<OrderProduct>): Promise<Count>;
}
