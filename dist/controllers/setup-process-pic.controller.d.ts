import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { SetupProcessPic } from '../models';
import { SetupProcessPicRepository } from '../repositories';
export declare class SetupProcessPicController {
    setupProcessPicRepository: SetupProcessPicRepository;
    constructor(setupProcessPicRepository: SetupProcessPicRepository);
    create(setupProcessPic: SetupProcessPic): Promise<SetupProcessPic>;
    count(where?: Where<SetupProcessPic>): Promise<Count>;
    find(filter?: Filter<SetupProcessPic>): Promise<SetupProcessPic[]>;
    updateAll(setupProcessPic: SetupProcessPic, where?: Where<SetupProcessPic>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<SetupProcessPic>): Promise<SetupProcessPic>;
    updateById(id: number, setupProcessPic: SetupProcessPic): Promise<void>;
    replaceById(id: number, setupProcessPic: SetupProcessPic): Promise<void>;
    deleteById(id: number): Promise<void>;
}
