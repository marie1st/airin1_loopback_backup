import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupCdu } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupCduController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupCdu>): Promise<SetupCdu>;
    create(id: typeof OrderProduct.prototype.order_id, setupCdu: Omit<SetupCdu, 'id'>): Promise<SetupCdu>;
    patch(id: string, setupCdu: Partial<SetupCdu>, where?: Where<SetupCdu>): Promise<Count>;
    delete(id: string, where?: Where<SetupCdu>): Promise<Count>;
}
