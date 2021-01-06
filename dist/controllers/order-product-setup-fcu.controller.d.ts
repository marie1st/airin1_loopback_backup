import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupFcu } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupFcuController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupFcu>): Promise<SetupFcu>;
    create(id: typeof OrderProduct.prototype.order_id, setupFcu: Omit<SetupFcu, 'id'>): Promise<SetupFcu>;
    patch(id: string, setupFcu: Partial<SetupFcu>, where?: Where<SetupFcu>): Promise<Count>;
    delete(id: string, where?: Where<SetupFcu>): Promise<Count>;
}
