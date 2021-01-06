import { SetupPipe, OrderProduct } from '../models';
import { SetupPipeRepository } from '../repositories';
export declare class SetupPipeOrderProductController {
    setupPipeRepository: SetupPipeRepository;
    constructor(setupPipeRepository: SetupPipeRepository);
    getOrderProduct(id: typeof SetupPipe.prototype.id): Promise<OrderProduct>;
}
