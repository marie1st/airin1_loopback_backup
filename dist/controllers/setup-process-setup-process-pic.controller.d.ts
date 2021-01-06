import { Count, Filter, Where } from '@loopback/repository';
import { SetupProcess, SetupProcessPic } from '../models';
import { SetupProcessRepository } from '../repositories';
export declare class SetupProcessSetupProcessPicController {
    protected setupProcessRepository: SetupProcessRepository;
    constructor(setupProcessRepository: SetupProcessRepository);
    find(id: number, filter?: Filter<SetupProcessPic>): Promise<SetupProcessPic[]>;
    create(id: typeof SetupProcess.prototype.id, setupProcessPic: Omit<SetupProcessPic, 'id'>): Promise<SetupProcessPic>;
    patch(id: number, setupProcessPic: Partial<SetupProcessPic>, where?: Where<SetupProcessPic>): Promise<Count>;
    delete(id: number, where?: Where<SetupProcessPic>): Promise<Count>;
}
