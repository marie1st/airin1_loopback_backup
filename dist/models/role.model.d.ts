import { Entity } from '@loopback/repository';
import { Employee } from './employee.model';
export declare class Role extends Entity {
    id?: number;
    name: string;
    employees: Employee[];
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
