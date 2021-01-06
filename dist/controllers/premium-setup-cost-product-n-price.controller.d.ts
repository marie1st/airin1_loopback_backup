import { Count, Filter, Where } from '@loopback/repository';
import { PremiumSetupCost, ProductNPrice } from '../models';
import { PremiumSetupCostRepository } from '../repositories';
export declare class PremiumSetupCostProductNPriceController {
    protected premiumSetupCostRepository: PremiumSetupCostRepository;
    constructor(premiumSetupCostRepository: PremiumSetupCostRepository);
    get(id: number, filter?: Filter<ProductNPrice>): Promise<ProductNPrice>;
    create(id: typeof PremiumSetupCost.prototype.id, productNPrice: Omit<ProductNPrice, 'id'>): Promise<ProductNPrice>;
    patch(id: number, productNPrice: Partial<ProductNPrice>, where?: Where<ProductNPrice>): Promise<Count>;
    delete(id: number, where?: Where<ProductNPrice>): Promise<Count>;
}
