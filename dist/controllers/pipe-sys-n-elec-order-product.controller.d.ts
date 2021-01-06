import { PipeSysNElec, OrderProduct } from '../models';
import { PipeSysNElecRepository } from '../repositories';
export declare class PipeSysNElecOrderProductController {
    pipeSysNElecRepository: PipeSysNElecRepository;
    constructor(pipeSysNElecRepository: PipeSysNElecRepository);
    getOrderProduct(id: typeof PipeSysNElec.prototype.id): Promise<OrderProduct>;
}
