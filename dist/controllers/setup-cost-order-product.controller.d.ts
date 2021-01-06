import { SetupCost, OrderProduct } from '../models';
import { SetupCostRepository } from '../repositories';
export declare class SetupCostOrderProductController {
    setupCostRepository: SetupCostRepository;
    constructor(setupCostRepository: SetupCostRepository);
    getOrderProduct(id: typeof SetupCost.prototype.id): Promise<OrderProduct>;
}
