import { WithdrawMechanicalEquipment, OrderProduct } from '../models';
import { WithdrawMechanicalEquipmentRepository } from '../repositories';
export declare class WithdrawMechanicalEquipmentOrderProductController {
    withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository;
    constructor(withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository);
    getOrderProduct(id: typeof WithdrawMechanicalEquipment.prototype.id): Promise<OrderProduct>;
}
