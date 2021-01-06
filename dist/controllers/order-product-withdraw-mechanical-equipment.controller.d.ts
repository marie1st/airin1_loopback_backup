import { Count, Filter, Where } from '@loopback/repository';
import { OrderProduct, WithdrawMechanicalEquipment } from '../models';
import { OrderProductRepository } from '../repositories';
export declare class OrderProductWithdrawMechanicalEquipmentController {
    protected orderProductRepository: OrderProductRepository;
    constructor(orderProductRepository: OrderProductRepository);
    find(id: string, filter?: Filter<WithdrawMechanicalEquipment>): Promise<WithdrawMechanicalEquipment[]>;
    create(id: typeof OrderProduct.prototype.order_id, withdrawMechanicalEquipment: Omit<WithdrawMechanicalEquipment, 'id'>): Promise<WithdrawMechanicalEquipment>;
    patch(id: string, withdrawMechanicalEquipment: Partial<WithdrawMechanicalEquipment>, where?: Where<WithdrawMechanicalEquipment>): Promise<Count>;
    delete(id: string, where?: Where<WithdrawMechanicalEquipment>): Promise<Count>;
}
