import { AddLiquid, OrderProduct } from '../models';
import { AddLiquidRepository } from '../repositories';
export declare class AddLiquidOrderProductController {
    addLiquidRepository: AddLiquidRepository;
    constructor(addLiquidRepository: AddLiquidRepository);
    getOrderProduct(id: typeof AddLiquid.prototype.id): Promise<OrderProduct>;
}
