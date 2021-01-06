import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WithdrawMechanicalEquipment } from '../models';
import { WithdrawMechanicalEquipmentRepository } from '../repositories';
export declare class WithdrawMechanicalEquipmentController {
    withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository;
    constructor(withdrawMechanicalEquipmentRepository: WithdrawMechanicalEquipmentRepository);
    create(withdrawMechanicalEquipment: WithdrawMechanicalEquipment): Promise<WithdrawMechanicalEquipment>;
    count(where?: Where<WithdrawMechanicalEquipment>): Promise<Count>;
    find(filter?: Filter<WithdrawMechanicalEquipment>): Promise<WithdrawMechanicalEquipment[]>;
    updateAll(withdrawMechanicalEquipment: WithdrawMechanicalEquipment, where?: Where<WithdrawMechanicalEquipment>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<WithdrawMechanicalEquipment>): Promise<WithdrawMechanicalEquipment>;
    updateById(id: number, withdrawMechanicalEquipment: WithdrawMechanicalEquipment): Promise<void>;
    replaceById(id: number, withdrawMechanicalEquipment: WithdrawMechanicalEquipment): Promise<void>;
    deleteById(id: number): Promise<void>;
}
