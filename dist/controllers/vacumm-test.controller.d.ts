import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { VacummTest } from '../models';
import { VacummTestRepository } from '../repositories';
export declare class VacummTestController {
    vacummTestRepository: VacummTestRepository;
    constructor(vacummTestRepository: VacummTestRepository);
    create(vacummTest: VacummTest): Promise<VacummTest>;
    count(where?: Where<VacummTest>): Promise<Count>;
    find(filter?: Filter<VacummTest>): Promise<VacummTest[]>;
    updateAll(vacummTest: VacummTest, where?: Where<VacummTest>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<VacummTest>): Promise<VacummTest>;
    updateById(id: number, vacummTest: VacummTest): Promise<void>;
    replaceById(id: number, vacummTest: VacummTest): Promise<void>;
    deleteById(id: number): Promise<void>;
}
