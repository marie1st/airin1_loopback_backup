import { SetupProcessPic, OrderProduct } from '../models';
import { SetupProcessPicRepository } from '../repositories';
export declare class SetupProcessPicOrderProductController {
    setupProcessPicRepository: SetupProcessPicRepository;
    constructor(setupProcessPicRepository: SetupProcessPicRepository);
    getOrderProduct(id: typeof SetupProcessPic.prototype.id): Promise<OrderProduct>;
}
