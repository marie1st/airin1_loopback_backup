import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupCost } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupCostController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupCost>): Promise<SetupCost>;
    create(id: typeof OrderProduct.prototype.order_id, setupCost: Omit<SetupCost, 'id'>): Promise<SetupCost>;
    patch(id: string, setupCost: Partial<SetupCost>, where?: Where<SetupCost>): Promise<Count>;
    delete(id: string, where?: Where<SetupCost>): Promise<Count>;
}
