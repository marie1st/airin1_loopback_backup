import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { EmergencyContact } from '../models';
import { EmergencyContactRepository } from '../repositories';
export declare class EmergencyContactController {
    emergencyContactRepository: EmergencyContactRepository;
    constructor(emergencyContactRepository: EmergencyContactRepository);
    create(emergencyContact: EmergencyContact): Promise<EmergencyContact>;
    count(where?: Where<EmergencyContact>): Promise<Count>;
    find(filter?: Filter<EmergencyContact>): Promise<EmergencyContact[]>;
    updateAll(emergencyContact: EmergencyContact, where?: Where<EmergencyContact>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<EmergencyContact>): Promise<EmergencyContact>;
    updateById(id: string, emergencyContact: EmergencyContact): Promise<void>;
    replaceById(id: string, emergencyContact: EmergencyContact): Promise<void>;
    deleteById(id: string): Promise<void>;
}
