import { SetupFcu, OrderProduct } from '../models';
import { SetupFcuRepository } from '../repositories';
export declare class SetupFcuOrderProductController {
    setupFcuRepository: SetupFcuRepository;
    constructor(setupFcuRepository: SetupFcuRepository);
    getOrderProduct(id: typeof SetupFcu.prototype.id): Promise<OrderProduct>;
}
