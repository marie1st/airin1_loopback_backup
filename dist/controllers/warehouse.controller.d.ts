import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Warehouse } from '../models';
import { WarehouseRepository } from '../repositories';
export declare class WarehouseController {
    warehouseRepository: WarehouseRepository;
    constructor(warehouseRepository: WarehouseRepository);
    create(warehouse: Warehouse): Promise<Warehouse>;
    count(where?: Where<Warehouse>): Promise<Count>;
    find(filter?: Filter<Warehouse>): Promise<Warehouse[]>;
    updateAll(warehouse: Warehouse, where?: Where<Warehouse>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Warehouse>): Promise<Warehouse>;
    updateById(id: number, warehouse: Warehouse): Promise<void>;
    replaceById(id: number, warehouse: Warehouse): Promise<void>;
    deleteById(id: number): Promise<void>;
}
