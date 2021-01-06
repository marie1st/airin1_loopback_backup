import { ProductNPrice, Wage } from '../models';
import { ProductNPriceRepository } from '../repositories';
export declare class ProductNPriceWageController {
    productNPriceRepository: ProductNPriceRepository;
    constructor(productNPriceRepository: ProductNPriceRepository);
    getWage(id: typeof ProductNPrice.prototype.id): Promise<Wage>;
}
