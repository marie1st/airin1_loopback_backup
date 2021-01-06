import { Entity } from '@loopback/repository';
import { Employee } from './employee.model';
export declare class Employment extends Entity {
    id?: number;
    name: string;
    employees: Employee[];
    constructor(data?: Partial<Employment>);
}
export interface EmploymentRelations {
}
export declare type EmploymentWithRelations = Employment & EmploymentRelations;
