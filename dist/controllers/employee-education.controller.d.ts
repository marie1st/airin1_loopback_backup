import { Employee, Education } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeEducationController {
    employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getEducation(id: typeof Employee.prototype.employee_id): Promise<Education>;
}
