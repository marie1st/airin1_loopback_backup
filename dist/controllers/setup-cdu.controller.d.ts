import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupCdu } from '../models';
import { SetupCduRepository } from '../repositories';
export declare class SetupCduController {
    setupCduRepository: SetupCduRepository;
    constructor(setupCduRepository: SetupCduRepository);
    create(setupCdu: SetupCdu): Promise<SetupCdu>;
    count(where?: Where<SetupCdu>): Promise<Count>;
    find(filter?: Filter<SetupCdu>): Promise<SetupCdu[]>;
    updateAll(setupCdu: SetupCdu, where?: Where<SetupCdu>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupCdu>): Promise<SetupCdu>;
    updateById(id: number, setupCdu: SetupCdu): Promise<void>;
    replaceById(id: number, setupCdu: SetupCdu): Promise<void>;
    deleteById(id: number): Promise<void>;
}
