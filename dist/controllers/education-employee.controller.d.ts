import { Count, Filter, Where } from '@loopback/repository';
import { Education, Employee } from '../models';
import { EducationRepository } from '../repositories';
export declare class EducationEmployeeController {
    protected educationRepository: EducationRepository;
    constructor(educationRepository: EducationRepository);
    get(id: number, filter?: Filter<Employee>): Promise<Employee>;
    create(id: typeof Education.prototype.id, employee: Omit<Employee, 'employee_id'>): Promise<Employee>;
    patch(id: number, employee: Partial<Employee>, where?: Where<Employee>): Promise<Count>;
    delete(id: number, where?: Where<Employee>): Promise<Count>;
}
