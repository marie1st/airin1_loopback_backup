import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Wage } from '../models';
import { WageRepository } from '../repositories';
export declare class WageController {
    wageRepository: WageRepository;
    constructor(wageRepository: WageRepository);
    create(wage: Wage): Promise<Wage>;
    count(where?: Where<Wage>): Promise<Count>;
    find(filter?: Filter<Wage>): Promise<Wage[]>;
    updateAll(wage: Wage, where?: Where<Wage>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Wage>): Promise<Wage>;
    updateById(id: number, wage: Wage): Promise<void>;
    replaceById(id: number, wage: Wage): Promise<void>;
    deleteById(id: number): Promise<void>;
}
