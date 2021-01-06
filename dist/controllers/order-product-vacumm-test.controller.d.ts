import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, VacummTest } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductVacummTestController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<VacummTest>): Promise<VacummTest>;
    create(id: typeof OrderProduct.prototype.order_id, vacummTest: Omit<VacummTest, 'id'>): Promise<VacummTest>;
    patch(id: string, vacummTest: Partial<VacummTest>, where?: Where<VacummTest>): Promise<Count>;
    delete(id: string, where?: Where<VacummTest>): Promise<Count>;
}
