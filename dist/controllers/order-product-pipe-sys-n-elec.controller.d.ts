import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, PipeSysNElec } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductPipeSysNElecController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<PipeSysNElec>): Promise<PipeSysNElec>;
    create(id: typeof OrderProduct.prototype.order_id, pipeSysNElec: Omit<PipeSysNElec, 'id'>): Promise<PipeSysNElec>;
    patch(id: string, pipeSysNElec: Partial<PipeSysNElec>, where?: Where<PipeSysNElec>): Promise<Count>;
    delete(id: string, where?: Where<PipeSysNElec>): Promise<Count>;
}
