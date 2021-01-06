import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Department, DepartmentRelations, Employee } from '../models';
import { EmployeeRepository } from './employee.repository';
export declare class DepartmentRepository extends DefaultCrudRepository<Department, typeof Department.prototype.id, DepartmentRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    readonly employees: HasManyRepositoryFactory<Employee, typeof Department.prototype.id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>);
}
