import { SetupFrabicProtect, OrderProduct } from '../models';
import { SetupFrabicProtectRepository } from '../repositories';
export declare class SetupFrabicProtectOrderProductController {
    setupFrabicProtectRepository: SetupFrabicProtectRepository;
    constructor(setupFrabicProtectRepository: SetupFrabicProtectRepository);
    getOrderProduct(id: typeof SetupFrabicProtect.prototype.id): Promise<OrderProduct>;
}
