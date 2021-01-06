import { Employee, Department } from '../models';
import { EmployeeRepository } from '../repositories';
export declare class EmployeeDepartmentController {
    employeeRepository: EmployeeRepository;
    constructor(employeeRepository: EmployeeRepository);
    getDepartment(id: typeof Employee.prototype.employee_id): Promise<Department>;
}
