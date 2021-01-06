import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, WithdrawUsedEquipment } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductWithdrawUsedEquipmentController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    find(id: string, filter?: Filter<WithdrawUsedEquipment>): Promise<WithdrawUsedEquipment[]>;
    create(id: typeof OrderProduct.prototype.order_id, withdrawUsedEquipment: Omit<WithdrawUsedEquipment, 'id'>): Promise<WithdrawUsedEquipment>;
    patch(id: string, withdrawUsedEquipment: Partial<WithdrawUsedEquipment>, where?: Where<WithdrawUsedEquipment>): Promise<Count>;
    delete(id: string, where?: Where<WithdrawUsedEquipment>): Promise<Count>;
}
