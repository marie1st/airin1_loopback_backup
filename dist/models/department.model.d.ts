import { Entity } from '@loopback/repository';
import { Employee } from './employee.model';
export declare class Department extends Entity {
    id?: number;
    name: string;
    employees: Employee[];
    constructor(data?: Partial<Department>);
}
export interface DepartmentRelations {
}
export declare type DepartmentWithRelations = Department & DepartmentRelations;
