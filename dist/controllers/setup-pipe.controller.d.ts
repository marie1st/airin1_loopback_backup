import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupPipe } from '../models';
import { SetupPipeRepository } from '../repositories';
export declare class SetupPipeController {
    setupPipeRepository: SetupPipeRepository;
    constructor(setupPipeRepository: SetupPipeRepository);
    create(setupPipe: SetupPipe): Promise<SetupPipe>;
    count(where?: Where<SetupPipe>): Promise<Count>;
    find(filter?: Filter<SetupPipe>): Promise<SetupPipe[]>;
    updateAll(setupPipe: SetupPipe, where?: Where<SetupPipe>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupPipe>): Promise<SetupPipe>;
    updateById(id: number, setupPipe: SetupPipe): Promise<void>;
    replaceById(id: number, setupPipe: SetupPipe): Promise<void>;
    deleteById(id: number): Promise<void>;
}
