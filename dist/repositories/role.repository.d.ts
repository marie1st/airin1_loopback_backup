import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Role, RoleRelations, Employee } from '../models';
import { EmployeeRepository } from './employee.repository';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id, RoleRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    readonly employees: HasManyRepositoryFactory<Employee, typeof Role.prototype.id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>);
}
