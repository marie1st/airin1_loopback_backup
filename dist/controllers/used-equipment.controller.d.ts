import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UsedEquipment } from '../models';
import { UsedEquipmentRepository } from '../repositories';
export declare class UsedEquipmentController {
    usedEquipmentRepository: UsedEquipmentRepository;
    constructor(usedEquipmentRepository: UsedEquipmentRepository);
    create(usedEquipment: UsedEquipment): Promise<UsedEquipment>;
    count(where?: Where<UsedEquipment>): Promise<Count>;
    find(filter?: Filter<UsedEquipment>): Promise<UsedEquipment[]>;
    updateAll(usedEquipment: UsedEquipment, where?: Where<UsedEquipment>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<UsedEquipment>): Promise<UsedEquipment>;
    updateById(id: number, usedEquipment: UsedEquipment): Promise<void>;
    replaceById(id: number, usedEquipment: UsedEquipment): Promise<void>;
    deleteById(id: number): Promise<void>;
}
