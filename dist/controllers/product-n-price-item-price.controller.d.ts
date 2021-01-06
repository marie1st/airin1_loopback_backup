import { ProductNPrice, ItemPrice } from '../models';
import { ProductNPriceRepository } from '../repositories';
export declare class ProductNPriceItemPriceController {
    productNPriceRepository: ProductNPriceRepository;
    constructor(productNPriceRepository: ProductNPriceRepository);
    getItemPrice(id: typeof ProductNPrice.prototype.id): Promise<ItemPrice>;
}
