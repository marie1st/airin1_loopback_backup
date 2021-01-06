import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { AirinoneDataSource } from '../datasources';
import { EmergencyContact, EmergencyContactRelations, Employee } from '../models';
import { EmployeeRepository } from './employee.repository';
export declare class EmergencyContactRepository extends DefaultCrudRepository<EmergencyContact, typeof EmergencyContact.prototype.employee_id, EmergencyContactRelations> {
    protected employeeRepositoryGetter: Getter<EmployeeRepository>;
    readonly Employee: BelongsToAccessor<Employee, typeof EmergencyContact.prototype.employee_id>;
    constructor(dataSource: AirinoneDataSource, employeeRepositoryGetter: Getter<EmployeeRepository>);
}
