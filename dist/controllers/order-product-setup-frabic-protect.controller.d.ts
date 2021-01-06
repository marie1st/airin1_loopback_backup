import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, SetupFrabicProtect } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductSetupFrabicProtectController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<SetupFrabicProtect>): Promise<SetupFrabicProtect>;
    create(id: typeof OrderProduct.prototype.order_id, setupFrabicProtect: Omit<SetupFrabicProtect, 'id'>): Promise<SetupFrabicProtect>;
    patch(id: string, setupFrabicProtect: Partial<SetupFrabicProtect>, where?: Where<SetupFrabicProtect>): Promise<Count>;
    delete(id: string, where?: Where<SetupFrabicProtect>): Promise<Count>;
}
