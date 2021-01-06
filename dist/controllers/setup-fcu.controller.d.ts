import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupFcu } from '../models';
import { SetupFcuRepository } from '../repositories';
export declare class SetupFcuController {
    setupFcuRepository: SetupFcuRepository;
    constructor(setupFcuRepository: SetupFcuRepository);
    create(setupFcu: SetupFcu): Promise<SetupFcu>;
    count(where?: Where<SetupFcu>): Promise<Count>;
    find(filter?: Filter<SetupFcu>): Promise<SetupFcu[]>;
    updateAll(setupFcu: SetupFcu, where?: Where<SetupFcu>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupFcu>): Promise<SetupFcu>;
    updateById(id: number, setupFcu: SetupFcu): Promise<void>;
    replaceById(id: number, setupFcu: SetupFcu): Promise<void>;
    deleteById(id: number): Promise<void>;
}
