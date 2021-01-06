import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, AddLiquid } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductAddLiquidController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    get(id: string, filter?: Filter<AddLiquid>): Promise<AddLiquid>;
    create(id: typeof OrderProduct.prototype.order_id, addLiquid: Omit<AddLiquid, 'id'>): Promise<AddLiquid>;
    patch(id: string, addLiquid: Partial<AddLiquid>, where?: Where<AddLiquid>): Promise<Count>;
    delete(id: string, where?: Where<AddLiquid>): Promise<Count>;
}
