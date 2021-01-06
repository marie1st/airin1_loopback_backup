import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupProcess } from '../models';
import { SetupProcessRepository } from '../repositories';
export declare class SetupProcessController {
    setupProcessRepository: SetupProcessRepository;
    constructor(setupProcessRepository: SetupProcessRepository);
    create(setupProcess: SetupProcess): Promise<SetupProcess>;
    count(where?: Where<SetupProcess>): Promise<Count>;
    find(filter?: Filter<SetupProcess>): Promise<SetupProcess[]>;
    updateAll(setupProcess: SetupProcess, where?: Where<SetupProcess>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupProcess>): Promise<SetupProcess>;
    updateById(id: number, setupProcess: SetupProcess): Promise<void>;
    replaceById(id: number, setupProcess: SetupProcess): Promise<void>;
    deleteById(id: number): Promise<void>;
}
