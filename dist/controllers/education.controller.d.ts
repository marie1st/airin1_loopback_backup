import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Education } from '../models';
import { EducationRepository } from '../repositories';
export declare class EducationController {
    educationRepository: EducationRepository;
    constructor(educationRepository: EducationRepository);
    create(education: Education): Promise<Education>;
    count(where?: Where<Education>): Promise<Count>;
    find(filter?: Filter<Education>): Promise<Education[]>;
    updateAll(education: Education, where?: Where<Education>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Education>): Promise<Education>;
    updateById(id: number, education: Education): Promise<void>;
    replaceById(id: number, education: Education): Promise<void>;
    deleteById(id: number): Promise<void>;
}
