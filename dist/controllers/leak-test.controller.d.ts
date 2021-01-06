import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { LeakTest } from '../models';
import { LeakTestRepository } from '../repositories';
export declare class LeakTestController {
    leakTestRepository: LeakTestRepository;
    constructor(leakTestRepository: LeakTestRepository);
    create(leakTest: LeakTest): Promise<LeakTest>;
    count(where?: Where<LeakTest>): Promise<Count>;
    find(filter?: Filter<LeakTest>): Promise<LeakTest[]>;
    updateAll(leakTest: LeakTest, where?: Where<LeakTest>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<LeakTest>): Promise<LeakTest>;
    updateById(id: number, leakTest: LeakTest): Promise<void>;
    replaceById(id: number, leakTest: LeakTest): Promise<void>;
    deleteById(id: number): Promise<void>;
}
