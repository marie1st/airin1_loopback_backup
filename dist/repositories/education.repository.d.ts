import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { Education, EducationRelations, Employee } from '../models';
import { EmployeeRepository } from './employee.repository';
export declare class EducationRepository extends DefaultCrudRepository<Education, typeof Education.prototype.id, EducationRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    readonly employee: HasOneRepositoryFactory<Employee, typeof Education.prototype.id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>);
}
