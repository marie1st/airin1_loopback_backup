import { Count, Filter, Where } from '@loopback/repository';
import { Employee, Employment } from '../models';
import { EmploymentRepository } from '../repositories';
export declare class EmploymentEmployeeController {
    protected employmentRepository: EmploymentRepository;
    constructor(employmentRepository: EmploymentRepository);
    find(id: number, filter?: Filter<Employee>): Promise<Employee[]>;
    create(id: typeof Employment.prototype.id, employee: Omit<Employee, 'employee_id'>): Promise<Employee>;
    patch(id: number, employee: Partial<Employee>, where?: Where<Employee>): Promise<Count>;
    delete(id: number, where?: Where<Employee>): Promise<Count>;
}
