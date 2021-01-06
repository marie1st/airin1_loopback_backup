import { SetupProcessPic, SetupProcess } from '../models';
import { SetupProcessPicRepository } from '../repositories';
export declare class SetupProcessPicSetupProcessController {
    setupProcessPicRepository: SetupProcessPicRepository;
    constructor(setupProcessPicRepository: SetupProcessPicRepository);
    getSetupProcess(id: typeof SetupProcessPic.prototype.id): Promise<SetupProcess>;
}
