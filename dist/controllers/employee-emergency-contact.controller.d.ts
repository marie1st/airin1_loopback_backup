import { Count, Filter, Where } from '@loopback/repository';
import { Employee, EmergencyContact } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeEmergencyContactController {
    protected employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    get(id: string, filter?: Filter<EmergencyContact>): Promise<EmergencyContact>;
    create(id: typeof Employee.prototype.employee_id, emergencyContact: Omit<EmergencyContact, 'id'>): Promise<EmergencyContact>;
    patch(id: string, emergencyContact: Partial<EmergencyContact>, where?: Where<EmergencyContact>): Promise<Count>;
    delete(id: string, where?: Where<EmergencyContact>): Promise<Count>;
}
