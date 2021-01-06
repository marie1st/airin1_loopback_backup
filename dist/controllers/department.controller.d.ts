import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Department } from '../models';
import { DepartmentRepository } from '../repositories';
export declare class DepartmentController {
    departmentRepository: DepartmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    create(department: Department): Promise<Department>;
    count(where?: Where<Department>): Promise<Count>;
    find(filter?: Filter<Department>): Promise<Department[]>;
    updateAll(department: Department, where?: Where<Department>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Department>): Promise<Department>;
    updateById(id: number, department: Department): Promise<void>;
    replaceById(id: number, department: Department): Promise<void>;
    deleteById(id: number): Promise<void>;
}
