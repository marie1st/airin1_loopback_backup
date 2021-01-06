import { VacummTest, OrderProduct } from '../models';
import { VacummTestRepository } from '../repositories';
export declare class VacummTestOrderProductController {
    vacummTestRepository: VacummTestRepository;
    constructor(vacummTestRepository: VacummTestRepository);
    getOrderProduct(id: typeof VacummTest.prototype.id): Promise<OrderProduct>;
}
