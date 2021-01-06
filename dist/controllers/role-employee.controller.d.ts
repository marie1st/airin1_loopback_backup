import { Count, Filter, Where } from '@loopback/repository';
import { Role, Employee } from '../models';
import { RoleRepository } from '../repositories';
export declare class RoleEmployeeController {
    protected roleRepository: RoleRepository;
    constructor(roleRepository: RoleRepository);
    find(id: number, filter?: Filter<Employee>): Promise<Employee[]>;
    create(id: typeof Role.prototype.id, employee: Omit<Employee, 'employee_id'>): Promise<Employee>;
    patch(id: number, employee: Partial<Employee>, where?: Where<Employee>): Promise<Count>;
    delete(id: number, where?: Where<Employee>): Promise<Count>;
}
