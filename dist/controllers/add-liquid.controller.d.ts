import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AddLiquid } from '../models';
import { AddLiquidRepository } from '../repositories';
export declare class AddLiquidController {
    addLiquidRepository: AddLiquidRepository;
    constructor(addLiquidRepository: AddLiquidRepository);
    create(addLiquid: AddLiquid): Promise<AddLiquid>;
    count(where?: Where<AddLiquid>): Promise<Count>;
    find(filter?: Filter<AddLiquid>): Promise<AddLiquid[]>;
    updateAll(addLiquid: AddLiquid, where?: Where<AddLiquid>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<AddLiquid>): Promise<AddLiquid>;
    updateById(id: number, addLiquid: AddLiquid): Promise<void>;
    replaceById(id: number, addLiquid: AddLiquid): Promise<void>;
    deleteById(id: number): Promise<void>;
}
