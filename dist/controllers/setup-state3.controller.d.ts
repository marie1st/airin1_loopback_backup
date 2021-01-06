import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupState3 } from '../models';
import { SetupState3Repository } from '../repositories';
export declare class SetupState3Controller {
    setupState3Repository: SetupState3Repository;
    constructor(setupState3Repository: SetupState3Repository);
    create(setupState3: SetupState3): Promise<SetupState3>;
    count(where?: Where<SetupState3>): Promise<Count>;
    find(filter?: Filter<SetupState3>): Promise<SetupState3[]>;
    updateAll(setupState3: SetupState3, where?: Where<SetupState3>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupState3>): Promise<SetupState3>;
    updateById(id: number, setupState3: SetupState3): Promise<void>;
    replaceById(id: number, setupState3: SetupState3): Promise<void>;
    deleteById(id: number): Promise<void>;
}
