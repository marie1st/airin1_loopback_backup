import { Entity } from '@loopback/repository';
import { EmergencyContact } from './emergency-contact.model';
import { EmployeeWorking } from './employee-working.model';
export declare class Employee extends Entity {
    first_name: string;
    last_name: string;
    phone_number: string;
    birth_date?: string;
    education_id?: number;
    talent?: string;
    etc?: string;
    email: string;
    id_line?: string;
    facebook?: string;
    profile_pic?: string;
    id_card_pic?: string;
    address?: string;
    country?: string;
    province?: string;
    subdistrict?: string;
    postcode?: string;
    start_date?: string;
    salary: number;
    super_id: string;
    created_at?: string;
    employee_id: string;
    emergencyContact: EmergencyContact;
    educationId: number;
    departmentId: number;
    roleId: number;
    employmentId: number;
    employement_id: number;
    employeeWorkings: EmployeeWorking[];
    constructor(data?: Partial<Employee>);
}
export interface EmployeeRelations {
}
export declare type EmployeeWithRelations = Employee & EmployeeRelations;
