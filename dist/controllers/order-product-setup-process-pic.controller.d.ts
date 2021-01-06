import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupProcessPic } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupProcessPicController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupProcessPic>): Promise<SetupProcessPic>;
    create(id: typeof OrderProduct.prototype.order_id, setupProcessPic: Omit<SetupProcessPic, 'id'>): Promise<SetupProcessPic>;
    patch(id: string, setupProcessPic: Partial<SetupProcessPic>, where?: Where<SetupProcessPic>): Promise<Count>;
    delete(id: string, where?: Where<SetupProcessPic>): Promise<Count>;
}
