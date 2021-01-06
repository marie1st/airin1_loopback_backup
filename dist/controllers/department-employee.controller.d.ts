import { Count, Filter, Where } from '@loopback/repository';
import { Department, Employee } from '../models';
import { DepartmentRepository } from '../repositories';
export declare class DepartmentEmployeeController {
    protected departmentRepository: DepartmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    find(id: number, filter?: Filter<Employee>): Promise<Employee[]>;
    create(id: typeof Department.prototype.id, employee: Omit<Employee, 'employee_id'>): Promise<Employee>;
    patch(id: number, employee: Partial<Employee>, where?: Where<Employee>): Promise<Count>;
    delete(id: number, where?: Where<Employee>): Promise<Count>;
}
