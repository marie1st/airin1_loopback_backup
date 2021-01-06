import { Employee, Role } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeRoleController {
    employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getRole(id: typeof Employee.prototype.employee_id): Promise<Role>;
}
