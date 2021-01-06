import { Entity } from '@loopback/repository';
import { Employee } from './employee.model';
export declare class Education extends Entity {
    id?: number;
    name: string;
    employee: Employee;
    constructor(data?: Partial<Education>);
}
export interface EducationRelations {
}
export declare type EducationWithRelations = Education & EducationRelations;
