import { Count, Filter, Where } from '@loopback/repository';
import { Employee, EmployeeWorking } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeEmployeeWorkingController {
    protected employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    find(id: string, filter?: Filter<EmployeeWorking>): Promise<EmployeeWorking[]>;
    create(id: typeof Employee.prototype.employee_id, employeeWorking: Omit<EmployeeWorking, 'id'>): Promise<EmployeeWorking>;
    patch(id: string, employeeWorking: Partial<EmployeeWorking>, where?: Where<EmployeeWorking>): Promise<Count>;
    delete(id: string, where?: Where<EmployeeWorking>): Promise<Count>;
}
