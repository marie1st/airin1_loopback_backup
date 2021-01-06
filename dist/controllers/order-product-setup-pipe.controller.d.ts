import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupPipe } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupPipeController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupPipe>): Promise<SetupPipe>;
    create(id: typeof OrderProduct.prototype.order_id, setupPipe: Omit<SetupPipe, 'id'>): Promise<SetupPipe>;
    patch(id: string, setupPipe: Partial<SetupPipe>, where?: Where<SetupPipe>): Promise<Count>;
    delete(id: string, where?: Where<SetupPipe>): Promise<Count>;
}
