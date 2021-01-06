import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupFrabicProtect } from '../models';
import { SetupFrabicProtectRepository } from '../repositories';
export declare class SetupFrabicProtectController {
    setupFrabicProtectRepository: SetupFrabicProtectRepository;
    constructor(setupFrabicProtectRepository: SetupFrabicProtectRepository);
    create(setupFrabicProtect: SetupFrabicProtect): Promise<SetupFrabicProtect>;
    count(where?: Where<SetupFrabicProtect>): Promise<Count>;
    find(filter?: Filter<SetupFrabicProtect>): Promise<SetupFrabicProtect[]>;
    updateAll(setupFrabicProtect: SetupFrabicProtect, where?: Where<SetupFrabicProtect>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupFrabicProtect>): Promise<SetupFrabicProtect>;
    updateById(id: number, setupFrabicProtect: SetupFrabicProtect): Promise<void>;
    replaceById(id: number, setupFrabicProtect: SetupFrabicProtect): Promise<void>;
    deleteById(id: number): Promise<void>;
}
