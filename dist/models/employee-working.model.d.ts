import { Entity } from '@loopback/repository';
export declare class EmployeeWorking extends Entity {
    date: string;
    id: number;
    employee_id: string;
    order_id: string;
    constructor(data?: Partial<EmployeeWorking>);
}
export interface EmployeeWorkingRelations {
}
export declare type EmployeeWorkingWithRelations = EmployeeWorking & EmployeeWorkingRelations;
