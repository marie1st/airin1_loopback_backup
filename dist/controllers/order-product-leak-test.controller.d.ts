import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, LeakTest } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductLeakTestController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<LeakTest>): Promise<LeakTest>;
    create(id: typeof OrderProduct.prototype.order_id, leakTest: Omit<LeakTest, 'id'>): Promise<LeakTest>;
    patch(id: string, leakTest: Partial<LeakTest>, where?: Where<LeakTest>): Promise<Count>;
    delete(id: string, where?: Where<LeakTest>): Promise<Count>;
}
