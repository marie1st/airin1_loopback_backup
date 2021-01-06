import { LeakTest, OrderProduct } from '../models';
import { LeakTestRepository } from '../repositories';
export declare class LeakTestOrderProductController {
    leakTestRepository: LeakTestRepository;
    constructor(leakTestRepository: LeakTestRepository);
    getOrderProduct(id: typeof LeakTest.prototype.id): Promise<OrderProduct>;
}
