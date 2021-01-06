import { SetupCdu, OrderProduct } from '../models';
import { SetupCduRepository } from '../repositories';
export declare class SetupCduOrderProductController {
    setupCduRepository: SetupCduRepository;
    constructor(setupCduRepository: SetupCduRepository);
    getOrderProduct(id: typeof SetupCdu.prototype.id): Promise<OrderProduct>;
}
