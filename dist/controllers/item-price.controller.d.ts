import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ItemPrice } from '../models';
import { ItemPriceRepository } from '../repositories';
export declare class ItemPriceController {
    itemPriceRepository: ItemPriceRepository;
    constructor(itemPriceRepository: ItemPriceRepository);
    create(itemPrice: ItemPrice): Promise<ItemPrice>;
    count(where?: Where<ItemPrice>): Promise<Count>;
    find(filter?: Filter<ItemPrice>): Promise<ItemPrice[]>;
    updateAll(itemPrice: ItemPrice, where?: Where<ItemPrice>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ItemPrice>): Promise<ItemPrice>;
    updateById(id: number, itemPrice: ItemPrice): Promise<void>;
    replaceById(id: number, itemPrice: ItemPrice): Promise<void>;
    deleteById(id: number): Promise<void>;
}
