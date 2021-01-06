import { Entity } from '@loopback/repository';
export declare class EmergencyContact extends Entity {
    first_name: string;
    last_name: string;
    phone_number: string;
    relationship: string;
    id: number;
    employee_id: string;
    employeeId?: string;
    constructor(data?: Partial<EmergencyContact>);
}
export interface EmergencyContactRelations {
}
export declare type EmergencyContactWithRelations = EmergencyContact & EmergencyContactRelations;
