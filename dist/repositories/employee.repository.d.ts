import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Employee, EmployeeRelations, EmergencyContact, Education, Department, Role, Employment, EmployeeWorking } from '../models';
import { EmergencyContactRepository } from './emergency-contact.repository';
import { EducationRepository } from './education.repository';
import { DepartmentRepository } from './department.repository';
import { RoleRepository } from './role.repository';
import { EmploymentRepository } from './employment.repository';
import { EmployeeWorkingRepository } from './employee-working.repository';
export declare class EmployeeRepository extends DefaultCrudRepository<Employee, typeof Employee.prototype.employee_id, EmployeeRelations> {
    protected emergencyContactRepositoryGetter: Getter<EmergencyContactRepository>;
    protected educationRepositoryGetter: Getter<EducationRepository>;
    protected departmentRepositoryGetter: Getter<DepartmentRepository>;
    protected roleRepositoryGetter: Getter<RoleRepository>;
    protected employmentRepositoryGetter: Getter<EmploymentRepository>;
    protected employeeWorkingRepositoryGetter: Getter<EmployeeWorkingRepository>;
    readonly emergencyContact: HasOneRepositoryFactory<EmergencyContact, typeof Employee.prototype.employee_id>;
    readonly education: BelongsToAccessor<Education, typeof Employee.prototype.employee_id>;
    readonly department: BelongsToAccessor<Department, typeof Employee.prototype.employee_id>;
    readonly role: BelongsToAccessor<Role, typeof Employee.prototype.employee_id>;
    readonly employment: BelongsToAccessor<Employment, typeof Employee.prototype.employee_id>;
    readonly Employment: BelongsToAccessor<Employment, typeof Employee.prototype.employee_id>;
    readonly employeeWorkings: HasManyRepositoryFactory<EmployeeWorking, typeof Employee.prototype.employee_id>;
    constructor(dataSource: AirinoneDataSource, emergencyContactRepositoryGetter: Getter<EmergencyContactRepository>, educationRepositoryGetter: Getter<EducationRepository>, departmentRepositoryGetter: Getter<DepartmentRepository>, roleRepositoryGetter: Getter<RoleRepository>, employmentRepositoryGetter: Getter<EmploymentRepository>, employeeWorkingRepositoryGetter: Getter<EmployeeWorkingRepository>);
}
