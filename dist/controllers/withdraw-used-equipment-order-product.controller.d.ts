import { WithdrawUsedEquipment, OrderProduct } from '../models';
import { WithdrawUsedEquipmentRepository } from '../repositories';
export declare class WithdrawUsedEquipmentOrderProductController {
    withdrawUsedEquipmentRepository: WithdrawUsedEquipmentRepository;
    constructor(withdrawUsedEquipmentRepository: WithdrawUsedEquipmentRepository);
    getOrderProduct(id: typeof WithdrawUsedEquipment.prototype.id): Promise<OrderProduct>;
}
