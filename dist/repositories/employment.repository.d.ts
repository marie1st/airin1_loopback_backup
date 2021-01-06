import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Employee, Employment, EmploymentRelations } from '../models';
import { EmployeeRepository } from './employee.repository';
export declare class EmploymentRepository extends DefaultCrudRepository<Employment, typeof Employment.prototype.id, EmploymentRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    readonly employees: HasManyRepositoryFactory<Employee, typeof Employment.prototype.id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>);
}
