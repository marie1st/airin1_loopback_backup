import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupCost } from '../models';
import { SetupCostRepository } from '../repositories';
export declare class SetupCostController {
    setupCostRepository: SetupCostRepository;
    constructor(setupCostRepository: SetupCostRepository);
    create(setupCost: SetupCost): Promise<SetupCost>;
    count(where?: Where<SetupCost>): Promise<Count>;
    find(filter?: Filter<SetupCost>): Promise<SetupCost[]>;
    updateAll(setupCost: SetupCost, where?: Where<SetupCost>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupCost>): Promise<SetupCost>;
    updateById(id: number, setupCost: SetupCost): Promise<void>;
    replaceById(id: number, setupCost: SetupCost): Promise<void>;
    deleteById(id: number): Promise<void>;
}
