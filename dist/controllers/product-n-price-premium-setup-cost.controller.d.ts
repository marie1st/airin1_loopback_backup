import { ProductNPrice, PremiumSetupCost } from '../models';
import { ProductNPriceRepository } from '../repositories';
export declare class ProductNPricePremiumSetupCostController {
    productNPriceRepository: ProductNPriceRepository;
    constructor(productNPriceRepository: ProductNPriceRepository);
    getPremiumSetupCost(id: typeof ProductNPrice.prototype.id): Promise<PremiumSetupCost>;
}
