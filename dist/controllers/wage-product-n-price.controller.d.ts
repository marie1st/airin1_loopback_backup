import { Count, Filter, Where } from '@loopback/repository';
import { Wage, ProductNPrice } from '../models';
import { WageRepository } from '../repositories';
export declare class WageProductNPriceController {
    protected wageRepository: WageRepository;
    constructor(wageRepository: WageRepository);
    get(id: number, filter?: Filter<ProductNPrice>): Promise<ProductNPrice>;
    create(id: typeof Wage.prototype.id, productNPrice: Omit<ProductNPrice, 'id'>): Promise<ProductNPrice>;
    patch(id: number, productNPrice: Partial<ProductNPrice>, where?: Where<ProductNPrice>): Promise<Count>;
    delete(id: number, where?: Where<ProductNPrice>): Promise<Count>;
}
