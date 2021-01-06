import { Count, Filter, Where } from '@loopback/repository';
import { ItemPrice, ProductNPrice } from '../models';
import { ItemPriceRepository } from '../repositories';
export declare class ItemPriceProductNPriceController {
    protected itemPriceRepository: ItemPriceRepository;
    constructor(itemPriceRepository: ItemPriceRepository);
    get(id: number, filter?: Filter<ProductNPrice>): Promise<ProductNPrice>;
    create(id: typeof ItemPrice.prototype.id, productNPrice: Omit<ProductNPrice, 'id'>): Promise<ProductNPrice>;
    patch(id: number, productNPrice: Partial<ProductNPrice>, where?: Where<ProductNPrice>): Promise<Count>;
    delete(id: number, where?: Where<ProductNPrice>): Promise<Count>;
}
