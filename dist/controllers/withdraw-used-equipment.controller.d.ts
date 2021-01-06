import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WithdrawUsedEquipment } from '../models';
import { WithdrawUsedEquipmentRepository } from '../repositories';
export declare class WithdrawUsedEquipmentController {
    withdrawUsedEquipmentRepository: WithdrawUsedEquipmentRepository;
    constructor(withdrawUsedEquipmentRepository: WithdrawUsedEquipmentRepository);
    create(withdrawUsedEquipment: WithdrawUsedEquipment): Promise<WithdrawUsedEquipment>;
    count(where?: Where<WithdrawUsedEquipment>): Promise<Count>;
    find(filter?: Filter<WithdrawUsedEquipment>): Promise<WithdrawUsedEquipment[]>;
    updateAll(withdrawUsedEquipment: WithdrawUsedEquipment, where?: Where<WithdrawUsedEquipment>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<WithdrawUsedEquipment>): Promise<WithdrawUsedEquipment>;
    updateById(id: number, withdrawUsedEquipment: WithdrawUsedEquipment): Promise<void>;
    replaceById(id: number, withdrawUsedEquipment: WithdrawUsedEquipment): Promise<void>;
    deleteById(id: number): Promise<void>;
}
