import { Employee, Employment } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeEmploymentController {
    employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getEmployment(id: typeof Employee.prototype.employee_id): Promise<Employment>;
}
